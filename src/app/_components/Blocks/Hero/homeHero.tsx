import { useEffect, useRef, useState } from 'react'
import { Box, Flex, Icon, Text } from '@chakra-ui/react'
import { NextPage } from 'next'
import HomeHeroLangText from '../../../_internationalization/homeHero'
import { getLanguage } from '../../../_helpers/misc'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'

const HeroDesktop: NextPage = () => {
  const [lang , setLang] = useState('en')
  const text = HomeHeroLangText[lang as keyof typeof HomeHeroLangText]
  const defaultLang =  getLanguage()
  const nextRef = useRef(null)
  const prevRef = useRef(null)
  let intervalRef = useRef(null);

  useEffect(() => {
      setLang(defaultLang)
  },[defaultLang])

  const HeroSlider = [
    {
      title: text.heroTitle,
      subText: text.subTitle,
      cover: '/images/covers/cover-1.jpg',
      key: 'isActive1'
    },
    {
      title: text.heroTitle2,
      subText: '',
      cover: '/images/covers/cover-2.jpg',
      key: "isActive2"
    },
    {
      title: text.heroTitle3,
      subText: '',
      cover: '/images/covers/cover-3.jpg',
      key: "isActive3"
    },
    // {
    //   title: text.heroTitle4,
    //   subText: '',
    //   cover: '/images/covers/cover-4.jpg',
    //   key: "isActive4"
    // }
  ] 

  useEffect(() => {
    const handleNext = () => {
      let items = document.querySelectorAll('.slide-item');
      document?.querySelector('.slide')?.appendChild(items[0]);
    };

    const handlePrev = () => {
      let items = document.querySelectorAll('.slide-item');
      document?.querySelector('.slide')?.prepend(items[items.length - 1]);
    };

    nextRef.current.addEventListener('click', handleNext);
    prevRef.current.addEventListener('click', handlePrev);

    const startAutoSlide = () => {
      clearInterval(intervalRef.current); 
      console.log(intervalRef.current)
      intervalRef.current = setInterval(handleNext, 30000); // Adjust the interval time as needed (e.g., every 3 seconds)
      console.log(intervalRef.current)
    };

    const stopAutoSlide = () => {
      clearInterval(intervalRef.current);
    };


    startAutoSlide();

    document.querySelector('.slide').addEventListener('mouseenter', stopAutoSlide);
    document.querySelector('.slide').addEventListener('mouseleave', startAutoSlide);

    return () => {
      nextRef?.current?.removeEventListener('click', () => handleNext);
      prevRef?.current?.removeEventListener('click', () => handlePrev);
      document.querySelector('.slide')?.removeEventListener('mouseenter',  () => stopAutoSlide);
      document.querySelector('.slide')?.removeEventListener('mouseleave',  () => startAutoSlide);
      clearInterval(intervalRef.current);
    };
  },[])


  return (
    <Box id="slider-container"
    >
      <Box className="slide">
        {HeroSlider.map(item => (
          <Box className="slide-item" key={item.key}
            bgImage={item.cover}
          >
            <Box className="slide-item-overlay"></Box>
            <Box className="slide-content">
                <Text className='name'>{item.title}</Text>
                <Text className='subtext'>{item.subText}</Text>
                <Flex className='socials' mt={16} color="white" gap={4} fontSize={20}>
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
            </Box>
        </Box>
        ))}
      </Box>
      <Flex gap={6} id="slide-buttons">
        <Text className="slide-button" fontSize={14} color={"white"} ref={prevRef}>Prev</Text>
        <Text className="slide-button" fontSize={14} color={"white"} ref={nextRef}>Next</Text>
      </Flex>
    </Box>
  )
}

export default HeroDesktop
