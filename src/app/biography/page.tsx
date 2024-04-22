'use client'
import type { NextPage } from 'next'
import Layout from '../_components/BaseLayout/Index'
import PageHero from '../_components/Blocks/Hero/pageHero'
import About from '../_components/Biography/About'
import { useEffect, useState } from 'react'
import { getLanguage } from '../_helpers/misc'
import aboutText from '../_internationalization/about'


const Home: NextPage = () => {
    const [lang,setLang] = useState('en')
    const text = aboutText[lang as keyof typeof aboutText]
    const defaultLang =  getLanguage()

    useEffect(() => {
        setLang(defaultLang)
    },[defaultLang])
  return (
    <Layout>
        <PageHero title={text.aboutHeroText} />
        <About />
    </Layout>
  )
}

export default Home
