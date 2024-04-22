import { FC, useEffect, useState } from 'react'
import { Box, Flex, Grid, GridItem, Icon, Image, Text } from '@chakra-ui/react'
import CustomButton from '../Atom/Button'
import Link from 'next/link'
import { getLanguage } from '@/helpers/misc'
import HomeLang from '@/internationalization/home'


const Ministry: FC = () => {
    const [lang,setLang] = useState('en')
    const text = HomeLang[lang]
    const defaultLang =  getLanguage()

    useEffect(() => {
        setLang(defaultLang)
    },[defaultLang])
  return (
    <Box
        bg={'rgba(238, 167, 44, 0.22)'}
        py={4}
        px={{ base: 4, '2xl': 36 }}
        pos={"relative"}
    >
        <Grid templateColumns={{base: 'repeat(1, 1fr)', lg: 'repeat(7, 1fr)'}} gap={12}>
            <GridItem colSpan={4} display={{base: "none", lg: "block"}}>
                <Box w={"100%"} p={24} position={"relative"}>
                    <Image src="images/social phone mockups.png" alt="phone mockup" />
                    <Box pos={"absolute"} w={24} top={14} left={36}>
                        <Image src="images/Facebook.png" alt="twitter float" />
                    </Box>
                    <Box pos={"absolute"} w={24} top={36} right={16}>
                        <Image src="images/Youtube.png" alt="youtube float" />
                    </Box>
                    <Box pos={"absolute"} w={24} bottom={36} left={0}>
                        <Image src="images/Twitter.png" alt="twitter float" />
                    </Box>
                    <Box pos={"absolute"} w={32} bottom={12} right={6}>
                        <Image src="images/Instagram.png" alt="instagram float" />
                    </Box>
                </Box>
            </GridItem>
            <GridItem colSpan={{base: 1, md: 3}}>
                <Flex direction={"column"} justify={"center"} lineHeight={1.2} h="100%" py={{base: 12, md: 20, lg: 0}} px={{base: 0, md: 24, lg: 0}}>
                    <Text textAlign={{base: "center", lg: "left"}} color={"base.blue"} fontWeight={"bold"} fontSize={{base: 24, md: 40}}>{text.socialsTitle}</Text>
                    <Text lineHeight={1.6} textAlign={{base: "center", lg: "left"}}  mt={8} color={"base.blue"} fontFamily={"Montserrat"} fontSize={{base: 12, sm: 14, md: 16}} fontWeight={500}>
                         {text.socialsSubtext}
                    </Text>
                    <Flex justify={{base: "center", lg: 'flex-start'}}>
                        <Flex mt={6} gap={{base: 4, md: 8}}>
                            <Box boxSize={{base: 8, md: 10}}>
                                <Link href={'https://www.facebook.com/DrGWArthur?mibextid=LQQJ4d'}>
                                    <Image src={'images/fb.png'} alt='social button' />
                                </Link>
                            </Box>
                            <Box boxSize={{base: 8, md: 10}}>
                                <Link href={'https://www.instagram.com/drgwarthur'}>
                                    <Image src={'images/ig.png'} alt='social button'/>
                                </Link>
                            </Box>
                            {/* <Box boxSize={{base: 8, md: 10}}>
                                <Image src={'images/tw.png'}  alt='social button'/>
                            </Box> */}
                            <Box boxSize={{base: 8, md: 10}}>
                                <Link href={'https://youtube.com/@DrGWArthur'}>
                                    <Image src={'images/yt.png'}  alt='social button'/>
                                </Link>
                            </Box>
                        </Flex>
                    </Flex>
                </Flex>
            </GridItem>
        </Grid>
        <Box pos={"absolute"} bottom={-20} right={0} w={{base: 24, md: 32}}>
            <Image src='images/pattern.png' alt='pattern'/>
        </Box>
    </Box>
  )
}

export default Ministry
