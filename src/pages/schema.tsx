import React, { useState, useEffect } from "react";
import { Voyager } from "graphql-voyager";
import Layout from "@theme/Layout";
import "graphql-voyager/dist/voyager.css";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";
import { IntrospectionQuery, buildSchema } from "graphql";

const SchemaPage = () => {
  const [selectedEndpoint, setSelectedEndpoint] = useState(
    "https://ckb-graph.unistate.io/v1/graphql",
  );

  const [introspectionData, setIntrospectionData] = useState(null);

  useEffect(() => {
    // 异步加载 SDL 文件
    const loadSchema = async () => {
      try {
        const response = await fetch("/schema.sdl");
        const sdlContent = await response.text();

        // 从 SDL 构建 schema
        const schema = buildSchema(sdlContent);

        setIntrospectionData(schema);
      } catch (error) {
        console.error("Failed to load schema:", error);
      }
    };

    loadSchema();
  }, []);

  return (
    <Layout title="GraphQL Schema">
      <div className={styles.pageContainer}>
        <div className={styles.header}>
          <Link to="/" className={styles.backButton}>
            ← Back to Home
          </Link>
        </div>
        <div className={styles.graphiqlContainer}>
          {introspectionData && <Voyager introspection={introspectionData} />}
        </div>
      </div>
    </Layout>
  );
};

export default SchemaPage;
