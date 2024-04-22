import { FC, useEffect, useState } from 'react'
import { Box, Flex, Grid, GridItem, Input, Text, useToast } from '@chakra-ui/react'
import CustomButton from '../Atom/Button'
import HomeLang from '../../_internationalization/home'
import { getLanguage } from '../../_helpers/misc'
import Link from 'next/link'

interface IProp {
  bgStyle?: any
}

const About: FC<IProp> = () => {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL
  const [loading, setLoading] = useState<boolean>(false)
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const toast = useToast()
  const [lang,setLang] = useState('en')
  const text = HomeLang[lang as keyof typeof HomeLang]
  const defaultLang =  getLanguage()

  useEffect(() => {
  setLang(defaultLang)
  },[defaultLang])  

  const handleSubmit = async () => {
    try {
      setLoading(true)
      let res = await fetch(`https://workers-app.loveeconomychurch.org/api/website/newsletter`, {
        method: 'post',
        body: JSON.stringify({name, email, website: 'George Wilfred Arthur', host: baseUrl})
      })

      if(res.status === 200){
        toast({
          title: "Newsletter saved",
          status: "success",
          position: 'bottom-right',
          duration: 9000,
          isClosable: true,
        })
      }
        setName('')
        setEmail('')
      setLoading(false)
    } catch (error) {
      toast({
        title: "Sorry An Error Occurred",
        status: "error",
        position: 'bottom-right',
        duration: 9000,
        isClosable: true,
      })
      setLoading(false)
    }
  }

  return (
    <Grid templateColumns={{base: 'repeat(1, 1fr)' ,  lg:'repeat(2, 1fr)'}}>
      <GridItem px={{base: 5, md: 20}} py={20} bg={"black"}>
        <Text color={"white"} fontWeight={"bold"} fontSize={24}>{text?.newsletterTitle}</Text>
        <Text fontFamily={'Montserrat'} mt={4} color={"white"} fontSize={{base: 12, sm: 14, md: 16}}>{text?.newsletterSubtext}</Text>
        <Flex mt={4} gap={3} fontFamily={"Montserrat"} direction={{base: "column", md: "row"}}>
          <Input h={14} fontSize={14} bg="white" rounded={"none"} placeholder={text?.newsletterNameInput} value={name} onChange={(e) => setName(e?.currentTarget?.value)}/>
          <Input h={14} fontSize={14} bg="white" rounded={"none"} placeholder={text?.newsletterEmailInput} value={email} onChange={(e) => setEmail(e?.currentTarget?.value)}/>
          <CustomButton isLoading={loading} title={text?.newsletterSubmit} bgColor={"base.gold"} rounded="none" mt={{base: 2, md: 0}} fontSize={16} color="black" fontFamily="Garamond" onClick={() => handleSubmit() }/>
        </Flex>
      </GridItem>
      <GridItem px={{base: 5, md: 20}} py={20} bg={"base.blue"}>
        <Text color={"white"} fontWeight={"bold"} fontSize={24}>{text?.readMoreTitle}</Text>
        <Text fontFamily={'Montserrat'} mt={4} color={"white"} fontSize={{base: 12, sm: 14, md: 16}}>{text?.readMoreSubtext}</Text>
        <Flex mt={4} gap={3} fontFamily={"Montserrat"}>
          <Link href={"/ministry"}>
            <CustomButton title={text?.readMoreButton} bgColor={"white"} rounded="none" mt={0} fontSize={16} color="black" fontFamily="Garamond"  />
          </Link>
        </Flex>
      </GridItem>
    </Grid>
  )
}

export default About
