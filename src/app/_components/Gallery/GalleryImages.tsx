import { FC, useEffect, useState } from 'react'
import { Box, Flex, Grid, GridItem, Icon, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Skeleton, Text, useDisclosure } from '@chakra-ui/react'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { HiArrowLongLeft, HiArrowLongRight } from 'react-icons/hi2'
import Link from 'next/link'
import { createClient } from '@/helpers/prismicClient'
import { getLanguage } from '@/helpers/misc'
import GalleryText from '@/internationalization/gallery'


const ImageModal: FC<{isOpen: boolean, onClose: () => void, image: string}> = ({isOpen, onClose, image}) => {

  return (
      <Modal isOpen={isOpen} onClose={onClose} size={"2xl"}>
          <ModalOverlay />
          <ModalContent>
              {/* <ModalHeader>
                  <Box w={"90%"}>
                      <Text color="base.blue" textTransform={"capitalize"}>{video?.[0]?.snippet?.title?.toLowerCase()}</Text>
                  </Box>
              </ModalHeader> */}
              <ModalCloseButton />
              <ModalBody p={0}>
                  <Image src={image} alt="gallery image" w={'100%'} h={'100%'} />
              </ModalBody>
          </ModalContent>
      </Modal>
  )
}

const GalleryImages: FC = () => {
    const client = createClient({})
    const [data, setData] = useState([])
    const [isAnimating, setIsAnimating] = useState<boolean>(false);
    const currentIndex = 4;

    const { isOpen, onOpen, onClose } = useDisclosure()

    const [lang,setLang] = useState('en')
    const text = GalleryText[lang]
    const defaultLang =  getLanguage()
    const [view, setView] = useState('');

    useEffect(() => {
        setLang(defaultLang)
    },[defaultLang])


    useEffect(() => {
        // Your asynchronous logic here
        const fetchData = async () => {
        const componentData = await client.getAllByType('site_gallery', {
            fetchOptions: {
            cache: 'no-store',
            next: { tags: ['prismic', 'home_hero'] },
            }
        })

        setData(componentData)
        };

        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  const handlePrevious = () => {
    setIsAnimating(true);
    const imageArr = [...data]
    imageArr.push(imageArr.shift());
    setData(imageArr)
  }

  const handleNext = () => {
    setIsAnimating(true);
    const imageArr = [...data]
    let lastElement = imageArr.pop(); // Remove the last element
    imageArr.unshift(lastElement); 
    setData(imageArr)
  }

  const handleLoaded = () => {
    setIsAnimating(false)
  }

  const images = [
    '/images/gallery/_BXA5465.jpg',
    '/images/gallery/_MG_35ascd.jpg', 
    '/images/gallery/_MG_2737.jpg',
    '/images/gallery/_MG_3569.jpg',
    '/images/gallery/_MG_3731.jpg',
    '/images/gallery/_MG_6393.jpg',
    '/images/gallery/_MG_6421.jpg',
    '/images/gallery/_MG_7074.jpg',
    '/images/gallery/_MG_7084.jpg',
    '/images/gallery/_MG_7499.jpg',
    '/images/gallery/_MG_7691.jpg',
    '/images/gallery/_MG_7692.jpg',
    '/images/gallery/_MG_9290.jpg',
    '/images/gallery/_MG_9303.jpg',
    '/images/gallery/_MG_9317.jpg',
    '/images/gallery/_MG_9325.jpg',
    '/images/gallery/_MG_9329.jpg',
    '/images/gallery/_MG_9334.jpg',
    '/images/gallery/_MG_9344.jpg',
    '/images/gallery/_MG_9968.jpg',
    '/images/gallery/_MG_27327.jpg',
    '/images/gallery/BRIT1302.jpg',
    '/images/gallery/BRIT1325.jpg',
    '/images/gallery/spmwrg-288.jpg',
    '/images/gallery/_BXA5200.jpg',
    '/images/gallery/_BXA5211.jpg',
    '/images/gallery/_BXA5271.jpg',
    '/images/gallery/_BXA5281.jpg',
    '/images/gallery/_BXA5282.jpg',
    '/images/gallery/_BXA5310.jpg',
    '/images/gallery/_BXA5357.jpg',
    '/images/gallery/_BXA5395.jpg',
    '/images/gallery/_BXA5400.jpg'
  ]
  // const = modal

  return (
    <Box py={{base: 12, md: 20}} px={{ base: 4, '2xl': 36 }} pos="relative">
      
      <ImageModal isOpen={isOpen} onClose={onClose} image={view} />
      <Grid templateColumns={{base: 'repeat(2, 1fr)', xl: 'repeat(3, 1fr)'}} gap={{base: 4, xl: 6}}>
                {images.map(item => (
                  <GridItem key={item} onClick={() => {setView(item); onOpen()}} cursor={'pointer'}>
                    <Box mr={5} display={"inline-block"} w={"100%"} h={{sm: '300px', base: '400px', xl: '500px'}} bgImage={item} bgSize={"cover"}></Box>
                  </GridItem>
                ))}
        <GridItem>
        </GridItem>
      </Grid>
    </Box>
  )
}

export default GalleryImages
