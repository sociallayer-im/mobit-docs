import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Mobit Documentation",
  tagline: "Documentation for Mobit GraphQL API",
  favicon: "img/favicon.ico",

  url: "https://sociallayer-im.github.io",
  baseUrl: "/mobit-docs/",

  organizationName: "sociallayer-im",
  projectName: "mobit-docs",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["en", "zh-Hans"],
    localeConfigs: {
      "zh-Hans": {
        label: "简体中文",
      },
      en: {
        label: "English",
      },
    },
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/sociallayer-im/mobit-docs/tree/main/",
          routeBasePath: "/", // Set documentation as homepage
        },
        blog: false, // Disable blog feature
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: "Mobit Docs",
      logo: {
        alt: "Mobit Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "localeDropdown",
          position: "right",
        },
        {
          href: "https://github.com/sociallayer-im/mobit-docs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Documentation",
          items: [
            {
              label: "Intro",
              to: "/intro",
            },
            {
              label: "Core Types",
              to: "/core-types",
            },
            {
              label: "Spore",
              to: "/spore-types",
            },
            {
              label: "Token",
              to: "/token-types",
            },
            {
              label: "RGBPP",
              to: "/rgbpp-types",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/your-discord",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/your-twitter",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/sociallayer-im/mobit-docs",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Mobit Documentation. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["graphql"], // Add GraphQL syntax highlighting support
    },
    // Add custom theme configuration
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
  } satisfies Preset.ThemeConfig,
  // Add custom plugin configuration
  plugins: [
    // If you need to add other plugins, configure them here
  ],
};

export default config;
