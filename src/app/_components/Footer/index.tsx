import { FC, useEffect, useState } from 'react'
import { Box, Flex, Grid, GridItem, Icon, Image, Text } from '@chakra-ui/react'
import {BiArrowBack} from 'react-icons/bi'
import { useRouter } from 'next/router'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import Link from 'next/link'
import { createClient } from '@/helpers/prismicClient'
import Masonry from "react-responsive-masonry"
import { getLanguage } from '@/helpers/misc'
import footerText from '@/internationalization/footer'

const Footer: FC = () => {
  const client = createClient({})
  const [data, setData] = useState([])

  const [lang,setLang] = useState('en')
  const text = footerText[lang]
  const defaultLang =  getLanguage()

  useEffect(() => {
    setLang(defaultLang)
  },[defaultLang]) 

    useEffect(() => {
      // Your asynchronous logic here
      const fetchData = async () => {
      const componentData = await client?.getAllByType('site_gallery', {
          fetchOptions: {
          cache: 'no-store',
          next: { tags: ['prismic', 'home_hero'] },
          }
      })

      setData(componentData)
      };

      fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const images = [
    '/images/gallery/_BXA5465.jpg',
    '/images/gallery/_MG_35ascd.jpg', 
    '/images/gallery/_BXA5200.jpg',
    '/images/gallery/_MG_3569.jpg',
    '/images/gallery/_MG_3731.jpg',
    '/images/gallery/_MG_6393.jpg',
  ]

  return (
    <Box pos={"relative"} zIndex={3}>
    <Grid templateColumns={{base: 'repeat(6, 1fr)' , md: 'repeat(8, 1fr)'}} gap={12} bg={"#262626"} py={20}  px={{ base: 4, '2xl': 36 }}>
      <GridItem colSpan={{base: 6, md: 3}}>
        <Text color={"white"} fontSize={24} fontWeight={600} mb={4} textAlign={{base: "center", md: "left"}}>{text.footerTitle}</Text>
        <Text color={"whiteAlpha.600"} fontSize={{base: 12, md: 14}} textAlign={{base: "center", md: "left"}} fontFamily={"montserrat"}>{text.footerInfo}</Text>
      </GridItem>
      <GridItem colSpan={{base: 3, md: 1}}>
        <Text color={"white"} fontSize={24} fontWeight={600} mb={4}>{text.footerLinks}</Text>

        <Link href="https://dr-george-gigman2.vercel.app/">
          <Text color={"whiteAlpha.600"} fontSize={{base: 12, md: 14}} fontFamily={"montserrat"} mb={3}>{text.footerHome}</Text>
        </Link>
        <Link href="https://dr-george-gigman2.vercel.app/biography">
          <Text color={"whiteAlpha.600"} fontSize={{base: 12, md: 14}} fontFamily={"montserrat"} mb={3}>{text.footerBiography}</Text>
        </Link>
        <Link href="https://dr-george-gigman2.vercel.app/contact">
          <Text color={"whiteAlpha.600"} fontSize={{base: 12, md: 14}} fontFamily={"montserrat"} mb={3}>{text.footerContact}</Text>
        </Link>

      </GridItem>
      <GridItem colSpan={{base: 3, md: 2}}>
        <Text color={"white"} fontSize={24} fontWeight={600} mb={4}>{text.footerExternalLinks}</Text>

        <Link href={'https://youtube.com/@DrGWArthur'}>
          <Text color={"whiteAlpha.600"} fontSize={{base: 12, md: 14}} fontFamily={"montserrat"} mb={3}>Youtube</Text>
        </Link>
        <Text color={"whiteAlpha.600"} fontSize={{base: 12, md: 14}} fontFamily={"montserrat"} mb={3}>Google Podcast</Text>
        <Link href={'https://podcasts.apple.com/us/podcast/g-w-arthur-ministries/id1723722303'}>
          <Text color={"whiteAlpha.600"} fontSize={{base: 12, md: 14}} fontFamily={"montserrat"} mb={3}>Apple Podcast</Text>
        </Link>
        <Link href={'https://open.spotify.com/show/7s0HbOnbL7XD4xTDxu3peS?si=qJ589nXfQJa1VyMIGJXBZg'}>
          <Text color={"whiteAlpha.600"} fontSize={{base: 12, md: 14}} fontFamily={"montserrat"} mb={3}>Spotify</Text>
        </Link>
      </GridItem>
      <GridItem colSpan={{base: 6, md: 2}}>
        <Text color={"white"} fontSize={24} fontWeight={600} mb={4}>{text.footerGallery}</Text>

        <Masonry columnsCount={3} gutter={"10px"}>
        {images.map(item => (
          <Image key={item} src={item} alt="footer image" />
        ))}
        </Masonry>
      </GridItem>
    </Grid>
    <Flex justify={{base: "center", md: "space-between"}} pos={"relative"} overflow={'hidden'} bgSize={'cover'} bg="black" py={4}  px={{ base: 4, '2xl': 36 }}>
      <Text color={"white"} fontSize={{base: 10, md: 14}} fontFamily={"montserrat"}>{text.footerCopyright}</Text>
      <Flex gap={4} display={{base: "none", md: 'flex'}}>
        <Link href={'https://www.instagram.com/drgwarthur'} target='_'>
            <Icon fontSize={20} as={FaInstagram} color={"white"} />
        </Link>
        <Link href={'https://www.facebook.com/DrGWArthur?mibextid=LQQJ4d'} target='_'>
            <Icon fontSize={20} as={FaFacebook} color={"white"}/>
        </Link>
        <Link href={'https://youtube.com/@DrGWArthur'} target='_'>
            <Icon fontSize={20} as={FaYoutube} color={"white"} />
        </Link>
      </Flex>
    </Flex>
    </Box>
  )
}

export default Footer
