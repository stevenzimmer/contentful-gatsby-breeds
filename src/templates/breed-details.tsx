import React from 'react'
import Layout from '../components/Layout'
import { graphql, Link, PageProps } from 'gatsby'


type BreedDetailsQueryData = {
  contentfulPet: {
    breedName: string;
    slug: string;
  }
  contentfulBreed: {
    animalName: string;
    slug: string;
    lifespan: number;
    friendliness: number;
    description: {
      raw: string;
    }
    shedLevel: number;
  }
}
export default function BreedDetails({data}: PageProps<BreedDetailsQueryData>) {
  const { breedName, slug } = data.contentfulPet;
  const { animalName, lifespan, friendliness, description, shedLevel } = data.contentfulBreed;
  return (
    <Layout>
      <div>
        <Link to={`/${slug}-breeds`}>Back to {breedName} Breeds listing</Link>
      </div>
      <h1>{animalName} {breedName} Breed Details</h1>
      <p>
        <strong>Lifespan:</strong> {lifespan} years
        {friendliness && (
          <div>
            
            <strong>Friendliness:</strong> {friendliness} / 5
          </div>
        )}
        <div>
          <strong>Shed Level:</strong> {shedLevel} / 5
        </div>
      </p>
      
    </Layout>
  )
}

export const query = graphql`
  query BreedDetails($parentSlug: String, $slug: String) {
    contentfulBreed(slug: {eq: $slug}) {
      animalName
      slug
      lifespan
      friendliness
      description {
        raw
      }
      shedLevel
    }
    contentfulPet(slug: {eq: $parentSlug}) {
      breedName
      slug
    }
  }
`