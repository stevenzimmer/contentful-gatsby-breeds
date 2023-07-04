import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

export default function NavBar() {

  const data = useStaticQuery(graphql`
  query MyQuery {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
  `)

  const { title, description } = data.site.siteMetadata
  return (
    <div className='container mx-auto p-6'>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}
