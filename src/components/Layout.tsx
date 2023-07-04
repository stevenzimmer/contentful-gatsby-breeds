import React, {ReactNode} from 'react'
import NavBar from './NavBar'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className='bg-black text-white'>
      <NavBar />
      <main className='container mx-auto p-6'>
      {children}
      </main>
    </div>
  )
}
