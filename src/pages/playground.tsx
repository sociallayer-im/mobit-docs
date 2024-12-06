import React, { useState } from "react";
import Layout from "@theme/Layout";
import NetworkSelector from "@site/src/components/NetworkSelector";
import { GraphiQL } from "graphiql";
import "graphiql/graphiql.css";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";
import "@docusaurus/theme-classic/lib/prism-include-languages";
import BrowserOnly from "@docusaurus/BrowserOnly";

function PlaygroundPage() {
  const [selectedEndpoint, setSelectedEndpoint] = useState(
    "https://ckb-graph.unistate.io/v1/graphql",
  );

  const fetcher = async (graphQLParams: any) => {
    const response = await fetch(selectedEndpoint, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(graphQLParams),
    });
    return response.json();
  };

  return (
    <Layout title="GraphQL Playground">
      <div className={styles.pageContainer}>
        <div className={styles.header}>
          <Link to="/" className={styles.backButton}>
            ← Back to Home
          </Link>
          <NetworkSelector
            selectedEndpoint={selectedEndpoint}
            setSelectedEndpoint={setSelectedEndpoint}
          />
        </div>
        <div className={styles.graphiqlContainer}>
          <BrowserOnly fallback={<div>Loading...</div>}>
            {() => <GraphiQL fetcher={fetcher} />}
          </BrowserOnly>
        </div>
      </div>
    </Layout>
  );
}

export default PlaygroundPage;
