import React from 'react'
import NavBar from '@/components/NavBar/page'
import About from '@/components/About/page'
import Footer from '@/components/Footer/page'

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar/>
      <About/>
      <Footer/>
    </div>
  )
}

export default Page