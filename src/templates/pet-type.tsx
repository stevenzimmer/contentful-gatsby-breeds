import { Link, PageProps, graphql } from 'gatsby';
import React from 'react'
import Layout from '../components/Layout';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import BackLink from '../components/BackLink';

type PetTypeQueryData = {
  contentfulPet: {
    id: string;
    breedName: string;
    slug: string;
    breed: {
      animalName: string;
      slug: string;
      id: string;
      featuredImage: {
        gatsbyImageData: Queries.GatsbyImageFormat
      }
    }[];
  }
}

export default function PetType({data}:PageProps<PetTypeQueryData>) {
  console.log(data);
  const { breedName, breed, slug } = data.contentfulPet;
  return (
    <Layout>
      <BackLink link='' text='Back to Homepage' />
    
      {
        breed !== null ? (
          <>
            <h2 className='text-center mb-12 text-2xl'>{breedName} Breeds List</h2>
            <div className='flex flex-wrap justify-center'>
            {breed?.map(pet => {
              const petImage = getImage(pet.featuredImage);
              return (
                <div className='w-full sm:w-1/2 lg:w-1/3 px-3'>
                  <div className='border rounded-lg mb-6 p-6 shadow group hover:bg-slate-50'>
                    <Link to={`/${slug}-breeds/${pet.slug}`}>
                      <GatsbyImage className='object-cover rounded-lg mb-3 w-full shadow-lg group-hover:-translate-y-1 duration-200 transition-transform max-h-[210px]' image={petImage} alt={`${pet.animalName} featured image`} />
                    
                      <h2 className='font-bold text-center'>{pet.animalName}</h2>
                      
                    </Link>
                  </div>
                </div>
              )})}
            </div>
          </>
        
        ) : (
          <>
            <div className='bg-slate-200 rounded-lg shadow'>
              <p>There are currently no breeds listed for {breedName}.</p>
            </div>
          </>
        )
      }
        
    </Layout>
  )
}

export const query = graphql`
  query PetType($slug: String) {
    contentfulPet(slug: {eq: $slug}) {
      id
      slug
      breedName
      breed {
        animalName
        slug
        featuredImage {
          gatsbyImageData(width: 768)
        }
        id
      }
    }
  }
`
