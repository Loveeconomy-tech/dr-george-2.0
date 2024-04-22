'use client'
import type { NextPage } from 'next'
import Layout from '../_components/BaseLayout/Index'
import Listen from '../_components/Home/Listen'
import PageHero from '../_components/Blocks/Hero/pageHero'
import { Box, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { getLanguage } from '../_helpers/misc'
import ministryText from '../_internationalization/ministry'

const Home: NextPage = () => {
    const [lang,setLang] = useState('en')
    const text = ministryText[lang as keyof typeof ministryText]
    const defaultLang =  getLanguage()

    useEffect(() => {
        setLang(defaultLang)
    },[defaultLang])
  return (
    <Layout>
        <PageHero title={text.ministryHeroText} />
        <Box py={{base: 8, md: 14}} px={{ base: 4, '2xl': 36 }}>
            <Grid templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)'}} gap={10}>
                <GridItem>
                    <Text fontWeight={600} fontSize={{base: 20, md: 24}} mb={4}>{text.myMission}</Text>
                    <Text mb={12} fontFamily={"Montserrat"}>{text.missionText}</Text>
                </GridItem>
                <GridItem>
                    <Text fontWeight={600} fontSize={{base: 20, md: 24}} mb={4}>{text.myVision}</Text>
                    <Text mb={12} fontFamily={"Montserrat"}>{text.visionText}</Text>
                </GridItem>
            </Grid>
            <Box w="100%" h="500px" bgImage={"/images/hero image 2.png"} bgPos={"center"} bgSize={"cover"} my={{base: '24', md: '8'}}></Box>
            <Box>
                <Text fontWeight={600} fontSize={{base: 20, md: 24}} mb={4}>{text.myValues}</Text>
                <Text mb={8} fontFamily={"Montserrat"}>{text.valuesText}</Text>
                <Grid templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)'}} gap={10}>
                    {text.values.map((item) => (
                    <GridItem key={item.title}>
                        <Flex>
                            <Image width={'20px'} height={'20px'} mr={4} mt={1} src='/images/checkmark.png' alt='checkmark'></Image>
                            <Box>
                                <Text fontWeight={600} fontSize={{base: 16, md: 20}} mb={2}>{item.title}</Text>
                                <Text fontFamily={"Montserrat"}>{item.text}</Text>
                            </Box>
                        </Flex>
                    </GridItem>))}
                </Grid>
            </Box>
        </Box>
        <Listen />
    </Layout>
  )
}

export default Home
