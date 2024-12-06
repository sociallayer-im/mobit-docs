import React, { useState, useEffect } from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";

const SchemaPage = () => {
  // 将 useBaseUrl 移到组件顶层
  const schemaUrl = useBaseUrl("/schema.sdl");

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
              const { Voyager } = require("graphql-voyager");
              require("graphql-voyager/dist/voyager.css");
              const { buildSchema } = require("graphql");

              const VoyagerWrapper = () => {
                const [introspectionData, setIntrospectionData] =
                  useState(null);

                useEffect(() => {
                  const loadSchema = async () => {
                    try {
                      // 使用从父组件传入的 schemaUrl
                      const response = await fetch(schemaUrl);
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
