'use client'
import { FC, useEffect, useState } from 'react'
import { Box, Grid, GridItem, Text } from '@chakra-ui/react'
import { getLanguage } from '../../_helpers/misc'
import contactText from '../../_internationalization/contact'


const Info: FC = () => {
    const [lang,setLang] = useState('en')
  const text = contactText[lang as keyof typeof contactText]
  const defaultLang =  getLanguage()

  useEffect(() => {
      setLang(defaultLang)
  },[defaultLang])
  return (
    <Box py={{base: 2, md: 14}} px={{ base: 4, '2xl': 36 }} pos="relative">
        <Grid templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)'}} gap={4} color={"base.blue"}>
            <GridItem px={{base: 5, md: 20}} py={{base: 8, md: 20}}>
                <Text mb={4} fontSize={24} fontWeight={600} color={"base.blue"} textAlign={"center"}>{text.contactCall}</Text>
                <Text textAlign={"center"} fontFamily={"Montserrat"} fontSize={{base: 14, md: 16}}>+23324 565 9875/+233 557 669 447</Text>
            </GridItem>
            <GridItem  px={{base: 5, md: 20}} py={{base: 8, md: 20}}>
                <Text mb={4} textAlign={"center"} fontSize={24} fontWeight={600} color={"base.blue"}>{text.contactEmail}</Text>
                <Text textAlign={"center"} fontFamily={"Montserrat"} fontSize={{base: 14, md: 16}}>info@gwarthurministries.org</Text>
            </GridItem>
        </Grid>
    </Box>
  )
}

export default Info
