import { FC, useEffect, useState } from 'react'
import { 
    Box, Flex, 
    Icon, Image, 
    Modal, ModalOverlay, 
    ModalContent, ModalHeader, 
    ModalCloseButton, Text, 
    useDisclosure,
    ModalBody,
    Skeleton,
} from '@chakra-ui/react'
import CustomButton from '../Atom/Button'
import { TbPlayerPlayFilled } from 'react-icons/tb'
import { HiArrowLongRight } from 'react-icons/hi2'
import Link from 'next/link'
import { getLanguage } from '../../_helpers/misc'
import HomeLang from '../../_internationalization/home'
import { fetchYoutube } from '../../_service/videos'
import { useQuery } from 'react-query'


const VideoModal: FC<{isOpen: boolean, onClose: () => void, video: any, id: string}> = ({isOpen, onClose, video, id}) => {

    return (
        <Modal isOpen={isOpen} onClose={onClose} size={"2xl"}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    <Box w={"90%"}>
                        <Text color="base.blue" textTransform={"capitalize"}>{video?.[0]?.snippet?.title?.toLowerCase()}</Text>
                    </Box>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <iframe
                        width={"100%"}
                        title={video?.title?.toLowerCase()}
                        src={`https://www.youtube.com/embed/${video?.[0]?.id?.videoId}`}
                        allowFullScreen
                        height={"400px"}
                    />
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

const Latest: FC = () => {
    const currentVideo = process.env.NEXT_PUBLIC_CURRENT_VIDEO;
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [lang,setLang] = useState('en')
    const text = HomeLang[lang as keyof typeof HomeLang]
    const defaultLang =  getLanguage()

    useEffect(() => {
        setLang(defaultLang)
    },[defaultLang]) 


    const { data, isError, isLoading, error, isSuccess } = useQuery<any>(["youtubeData"], fetchYoutube,);
    const video = data?.items
    
    return (
        <Box
            py={20}
            px={{ base: 4, '2xl': 36 }}
        >   
            <VideoModal isOpen={isOpen} onClose={onClose} video={video || []} id={currentVideo as string} />

            <Text color={"base.blue"} fontWeight={"bold"} fontSize={24} textAlign={"center"}>{text?.latestTitle}</Text>
            <Flex direction={"column"} justify={'center'} align={"center"}>
                <Text fontSize={{base: 12, sm: 14, md: 16}} fontWeight={500} textAlign={"center"} w={{base: "auto", md: 124}} mt={{base: 5, md: 12}} color={"base.blue"} fontFamily={"Montserrat"}>
                    {text?.latestSubtext}
                </Text>
                <Link href={"https://youtube.com/@DrGWArthur"} target="_">
                    <CustomButton mt={8} w={48} title={text?.latestButton} bgColor={"base.gold"} rounded="none" fontSize={16} color="black" fontFamily="Garamond" />
                </Link>
            </Flex>

            <Flex justify={"center"} pos={"relative"}>
                <Box pos={"absolute"} left={{base: 0, md: 48}} top={{base: 0, md: -20}} w={{base: 28, md: 32}}>
                    <Image src="images/pattern-1.png" alt="pattern group"  />
                </Box>
                {isLoading ? <Skeleton  h={{base: 'auto', md: 108}} w={{base: 'auto', md: 128}}  mt={12}  /> : <Box bg={"gray.300"} h={{base: 'auto', md: 108}} w={{base: 'auto', md: 128}} mt={12} pos={"relative"} overflow={'hidden'}>
                    <Box bgImage={video?.[0]?.snippet?.thumbnails?.high?.url} bgSize={"cover"}  h={{base: 'auto', md: 108}} w={{base: 'auto', md: 128}} bgPos={"center"}></Box>
                    <Flex align="center" justify={"center"} overflow={"hidden"} pos={"absolute"} left={0} top={0} zIndex={2} w={"100%"} h={"100%"}>
                        {!video?.length || isOpen ? null : <Flex w={16} h={16} bg="whiteAlpha.800" rounded={"full"} align={"center"} 
                            justify={"center"} cursor={"pointer"}
                            onClick={() => onOpen()}
                            >
                            <Icon as={TbPlayerPlayFilled} boxSize={8} />
                        </Flex>}
                    </Flex>
                </Box>}
                {/* <Box pos={"absolute"} right={12} top={-20} display={{base: "none", md: "block"}}>
                    <Icon as={HiArrowLongRight} color="base.blue" fontSize={40}/>
                </Box> */}
            </Flex>

        </Box>
    )
}

export default Latest
