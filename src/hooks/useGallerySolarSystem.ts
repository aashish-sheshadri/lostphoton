import { graphql, useStaticQuery } from "gatsby";
import { FluidObject } from "gatsby-image";

interface Query {
  allFile: {
    nodes: {
      id: string;
      name: string;
      publicURL: string;
      childImageSharp: {
        fluid: FluidObject;
      };
    }[];
  };
}

const useGallerySolarSystem = () => {
  // TODO: Make "content/gallery" dynamic somehow..
  const data = useStaticQuery<Query>(graphql`
    query {
      allFile(
          filter: { sourceInstanceName: { eq: "content/solarsystem" } },
          sort: { order: DESC, fields: name }
      ) {
        nodes {
          id
          name
          publicURL
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);

  return data.allFile.nodes.map(node => ({
    ...node.childImageSharp,
    id: node.id,
    name: node.name,
    publicURL: node.publicURL,
  }));
};

export default useGallerySolarSystem;
