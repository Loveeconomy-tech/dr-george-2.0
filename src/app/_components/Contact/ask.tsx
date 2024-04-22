import { FC, useEffect, useState } from 'react'
import { Box, Flex, Image, Input, Text, Textarea } from '@chakra-ui/react'
import CustomButton from '../Atom/Button'
import { getLanguage } from '@/helpers/misc'
import contactText from '@/internationalization/contact'


const Ask: FC = () => {
  const [lang,setLang] = useState('en')
  const text = contactText[lang]
  const defaultLang =  getLanguage()

  useEffect(() => {
      setLang(defaultLang)
  },[defaultLang])

  return (
    <Box
        bg={'rgba(238, 167, 44, 0.22)'}
        py={20}
        px={{ base: 4, '2xl': 36 }}
        pos={"relative"}
    >
       <Text color={"base.blue"} fontWeight={"bold"} fontSize={{base: 24, md: 40}} textAlign={"center"}>{text.questionsTitle}</Text>
       <Flex direction={"column"} justify={'center'} align={"center"}>
            <Text fontSize={{base: 12, md: 16}} textAlign={"center"} w={{base: 'auto', md: 124}} mt={{base: 4, md: 12}} color={"base.blue"} fontFamily={"Montserrat"}>
              {text.questionsSubtext}
            </Text>
        </Flex>

        <Flex direction={'column'} gap={6} maxW={'600px'} mx={"auto"} mt={12}>
          <Input fontSize={{base: 12, md: 16}} fontFamily={'Montserrat'} placeholder={text.questionsNameInput} rounded={'none'}  h={14} border={'1px solid gray'}/>
          <Textarea fontSize={{base: 12, md: 16}} fontFamily={'Montserrat'} placeholder={text.questionsQuestionInput} rounded={'none'} h={28}  border={'1px solid gray'}></Textarea>
          <CustomButton w={36} mx="auto" bgColor={'base.blue'} color="white" title={text.questionsButton} textSize={16} rounded="none" fontFamily="Montserrat"/>
        </Flex>
        <Box pos={"absolute"} bottom={{base: -16, md: -20}} left={0} w={{base: 24, md: 32}} zIndex={5}>
            <Image src='images/pattern-2.png' alt='pattern'/>
        </Box>
    </Box>
  )
}

export default Ask
