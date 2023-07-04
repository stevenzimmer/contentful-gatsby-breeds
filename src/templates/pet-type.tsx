import { Link, PageProps, graphql } from 'gatsby';
import React from 'react'
import Layout from '../components/Layout';

type PetTypeQueryData = {
  contentfulPet: {
    id: string;
    breedName: string;
    slug: string;
    breed: {
      animalName: string;
      slug: string;
      id: string;
    }[];
  }
}


export default function PetType({data}:PageProps<PetTypeQueryData>) {
  console.log(data);
  const { breedName, breed, slug } = data.contentfulPet;
  return (
    <Layout>
      <Link to="/">Back to Homepage</Link>
      <h1>Pet Types</h1>
      <h2>{breedName} Breeds</h2>
      <ul>
        {breed.map(pet => (
          <li key={pet.id}>
            <Link to={`/${slug}-breeds/${pet.slug}`}>
            <h2>{pet.animalName}</h2>
           </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query PetType($slug: String) {
    contentfulPet(slug: {eq: $slug}) {
      id
      breedName
      slug
      breed {
        animalName
        slug
        id
      }
    }
  }
`
