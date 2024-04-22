"use client"
import type { NextPage } from 'next'
import Layout from './_components/BaseLayout/Index'
import HeroDesktop from './_components/Blocks/Hero/homeHero'
import Newsletter from './_components/Home/Newsletter'
import Latest from './_components/Home/Latest'
import AudioMessages from './_components/Home/AudioMessages'
import Social from './_components/Home/Social'
import AskDrGeorge from './_components/Home/AskDrGeorge'
import Listen from './_components/Home/Listen'
import { useEffect } from 'react'
import { getCaptivateToken } from './_service/captivate'
import Testimony from './_components/Home/Testimony'
import './global.css'

const Home: NextPage = () => {
  useEffect(() => {
    getCaptivateToken()
  },[])

  return (
    <Layout>
      <HeroDesktop />
      <Newsletter />
      <Latest />
      {/* <AudioMessages />
      <Social />
      <Testimony />
      <AskDrGeorge />
      <Listen /> */}
    </Layout>
  )
}

export default Home
