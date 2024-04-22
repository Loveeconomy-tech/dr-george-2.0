import { FC, useEffect, useState } from 'react'
import { Box, Flex, Icon, Text } from '@chakra-ui/react'
import HomeLang from '../../_internationalization/home'
import { getLanguage } from '../../_helpers/misc'
import { TbQuote, TbQuotes } from 'react-icons/tb'


const Testimony: FC = () => {
    const [lang,setLang] = useState('en')
    const text = HomeLang[lang as keyof typeof HomeLang]
    const defaultLang =  getLanguage()

    useEffect(() => {
        setLang(defaultLang)
    },[defaultLang]) 
  return (
    <Box
        bg={'base.blue'}
        py={12}
        px={{ base: 4, '2xl': 36 }}
        pos={"relative"}
        placeItems={"center"}
    >
      <Flex justifyContent={"center"}>
          <Box>
              <Text color={"white"} fontWeight={"bold"} textAlign={"center"} fontSize={{base: 24, md: 40}}>Testimonies</Text>
              <Box my={{base: 4, md: 8}} >
                <Box>
                  <Icon as={TbQuote} color={"base.gold"} fontSize={40}/>
                </Box>
                <Text 
                    fontWeight={500} 
                    textAlign={"center"} w={{base: "auto", md: 124}} 
                    fontSize={{base: 10, sm: 14, md: 20}} 
                    color={"white"} 
                    fontFamily={"Montserrat"}
                  >
                    Under the teachings of Dr. G. W. Arthur, I&apos;ve found profound wisdom and inspiration. His teachings have ignited a deeper understanding of Scripture, leading me on a transformative spiritual journey. Grateful for his impactful ministry. 
                </Text>
                <Text mt={4} color={"base.gold"} fontSize={20} textAlign={"right"} fontWeight={700} >Theophilus Odoi Mensah</Text>
              </Box>
          </Box>
      </Flex>
    </Box>
  )
}

export default Testimony
