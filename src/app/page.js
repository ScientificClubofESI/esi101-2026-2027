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
    <div>
      <NavBar/>
      <Hero/>
      <ChatBot/>
      <About/>
      <StudentQA/>
      <FAQ/>
      <Footer/>
    </div>
  )
}

export default Page