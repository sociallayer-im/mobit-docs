import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  IconButton,
  Tooltip,
  ButtonGroup,
  Button,
} from "@mui/material";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  vscDarkPlus,
  vs,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import FormatIndentIncreaseIcon from "@mui/icons-material/FormatIndentIncrease";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { format } from "graphql-formatter";
import useIsBrowser from "@docusaurus/useIsBrowser";
import { useColorMode } from "@docusaurus/theme-common";

interface LightGraphQLPlaygroundProps {
  defaultQuery: string;
  defaultVariables?: string;
  endpoint?: string;
}

export default function LightGraphQLPlayground({
  defaultQuery,
  defaultVariables = "{}",
  endpoint = "https://unistate-ckb-test.unistate.io/v1/graphql",
}: LightGraphQLPlaygroundProps) {
  const isBrowser = useIsBrowser();
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";
  const handleVarString = (str: string) => str.replace(/\\/g, '\\\\');
  defaultQuery = handleVarString(defaultQuery);

  const hasVariables =
    defaultQuery.includes("$") || defaultQuery.includes("variables");

  const [selectedEndpoint, setSelectedEndpoint] = useState(endpoint);
  const [query, setQuery] = useState(defaultQuery);
  const [variables, setVariables] = useState(() => {

    if (typeof defaultVariables === 'string') {
      return handleVarString(defaultVariables);
    }

    const networkType = endpoint.includes('test') ? 'test' : 'main';
    const vars = defaultVariables[networkType];

    return typeof vars === 'string'
      ? handleVarString(vars)
      : JSON.stringify(vars, null, 2);
  });

  const [result, setResult] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    try {
      const formattedQuery = format(defaultQuery);
      setQuery(formattedQuery);
    } catch (error) {
      console.error("Failed to format initial query:", error);
    }
  }, [defaultQuery]);

  const syntaxTheme = isDarkMode ? vscDarkPlus : vs;

  const handleCopyQuery = () => navigator.clipboard.writeText(query);

  const handleExecuteQuery = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(selectedEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query,
          variables: JSON.parse(variables),
        }),
      });
      const data = await response.json();
      setResult(data);
    } catch (error) {
      setResult({ error: error.message });
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormat = () => {
    try {
      setQuery(format(query));
    } catch (error) {
      console.error("Failed to format query:", error);
    }
  };

  if (!isBrowser) return null;

  const buttonStyle = {
    color: "var(--ifm-color-emphasis-700)",
    "&:hover": {
      color: "var(--ifm-color-primary)",
      backgroundColor: "var(--ifm-color-emphasis-200)",
    },
  };

  const networkButtonStyle = {
    color: "var(--ifm-color-emphasis-700)",
    borderColor: "var(--ifm-color-emphasis-300)",
    fontSize: "0.75rem",
    minWidth: "auto",
    px: 1,
    "&.Mui-selected, &:hover": {
      color: "var(--ifm-color-primary)",
      borderColor: "var(--ifm-color-primary)",
      backgroundColor: "var(--ifm-color-emphasis-200)",
    },
  };

  const activeNetworkButtonStyle = {
    ...networkButtonStyle,
    backgroundColor: "var(--ifm-color-primary-lighter)",
    color: "var(--ifm-color-primary-darker)",
    "&:hover": {
      backgroundColor: "var(--ifm-color-primary-lighter)",
      color: "var(--ifm-color-primary-darker)",
    },
  };
  return (
      <Box sx={{ my: 2 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            mb: 2,
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              border: 1,
              borderColor: "var(--ifm-color-emphasis-300)",
              borderRadius: 1,
              position: "relative",
              "&:hover .toolbar": {
                opacity: 1,
              },
              maxWidth: "100%",
            }}
          >
            <Box
              className="toolbar"
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                zIndex: 1,
                display: "flex",
                gap: 1,
                backgroundColor:
                  "rgba(var(--ifm-background-surface-color-rgb), 0.95)",
                backdropFilter: "blur(8px)",
                padding: "4px",
                borderRadius: 1,
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                opacity: 0,
                transition: "opacity 0.2s ease",
              }}
            >
              <ButtonGroup
                size="small"
                sx={{
                  "& .MuiButtonGroup-grouped": {
                    borderColor: "var(--ifm-color-emphasis-300)",
                  },
                }}
              >
                <Button
                  sx={
                    selectedEndpoint.includes("test")
                      ? activeNetworkButtonStyle
                      : networkButtonStyle
                  }
                  onClick={() =>
                    setSelectedEndpoint(
                      "https://unistate-ckb-test.unistate.io/v1/graphql",
                    )
                  }
                >
                  Test
                </Button>
                <Button
                  sx={
                    !selectedEndpoint.includes("test")
                      ? activeNetworkButtonStyle
                      : networkButtonStyle
                  }
                  onClick={() =>
                    setSelectedEndpoint(
                      "https://ckb-graph.unistate.io/v1/graphql",
                    )
                  }
                >
                  Main
                </Button>
              </ButtonGroup>

              <ButtonGroup
                size="small"
                sx={{
                  "& .MuiButtonGroup-grouped": {
                    borderColor: "var(--ifm-color-emphasis-300)",
                  },
                }}
              >
                <Tooltip title="Format Query">
                  <IconButton
                    size="small"
                    onClick={handleFormat}
                    sx={buttonStyle}
                  >
                    <FormatIndentIncreaseIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Copy Query">
                  <IconButton
                    size="small"
                    onClick={handleCopyQuery}
                    sx={buttonStyle}
                  >
                    <ContentCopyIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Execute Query">
                  <IconButton
                    size="small"
                    onClick={handleExecuteQuery}
                    disabled={isLoading}
                    sx={{
                      ...buttonStyle,
                      "&:hover": {
                        color: "var(--ifm-color-primary)",
                        backgroundColor: "var(--ifm-color-emphasis-200)",
                      },
                      "&.Mui-disabled": {
                        color: "var(--ifm-color-emphasis-300)",
                      },
                    }}
                  >
                    <PlayArrowIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </ButtonGroup>
            </Box>

            <SyntaxHighlighter
              language="graphql"
              style={syntaxTheme}
              customStyle={{
                margin: 0,
                padding: "16px",
                backgroundColor: "var(--ifm-background-surface-color)",
              }}
              contentEditable
              onKeyDown={(e) => {
                if (e.key === "Tab") {
                  e.preventDefault();
                  const selection = window.getSelection();
                  const range = selection?.getRangeAt(0);
                  const tabNode = document.createTextNode("  ");
                  range?.insertNode(tabNode);
                  range?.setStartAfter(tabNode);
                  range?.setEndAfter(tabNode);
                }
              }}
              onInput={(e) => {
                const newQuery = (e.target as HTMLElement).innerText;
                setQuery(newQuery);
                const hasVars =
                  newQuery.includes("$") || newQuery.includes("variables");
                if (!hasVars) {
                  setVariables("{}");
                }
              }}
            >
              {query}
            </SyntaxHighlighter>
          </Box>

          {hasVariables && (
            <TextField
              label="Variables"
              multiline
              value={variables}
              onChange={(e) => setVariables(e.target.value)}
              sx={{
                flex: 1, // Make the TextField take up remaining vertical space
                "& .MuiOutlinedInput-root": {
                  bgcolor: "var(--ifm-background-surface-color)",
                  "& fieldset": {
                    borderColor: "var(--ifm-color-emphasis-300)",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "var(--ifm-color-emphasis-700)",
                },
                "& .MuiInputBase-input": {
                  color: "var(--ifm-font-color-base)",
                  fontFamily: "var(--ifm-font-family-monospace)",
                },
              }}
            />
          )}
        </Box>

        {result && (
          <Box
            sx={{
              border: 1,
              borderColor: "var(--ifm-color-emphasis-300)",
              borderRadius: 1,
              overflow: "auto",
              maxHeight: "300px",
            }}
          >
            <SyntaxHighlighter
              language="json"
              style={syntaxTheme}
              customStyle={{
                margin: 0,
                padding: 16,
                backgroundColor: "var(--ifm-background-surface-color)",
              }}
            >
              {JSON.stringify(result, null, 2)}
            </SyntaxHighlighter>
          </Box>
        )}
      </Box>
    );
  }
