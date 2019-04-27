import React from 'react'
import Layout from '../components/Layout'
import FirstSection from '../components/FirstSection'
import SecondSection from '../components/SecondSection'
import ThirdSection from '../components/ThirdSection'
import FourthSection from '../components/FourthSection';
import Footer from '../components/Footer/Index';

const Index = () => {
  return (
    <Layout>
      <FirstSection />
      <SecondSection />
      <FourthSection />
      <ThirdSection />
      <Footer />
    </Layout>
  )
}

export default Index
