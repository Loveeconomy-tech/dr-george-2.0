import { FC, useEffect, useState } from 'react'
import { Box, Flex, Image, Input, Text, Textarea, useToast } from '@chakra-ui/react'
import CustomButton from '../Atom/Button'
import HomeLang from '../../_internationalization/home'
import { getLanguage } from '../../_helpers/misc'


const AskDrGeorge: FC = () => {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL
  const [lang,setLang] = useState('en')
  const text = HomeLang[lang as keyof typeof HomeLang]
  const defaultLang =  getLanguage()
  const toast = useToast()
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  const handleSubmit = async () => {
    try {
      setLoading(true)
      if(!name && !message){
        throw new Error("Name or Question field can't be empty")
      }
      let res = await fetch(`https://workers-app.loveeconomychurch.org/api/website/message`, {
        method: 'post',
        body: JSON.stringify({
          name: name, 
          message: message, 
          website: 'George Wilfred Arthur', host: baseUrl
        })
      })

      if(res.status === 200){
        toast({
          title: "Message Sent",
          status: "success",
          position: 'bottom-right',
          duration: 9000,
          isClosable: true,
        })
      }
      setName("")
      setMessage("")
      setLoading(false)
    } catch (error) {
      console.log(error)
      toast({
        title: (error as {message: string}).message || "Sorry An Error Occurred",
        status: "error",
        position: 'bottom-right',
        duration: 9000,
        isClosable: true,
      })
      setLoading(false)
    }
  }

  useEffect(() => {
      setLang(defaultLang)
  },[defaultLang])


  return (
    <Box
        bg={'white'}
        py={20}
        px={{ base: 4, '2xl': 36 }}
        pos={"relative"}
    >
        <Text color={"base.blue"} fontWeight={"bold"} fontSize={{base: 24, md: 40}} textAlign={"center"}>{text.questionsTitle}</Text>
        <Flex direction={"column"} justify={'center'} align={"center"}>
            <Text fontWeight={500} textAlign={"center"} w={{base: "auto", md: 124}} fontSize={{base: 10, sm: 14, md: 16}} mt={{base: 4, md: 12}} color={"base.blue"} fontFamily={"Montserrat"}>
            {text.questionsSubtext}
            </Text>
        </Flex>

        <Flex direction={'column'} gap={6} maxW={'600px'} mx={"auto"} mt={{base: 12, md: 0}}>
          <Input fontFamily={'Montserrat'} placeholder={text.questionsNameInput} rounded={'none'} 
            h={14} fontSize={{base: 10, sm: 14, md: 16}}
            value={name || ''} 
            onChange={(e) => setName(e?.currentTarget?.value)}
          />
          <Textarea fontFamily={'Montserrat'} placeholder={text.questionsQuestionInput} 
          rounded={'none'} fontSize={{base: 10, sm: 14, md: 16}} h={28}
          onChange={(e) => setMessage(e?.currentTarget?.value)} value={message || ''}></Textarea>
          <CustomButton w={36} mx="auto" 
            bgColor={'base.blue'} color="white" title={text.questionsButton} 
            textSize={16} rounded="none" fontFamily="Montserrat" 
            isLoading={loading}
            isDisabled={loading}
            onClick={() => handleSubmit()}
            />
        </Flex>
        <Box pos={"absolute"} bottom={{base: -16, md: -20}} left={0} w={{base: 24, md: 32}} zIndex={5}>
            <Image src='images/pattern-2.png' alt='pattern'/>
        </Box>
    </Box>
  )
}

export default AskDrGeorge
