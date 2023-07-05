import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

export default function Header() {

  const data = useStaticQuery(graphql`
  query MyQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
  `)

  const { title } = data.site.siteMetadata
  return (
    <div className='container  text-center'>
      <h1 className='text-4xl mb-2'>{title}</h1>
    </div>
  )
}
