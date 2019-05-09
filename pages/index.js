import React from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import FirstSection from '../components/FirstSection'
import SecondSection from '../components/SecondSection'
import ThirdSection from '../components/ThirdSection'
import FourthSection from '../components/FourthSection';
import Footer from '../components/Footer/Index';

const Index = () => {
  return (
    <Layout>
      <Header />
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection />
      <Footer />
    </Layout>
  )
}

export default Index
