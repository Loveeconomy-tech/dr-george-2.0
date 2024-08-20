'use client'
import type { NextPage } from 'next'
import Layout from '../_components/BaseLayout/Index'
import Listen from '../_components/Home/Listen'
import PageHero from '../_components/Blocks/Hero/pageHero'
import { Box, Flex, Grid, GridItem, Icon, Image, Input, Text, Textarea } from '@chakra-ui/react'
import { TbPlayerPlayFilled } from 'react-icons/tb'
import CustomButton from '../_components/Atom/Button'
import { useEffect, useState } from 'react'
import { getLanguage } from '../_helpers/misc'
import partnerText from '../_internationalization/partner'


const Home: NextPage = () => {
    const [lang,setLang] = useState('en')
    const text = partnerText[lang as keyof typeof partnerText]
    const defaultLang =  getLanguage()

    useEffect(() => {
        setLang(defaultLang)
    },[defaultLang])
  return (
    <Layout>
        <PageHero title={text.partnerHeroText} />
         <Box py={{base: 8, md: 20}} px={{ base: 4, '2xl': 36 }} pos="relative">
            <Grid templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)'}} gap={5}>
                <GridItem px={{base: 6, md: 20}} py={20}>
                    <Text mb={12} fontFamily={"Montserrat"}>{text.partnerMessage}</Text>
                    <Box bg={"gray.300"} h={"auto"} mt={12} pos={"relative"} overflow={'hidden'}>
                        <Image  src="images/gallery/_BXA5282.jpg" alt="video background" />
                        <Flex align="center" justify={"center"} overflow={"hidden"} pos={"absolute"} left={0} top={0} zIndex={2} w={"100%"} h={"100%"}>
                            <Flex w={16} h={16} bg="whiteAlpha.800" rounded={"full"} align={"center"} justify={"center"} cursor={"pointer"}>
                                <Icon as={TbPlayerPlayFilled} boxSize={8} />
                            </Flex>
                        </Flex>
                    </Box>
                </GridItem>
                <GridItem py={{base: 8, md: 20}} px={{base: 8, md: 20}}>
                    <Text fontWeight={600} fontSize={{base: 20, md: 24}} mb={4}>{text.partnerHeader}</Text>

                    <Flex direction={'column'} gap={{base: 2, md: 6}} maxW={'600px'} mx={"auto"}>
                        <Input fontSize={{base: 12, md: 16}} fontFamily={'Montserrat'} placeholder={text.partnerName} rounded={'none'}  h={14}/>
                        <Input fontSize={{base: 12, md: 16}} fontFamily={'Montserrat'} placeholder={text.partnerEmail} rounded={'none'}  h={14}/>
                        <Input fontSize={{base: 12, md: 16}} fontFamily={'Montserrat'} placeholder={text.partnerPhoneNumber} rounded={'none'}  h={14}/>
                        <Textarea fontSize={{base: 12, md: 16}} fontFamily={'Montserrat'} placeholder={text.partnerAdditionalMessage} rounded={'none'} h={28}></Textarea>
                        <CustomButton w={36}  bgColor={'base.blue'} color="white" title={text.partnerButton} textSize={16} rounded="none" fontFamily="Montserrat"/>
                    </Flex>
                </GridItem>
            </Grid>
            <Box pos={"absolute"}  bottom={{base: -16, md: -20}} left={0} w={{base: 24, md: 32}} zIndex={5}>
                <Image src='images/pattern-2.png' alt='pattern'/>
            </Box>
        </Box>
        <Listen />
    </Layout>
  )
}

export default Home
