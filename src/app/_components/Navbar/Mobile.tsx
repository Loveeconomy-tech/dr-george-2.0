import { FC, useEffect, useState } from 'react'
import NextLink from 'next/link'
import { FiMenu, FiX } from 'react-icons/fi'
import {
  Box,
  Text,
  Flex,
  Link,
  Fade,
  Image,
  IconButton,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  MenuItem
} from '@chakra-ui/react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

interface ILink {
  name: string
  path: string
  weight?: string
  width?: number
  height?: number
  children?: { name: string; path: string }[]
}

interface IProps {
  links: ILink[],
  transparent: boolean
}

const MobileNavbar: FC<IProps> = ({ links, transparent }) => {
  const { isOpen, onToggle } = useDisclosure()

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

  const changeLanguage = (lang) => {
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

    logoBox.addEventListener('mouseenter', () => {
      animation.restart();
      animation.pause()
    });

    logoBox.addEventListener('mouseleave', () => {
      animation.play();
    });
  })


  return (
    <Box display={{ base: 'flex', md: 'none' }} flexDirection="column">
       <Flex fontFamily={"Garamond"} bg={'base.blue'} justify={"space-between"} py={3}  px={{ base: 8, '2xl': 36 }} color={"white"}>
          <Box borderBottomWidth={2} borderColor={'base.blue'} px={1}>G. W. Arthur Ministries</Box>

            
             <Menu >
              <MenuButton as={Box}>{language?.toUpperCase()}</MenuButton>
              <MenuList w={'100%'} zIndex={300} color={"base.blue"} fontWeight={500}>
                {language !== 'en' ? <MenuItem w={'100%'} onClick={() => changeLanguage('en')}>EN</MenuItem> : null}
                {language !== 'fr' ? <MenuItem w={'100%'} onClick={() => changeLanguage('fr')}>FR</MenuItem> : null}
                {language !== 'es' ? <MenuItem w={'100%'} onClick={() => changeLanguage('es')}>ES</MenuItem> : null}
                {language !== 'pt' ? <MenuItem w={'100%'} onClick={() => changeLanguage('pt')}>PT</MenuItem> : null}
                {language !== 'ch' ? <MenuItem w={'100%'} onClick={() => changeLanguage('ch')}>CH</MenuItem> : null}
              </MenuList>
            </Menu>
        </Flex>
      <Flex
        h={20}
        px={{ base: 8, xl: 2 }}
        as="nav"
        w="full"
        shadow="sm"
        zIndex={100}
        align="center"
        justify="space-between"
        color={'white'}
        top={transparent ? 12:  0}
        pos={transparent? "absolute": "fixed" }  
        bg={transparent? 'transparent' :"rgba(255, 255, 255, 0.29)"}
        boxShadow={transparent ? "none" : "0 4px 30px rgba(0, 0, 0, 0.1)"}
        backdropFilter={transparent ? "blur(0)" : "blur(12.6px)"}
      >
        <Box className='logo-box'>
          <Link as={NextLink} href="/" passHref _focus={{ outline: 'none' }} _hover={{ outline: 'none' }}>
            <Image src="/images/G W Arthur Logo.png" h={16} alt="company logo" />
          </Link>
        </Box>

        <Box>
          <IconButton
            aria-label="toggle menu"
            onClick={() => onToggle()}
            icon={isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
            bg="transparent"
            role="button"
            color={transparent? "white": "base.blue"}
          />
          <Box pos="relative">
            <Fade in={isOpen}>
              {isOpen && (
                <Box
                  w={72}
                  right={4}
                  shadow="lg"
                  zIndex={10}
                  rounded="md"
                  pos="absolute"
                  bgColor="black"
                  color="base.yellow"
                >
                  <Box py={2}>
                    {links.map((m, idx) => (
                      <Box key={idx}>
                        {m.children ? (
                          <Box>
                            <NextLink href={m.path} passHref>
                              <Flex justify="start" pl={5} py={3}>
                                <Text fontWeight={700}>{m.name}</Text>
                              </Flex>
                            </NextLink>
                          </Box>
                        ) : (
                          <>
                            <NextLink key={idx} href={m.path} passHref>
                              <Flex justify="start" pl={5} py={3}>
                                <Text fontWeight={700}>{m.name}</Text>
                              </Flex>
                            </NextLink>
                          </>
                        )}
                      </Box>
                    ))}
                  </Box>
                </Box>
              )}
            </Fade>
          </Box>
        </Box>
      </Flex>
    </Box>
  )
}

export default MobileNavbar
