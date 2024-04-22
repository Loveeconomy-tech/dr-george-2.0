import { FC, useEffect, useState } from 'react'
import { Box, Grid, GridItem, Text } from '@chakra-ui/react'
import { getLanguage } from '@/helpers/misc'
import contactText from '@/internationalization/contact'
import CustomButton from '../Atom/Button'


const Appointment: FC = () => {
    const [lang,setLang] = useState('en')
  const text = contactText[lang]
  const defaultLang =  getLanguage()

  useEffect(() => {
      setLang(defaultLang)
  },[defaultLang])

  const openExternalLink = () => {
    window.open('https://calendly.com/gwarthur/30min', '_blank');
  };
  return (
    <Box py={{base: 2, md: 14}} px={{ base: 4, '2xl': 36 }} pos="relative">
        <Grid templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)'}} gap={4} color={"base.blue"}>
            <GridItem px={{base: 5, md: 20}} py={{base: 8, md: 20}}>
                <Text fontSize={{base: 24, md: 40}} fontWeight={600}  w={{base: 'auto', md: 124}} mt={{base: 4, md: 12}} color={"base.blue"} fontFamily={"Montserrat"}>Want to Meet Dr. G. W. Arthur ?</Text>
                <Text  fontFamily={"Montserrat"} fontSize={{base: 14, md: 18}} fontWeight={500}>
                    You can schedule it on his calendar
                </Text>
            </GridItem>
            <GridItem  px={{base: 5, md: 20}} py={{base: 8, md: 32}}>
                <CustomButton 
                    w={36} 
                    mx="auto" 
                    bgColor={'base.blue'} 
                    color="white" 
                    title={'Schedule Now'} 
                    textSize={16} 
                    rounded="none" 
                    fontFamily="Montserrat"
                    onClick={() => openExternalLink()}
                />
            </GridItem>
        </Grid>
    </Box>
  )
}

export default Appointment
