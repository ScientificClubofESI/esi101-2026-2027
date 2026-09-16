import React from 'react'
import NavBar from '@/components/NavBar/page'
import ChatBot from '@/components/ChatBot/page'
import Hero from '@/components/Hero/page'
import About from '@/components/About/page'
import StudentQA from '@/components/StudentQ&A/page'
import FAQ from '@/components/FAQ/page'
import Footer from '@/components/Footer/page'

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar/>
      <Hero/>
      <ChatBot/>
      <About/>
      <StudentQA/>
      <FAQ/>
      <div className="mt-auto">
      <Footer/>
    </div>
    </div>
  )
}

export default Page