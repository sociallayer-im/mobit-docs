import React from "react";
import styles from "./styles.module.css";

interface NetworkSelectorProps {
  selectedEndpoint: string;
  setSelectedEndpoint: (endpoint: string) => void;
}

export default function NetworkSelector({
  selectedEndpoint,
  setSelectedEndpoint,
}: NetworkSelectorProps) {
  return (
    <div className={styles.networkSelector}>
      <button
        className={`${styles.networkButton} ${
          selectedEndpoint.includes("test") ? styles.active : ""
        }`}
        onClick={() =>
          setSelectedEndpoint(
            "https://unistate-ckb-test.unistate.io/v1/graphql"
          )
        }
      >
        Test
      </button>
      <button
        className={`${styles.networkButton} ${
          !selectedEndpoint.includes("test") ? styles.active : ""
        }`}
        onClick={() =>
          setSelectedEndpoint("https://ckb-graph.unistate.io/v1/graphql")
        }
      >
        Main
      </button>
    </div>
  );
}
