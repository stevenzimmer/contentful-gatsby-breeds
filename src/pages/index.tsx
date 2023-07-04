import React from 'react';
import Layout from '../components/Layout';
import { graphql, Link, PageProps } from 'gatsby';
export default function PetsListing({data}: PageProps<Queries.PetsQuery>) {
  const pets = data.allContentfulPet.nodes;
  return (
    <Layout>
      <h1>
        Pets Listing
      </h1>
      <ul>
        {pets.map(pet => (
          <li key={pet.slug}>
            <Link to={`/${pet.slug}-breeds`}>
            <h2>{pet.breedName}</h2>
            </Link>
          </li>
        ))}
      </ul>

    </Layout>
  )
}
export const query = graphql`
  query Pets {
    allContentfulPet {
      nodes {
        slug
        breedName
      }
    }
  }
`