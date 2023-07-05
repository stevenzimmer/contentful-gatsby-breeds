import { Link } from 'gatsby'
import React from 'react'

type BackLinkProps = {
  link: string;
  text: string;
}
export default function BackLink({ link, text}: BackLinkProps) {
  return (
    <div className='mb-6 group'>
        <Link to={`/${link}`}><span className='group-hover:-translate-x-1 transition-transform duration-200 inline-block'>&larr;</span> {text}</Link>
      </div>
  )
}
