const path = require('path');
import type { GatsbyNode } from 'gatsby';

type CreatePageQuery = {
  allContentfulPet: {
    nodes: {
      slug: string;
      breed: {
        slug: string;
      }[];
    }[];
  };
};


export const createPages: GatsbyNode["createPages"] = async ({ graphql, actions }) => { 
  const { createPage } = actions;

  const {data} = await graphql<CreatePageQuery>(`
    query AllContentfulPet {
      allContentfulPet {
        nodes {
          slug
          breed {
            slug
          }
        }
      }
    }
  `);

  // Generate Details pages for each breed
  data?.allContentfulPet.nodes.forEach((node) => {

    // Create a page for each Pet Type
    createPage({
      path: `/${node.slug}-breeds/`,
      component: path.resolve(`./src/templates/pet-type.tsx`),
      context: {
        slug: node.slug
      },
    });

    if( node.breed !== null ) {

      node.breed.forEach((breed) => {  

        // Create a Pet Type child page for each breed
        createPage({
          path: `/${node.slug}-breeds/${breed.slug}/`,
          component: path.resolve(`./src/templates/breed-details.tsx`),
          context: {
            parentSlug: node.slug,
            slug: breed.slug
          },
        });
      });
    }
  });
}