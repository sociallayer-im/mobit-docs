import React, { useState, useEffect } from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

const SchemaPage = () => {
  return (
    <Layout title="GraphQL Schema">
      <div className={styles.pageContainer}>
        <div className={styles.header}>
          <Link to="/" className={styles.backButton}>
            ← Back to Home
          </Link>
        </div>
        <div className={styles.graphiqlContainer}>
          <BrowserOnly>
            {() => {
              // 在这里动态引入只在浏览器端运行的组件
              const { Voyager } = require("graphql-voyager");
              require("graphql-voyager/dist/voyager.css");
              const { buildSchema } = require("graphql");

              // VoyagerWrapper 组件包含所有浏览器端逻辑
              const VoyagerWrapper = () => {
                const [introspectionData, setIntrospectionData] =
                  useState(null);

                useEffect(() => {
                  const loadSchema = async () => {
                    try {
                      const response = await fetch("/schema.sdl");
                      const sdlContent = await response.text();
                      const schema = buildSchema(sdlContent);
                      setIntrospectionData(schema);
                    } catch (error) {
                      console.error("Failed to load schema:", error);
                    }
                  };

                  loadSchema();
                }, []);

                return introspectionData ? (
                  <Voyager introspection={introspectionData} />
                ) : null;
              };

              return <VoyagerWrapper />;
            }}
          </BrowserOnly>
        </div>
      </div>
    </Layout>
  );
};

export default SchemaPage;
