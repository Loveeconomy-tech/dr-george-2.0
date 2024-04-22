import React, {Fragment, useEffect, useState} from 'react'
import { Box, Flex, Image, Link, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react"
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import CustomButton from '../Atom/Button'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { usePathname } from 'next/navigation'


interface ILink {
  name: string
  path: string
  type?: string
  weight?: string
  width?: number
  height?: number
  children?: { name: string; path: string }[]
}
const NavbarLink: React.FC<{ item: ILink, transparent: boolean }> = ({ item, transparent }: { item: ILink, transparent: boolean }) => {
  const pathname = usePathname()
  
  return (
    <>
    {item.type && item.type === 'button' ? 
      <Link 
          as={NextLink}
          href={item.path} passHref
        >
        <CustomButton 
          bgColor={transparent? "transparent" : "base.blue"} 
          borderWidth={transparent? 1: 0}
          title={item.name} 
          textColor={"white"} 
          textSize={16} 
          mt={0} 
          rounded="none" 
          minW={"auto"} 
          px={8} 
          _hover={{
            bgColor: transparent? "white" : "base.blue",
            textColor:  transparent? "base.blue" : "white"
          }}
        />
      </Link>
      :
      <Box
      display="flex"
      alignItems="center"
      h="100%"
      _focus={{ outline: 'none' }}
      _hover={{ outline: 'none' }}
      _active={{ outline: 'none' }}
    >
        <Link
          as={NextLink}
          href={item.path} passHref
          fontSize={{ base: 'sm', xl: 16 }}
          _hover={{ fontWeight: 600 }}
          _focus={{ outline: 'none' }}
          _active={{ outline: 'none' }}
          rel="noreferrer"
          pos="relative"
          color={transparent? 'white': "base.blue"}
          {...{
            fontWeight: pathname === item.path ? 700 : 500
          }}
        >
          {item.name}
        </Link>
    </Box>
    }
    </>
  )
}

const DesktopNavbar: React.FC<{ links: ILink[], topL:any[], transparent: boolean}> = ({ links, topL, transparent }: { links: ILink[], topL: any[], transparent: boolean}) => {
  const [language, setLanguage] = useState('en')

  const getLanguage = () => {
    let lang
    if (typeof window !== 'undefined') {
      lang = localStorage.getItem('site_language')
    }   
    if(lang){
      setLanguage(lang)
    } 
  }

  const changeLanguage = (lang: string) => {
    localStorage.setItem('site_language', lang)
    setLanguage(lang)
  }

  useEffect(() => {
    getLanguage()
  },[])

  useGSAP(() => {
    let animation = gsap.to('.logo-box', {
      rotationY: 360,
      duration: 2,
      repeat: -1,
      ease: "none"
    })

    const logoBox = document.querySelector('.logo-box');

    if(logoBox){
      logoBox.addEventListener('mouseenter', () => {
        animation.restart();
        animation.pause()
      });

      logoBox.addEventListener('mouseleave', () => {
        animation.play();
      });
    }
  })

  return  (
      <Box display={{ base: 'none', md: 'flex' }}>
        <Flex w="100%" fontFamily={"Garamond"} bg={'base.blue'} justify={"space-between"} py={3}  px={{ base: 8, '2xl': 36 }}>
          <Flex color={'white '} gap={8}>
            <Flex align="center" gap={2} key={topL[0].title}>
              <Text>{topL[0].title}</Text>
            </Flex>
            <Box>|</Box>
            <Flex align="center" gap={2} key={topL[1].title}>
              <Text>{topL[1].title}</Text>
            </Flex>
          </Flex>
          <Flex  color={'white'} gap={8}>
            <Box borderBottomWidth={2} borderColor={'base.blue'} px={1}>G. W. Arthur Ministries</Box>
            
            <Menu >
              <MenuButton as={Box}>{language?.toUpperCase()}</MenuButton>
              <MenuList w={'100%'} zIndex={100} color={"base.blue"} fontWeight={500}>
                {language !== 'en' ? <MenuItem w={'100%'} onClick={() => changeLanguage('en')}>EN</MenuItem> : null}
                {language !== 'fr' ? <MenuItem w={'100%'} onClick={() => changeLanguage('fr')}>FR</MenuItem> : null}
                {language !== 'es' ? <MenuItem w={'100%'} onClick={() => changeLanguage('es')}>ES</MenuItem> : null}
                {language !== 'pt' ? <MenuItem w={'100%'} onClick={() => changeLanguage('pt')}>PT</MenuItem> : null}
                {language !== 'ch' ? <MenuItem w={'100%'} onClick={() => changeLanguage('ch')}>CH</MenuItem> : null}
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
        <Box
            h={24}
            top={transparent ? 12:  0}
            w="full"
            zIndex={10}
            pos={transparent? "absolute": "fixed" }       
            p={0}
            bg={transparent? 'transparent' :"rgba(255, 255, 255, 0.29)"}
            boxShadow={transparent ? "none" : "0 4px 30px rgba(0, 0, 0, 0.1)"}
            backdropFilter={transparent ? "blur(0)" : "blur(12.6px)"}
            color={"base.gold"}
            borderColor={'base.blue'}
        >
            <Flex
                minW={'100%'}
                px={{ base: 8, '2xl': 36 }}
                justifyContent="space-between"
                align={"center"}
            >
              <Link as={NextLink} href="/" passHref _focus={{ outline: 'none' }} _hover={{ outline: 'none' }}>
                <Flex w={24}  justify={"center"} alignItems={"center"} p={1}>
                  {transparent ? 
                  <Image className='logo-box' src='/images/G W Arthur Logo-white.png' alt="gwarthur logo" />
                  :
                  <Image className='logo-box' objectFit={"contain"} src='/images/G W Arthur Logo.png' alt="gwarthur logo" />
                  }
                </Flex>
              </Link>

              <Box>
                  <Flex align="center" h={'100%'}>
                      {links.map((item, idx) => (
                      <Fragment key={item.name}>
                          <NavbarLink item={item} transparent={transparent} />
                          {links.length !== idx + 1 && <Box mx={4} />}
                      </Fragment>
                      ))}
                  </Flex>
              </Box>
            </Flex>
        </Box>
      </Box>
    )
}
export default DesktopNavbar