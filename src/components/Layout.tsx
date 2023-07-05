import React, {ReactNode} from 'react'
import Header from './Header'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="py-24">
      <Header />
      <main className='container py-6'>
      {children}
      </main>
    </div>
  )
}
