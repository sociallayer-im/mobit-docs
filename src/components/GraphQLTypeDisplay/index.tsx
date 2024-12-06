import React from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useIsBrowser from "@docusaurus/useIsBrowser";
import { useColorMode } from "@docusaurus/theme-common";
import styles from "./styles.module.css";

export default function GraphQLTypeDisplay({
  typeName,
  typeDescription,
  fields,
}) {
  const { colorMode } = useColorMode();
  const isBrowser = useIsBrowser();

  return (
    <div
      className={clsx(
        styles.graphqlContainer,
        styles[colorMode],
        "theme-code-block",
      )}
    >
      <div className={styles.typeHeader}>
        {typeDescription && (
          <div className={styles.typeDescription}>
            <span># {typeDescription}</span>
          </div>
        )}
        <div className={styles.codeBlock}>
          <span className={styles.keyword}>type</span>{" "}
          <span className={styles.typeName}>{typeName}</span>{" "}
          <span className={styles.braces}>{"{"}</span>
          <div className={styles.fields}>
            {fields.map(({ name, type, description }) => (
              <div
                key={name}
                className={styles.field}
                data-tooltip={description}
              >
                <span className={styles.fieldName}>{name}</span>
                <span className={styles.colon}>:</span>{" "}
                <span className={styles.fieldType}>{type}</span>
              </div>
            ))}
          </div>
          <span className={styles.braces}>{"}"}</span>
        </div>
      </div>
    </div>
  );
}
