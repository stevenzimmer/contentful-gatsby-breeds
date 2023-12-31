import React, { ReactNode } from 'react';
import Layout from '../components/Layout';
import { graphql, Link, PageProps } from 'gatsby';
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import { renderRichText, ContentfulRichTextGatsbyReference, RenderRichTextData } from 'gatsby-source-contentful/rich-text';
import BackLink from '../components/BackLink';

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
    description: RenderRichTextData<ContentfulRichTextGatsbyReference>;
    origination: string;
    bestFor: string;
    featuredImage: {  
      gatsbyImageData: IGatsbyImageData
    }

    shedLevel: number;
  }
}

export default function BreedDetails({data}: PageProps<BreedDetailsQueryData>) {
  const { breedName, slug } = data.contentfulPet;
  const { animalName, lifespan, friendliness, description, shedLevel, featuredImage, origination, bestFor } = data.contentfulBreed;

  const image = getImage(featuredImage);
  return (
    <Layout>
      <BackLink link={`${slug}-breeds`} text={`${breedName} Breeds listing`} />
     
      <div className='border rounded-lg p-6 shadow'>
        <div className='flex flex-wrap xl:-mx-6 -mx-3'>
          <div className='lg:w-1/2 px-3 xl:px-6 mb-6 lg:mb-0'>
            
              <GatsbyImage className='object-cover rounded-lg mb-3 w-full shadow-lg h-full' image={image} alt={`${animalName} featured image`} />
            
          </div>
          <div className='lg:w-1/2 px-6'>
            <h2 className='text-3xl mb-6'>{animalName} Breed Details</h2>

            <DetailItem render={true} item={description}  text='Description' />

            <DetailItem item={bestFor} text='Best For' />

            <DetailItem item={origination} text='Origination' />

            <div className='flex flex-wrap bg-slate-100 rounded py-1 px-1'>
              <ColumnDetailItem item={lifespan} text="Lifespan" />
              <ColumnDetailItem item={friendliness} text="Friendliness" isRating />
              <ColumnDetailItem item={shedLevel} text="Shed Level" isRating />
            </div>
      
          </div>
        </div>
      </div>
      
      
    </Layout>
  )
}

type DetailItemProps = {
  item: string | ReactNode;
  text: string;
  render?: boolean
  isRating?: boolean
}

const ColumnDetailItem = ({ item, text, isRating }: DetailItemProps) => {
  return (
    <>
      {item && (
        <div className='w-full lg:w-1/3'>
          <p className='lg:text-center'>
            <strong>{text}:</strong> {item} {isRating && "/ 5"} 
          </p>
        </div>
        )
      }
    </>
  )
}

const DetailItem = ({ item, text, render}: DetailItemProps) => {
  return (
    <>       
      {item && (
        <div className='mb-6'>
          <h3 className='text-2xl mb-3'>{text}</h3>
          {render ? (
            <div>
              {renderRichText(item)}
            </div>
          ) : (
            <p>
            {item}
            </p>
          )}

        
        </div>
      )}
    </>
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
      origination
      bestFor
      featuredImage {
        gatsbyImageData(width: 768)
      }
    }
    contentfulPet(slug: {eq: $parentSlug}) {
      breedName
      slug
    }
  }
`