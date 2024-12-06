import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  docs: [
    {
      type: "category",
      label: "Mobit GraphQL API",
      items: [
        {
          type: "doc",
          id: "intro",
          label: "Introduction",
        },
        {
          type: "doc",
          id: "core-types",
          label: "Core Types",
        },
        {
          type: "doc",
          id: "spore-types",
          label: "Spore Types",
        },
        {
          type: "doc",
          id: "token-types",
          label: "Token Types",
        },
        {
          type: "doc",
          id: "rgbpp-types",
          label: "RGBPP Types",
        },
      ],
    },
  ],
};

export default sidebars;
