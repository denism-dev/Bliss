
import React from 'react'
import FAQSection from '../Components/FAQSection'
import Testimonials from '../Components/Testimonials'
import Features from '../Components/Features'
import BlogSection from '../Components/BlogSection'
import HeroSection from './HeroSection'
import AnnouncementBar from '../Components/AnnouncementBar'
import NewsletterSection from '../Components/NewsletterSection'




const Home = () => {
  return (
    <main className='bg-white py-16 text-gray-800'>
      <AnnouncementBar />
      <HeroSection />
      <section>
        <Features />
        <Testimonials />
        <BlogSection />
        <FAQSection />
        <NewsletterSection />
      </section>
    </main>
  )
}

export default Home