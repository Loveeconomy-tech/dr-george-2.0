import type { NextPage } from 'next'
import Layout from '../_components/BaseLayout/Index'
import PageHero from '../_components/Blocks/Hero/pageHero'
import { useEffect, useState } from 'react'
import { getLanguage } from '../_helpers/misc'
import galleryText from '../_internationalization/gallery'
import GalleryImages from '../_components/Gallery/GalleryImages'


const Home: NextPage = () => {
    const [lang,setLang] = useState('en')
    const text = galleryText[lang as keyof typeof galleryText]
    const defaultLang =  getLanguage()

    useEffect(() => {
        setLang(defaultLang)
    },[defaultLang])
  return (
    <Layout>
        <PageHero title={text.galleryHeroText} />
        <GalleryImages />
    </Layout>
  )
}

export default Home
