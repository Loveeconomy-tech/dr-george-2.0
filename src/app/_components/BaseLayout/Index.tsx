import { FC, useEffect, useState } from 'react'
import { Box } from '@chakra-ui/layout'

import { motion } from 'framer-motion'
import * as _ from 'lodash'
import { getLanguage } from '../../_helpers/misc'
import NavText from '../../_internationalization/navs'
import DesktopNavbar from '../Navbar/Desktop'
import MobileNavbar from '../Navbar/Mobile'
import useOnScroll from '../../_hooks/useOnScroll'
import { usePathname } from 'next/navigation'
import Footer from '../Footer'

const MotionBox = motion(Box)
const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }
// added lodash
interface ILayout {
  link?: string
  description?: string
  image_url?: string
  children: React.ReactNode
}

const Layout: FC<ILayout> = ({
  children,
}) => {
 const pathname = usePathname()

 const noNavPages: string[] = []
  const noFooterPages = ['/404']

  const showNav = !noNavPages.includes(pathname)
  const showFooter = !noFooterPages.includes(pathname)
  const scrollPosition = useOnScroll();

  const [lang,setLang] = useState('en')
  const text = NavText[lang as keyof typeof NavText]
  const defaultLang =  getLanguage()

  useEffect(() => {
    setLang(defaultLang)
  },[defaultLang]) 


  const links = [
    { name: `${text.navHome}`, path: '/' },
    { name: `${text.navBiography}`, path: '/biography' },
    { name: `${text.navMinistry}`, path: '/ministry' },
    { name: `${text.navGallery}`, path: '/gallery' },
    // { name: `${text.navPodcast}`, path: '/' },
    { name: `${text.navContact}`, path: '/contact' },
    { name: `${text.navPartner}`, path: '/partner', type: 'button' }
  ]

  const topLeft = [
    { title: 'info@gwarthurministries.org'},
    { title: '+233 245 659 875' }
  ]


  return (
    <Box>
      {showNav && (
          <>
            <DesktopNavbar links={links} topL={topLeft} transparent={scrollPosition < 167 ? true: false} />
            <MobileNavbar links={links} transparent={scrollPosition < 167 ? true: false} />
          </>
        )}
      <MotionBox
        as="main"
        role="main"
        pos="relative"
        fontFamily="body"
        aria-labelledby="main"
        initial={{ opacity: 0 }}
        exit={{ opacity: 0, transition: { ...transition } }}
        animate={{ opacity: 1, transition: { ...transition } }}
      >
        {children}
      </MotionBox>
       {showFooter && <Footer />}
    </Box>
  )
}

export default Layout
