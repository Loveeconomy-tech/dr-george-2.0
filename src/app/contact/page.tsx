'use client'
import type { NextPage } from 'next'
import Layout from '../_components/BaseLayout/Index'
import Listen from '../_components/Home/Listen'
import PageHero from '../_components/Blocks/Hero/pageHero'
import Info from '../_components/Contact/info'
import Ask from '../_components/Contact/ask'
import { useEffect, useState } from 'react'
import { getLanguage } from '../_helpers/misc'
import contactText from '../_internationalization/contact'
import Appointment from '../_components/Contact/appointment'


const Home: NextPage = () => {
  const [lang,setLang] = useState('en')
  const text = contactText[lang as keyof typeof contactText]
  const defaultLang =  getLanguage()

  useEffect(() => {
    setLang(defaultLang)
  },[defaultLang])

  return (
    <Layout>
        <PageHero title={text.contactHeroText} />
        <Info />
        <Ask />
        <Appointment />
        <Listen />
    </Layout>
  )
}

export default Home
