import { FC } from 'react'
import { NextSeo } from 'next-seo'
import { Box } from '@chakra-ui/layout'

import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import * as _ from 'lodash'

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
  image_url = '',
  link = '',
  description = ''
}) => {
  // const router = useRouter()

  const main_site_url = 'https://www.gwarthur.io/'
  const main_site_title = 'G. W. Arthur Ministries  '

  // let name: string | undefined = router.pathname
  //   .replace(/\//g, '')
  //   .replace('-', ' ')
  //   .split(' ')
  //   .map(e => _.upperFirst(e))
  //   .join(' ') 

  // if (router.pathname === '/') {
  //   name = 'Home'
  // }


  return (
    <Box>
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
    </Box>
  )
}

export default Layout
