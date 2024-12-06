import clsx from "clsx";
import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Schema Explorer",
    Svg: require("@site/static/img/schema-explorer.svg").default, // 需要添加对应的SVG文件
    description: (
      <>
        Visualize and explore the relationships between different GraphQL types
        in our API. Perfect for understanding the data structure at a glance.
      </>
    ),
    link: "/schema",
  },
  {
    title: "Interactive Playground",
    Svg: require("@site/static/img/playground.svg").default, // 需要添加对应的SVG文件
    description: (
      <>
        Test queries in real-time with our GraphQL playground. Try out queries,
        mutations, and explore API responses instantly.
      </>
    ),
    link: "/playground",
  },
  {
    title: "API Reference",
    Svg: require("@site/static/img/api-reference.svg").default, // 需要添加对应的SVG文件
    description: (
      <>
        Comprehensive documentation of all available queries, mutations, and
        types. Everything you need to integrate with our GraphQL API.
      </>
    ),
    link: "/intro",
  },
];

function Feature({ title, Svg, description, link }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <Link to={link} className={styles.featureLink}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="text--center margin-bottom--xl">
          <Heading as="h1">Explore Our GraphQL API</Heading>
          <p className={styles.subtitle}>
            Powerful tools and comprehensive documentation to help you integrate
            with our GraphQL API
          </p>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
