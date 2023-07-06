import React from 'react';
import Layout from '../components/Layout';
import { graphql, Link, PageProps } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
type PetListingPropTypes = {
  allContentfulPet: {
    nodes: {
      slug: string;
      breedName: string;
      image: {
        gatsbyImageData: Queries.GatsbyImageFormat;
      }
    }[];
  }
}


export default function PetsListing({data}: PageProps<PetListingPropTypes>) {
  const pets = data.allContentfulPet.nodes;
  return (
    <Layout>
      <h2 className='text-2xl mb-6 text-center'>
        Pet Types
      </h2>
      <div className='flex justify-center -mx-3'>
        {pets.map(pet => {
          const petImage = getImage(pet.image);
          return (
            <>
            
            <div className='lg:w-1/3 px-3 mb-6' key={pet.slug}>
              <div className='border rounded-lg mb-12 p-6 shadow group h-full hover:bg-slate-50'>
                <Link to={`/${pet.slug}-breeds`}>
                  {pet.image !== null ? (
                    <GatsbyImage className='object-cover rounded-lg mb-3 w-full max-h-[210px] shadow-lg group-hover:-translate-y-1 duration-200 transition-transform' image={petImage} alt={`${pet.breedName} featured image`} />
                  ) : (
                    <div className='bg-slate-100 p-3 rounded-lg mb-3 text-center'>
                      <p>There is no featured image set for {pet.breedName}.</p>
                    </div>
                  )
                }
                
                  <h3 className='font-bold text-center'>{pet.breedName} Breeds</h3>
                </Link>
              </div>
            </div>
            </>
          )
        })}
          
      </div>
    </Layout>
  )
}
export const query = graphql`
  query Pets {
    allContentfulPet {
      nodes {
        slug
        breedName
        image {
          gatsbyImageData(width: 768)
        }
      }
    }
  }
`