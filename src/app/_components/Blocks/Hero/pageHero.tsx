import { FC } from "react";
import { Box, Flex, Grid, GridItem, Icon, Image, Text } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { HiArrowLongRight } from "react-icons/hi2";

interface IProp {
  title?: string;
}

const PageHero: FC<IProp> = ({ title }) => {
  return (
    <Box
      w="full"
      bgSize="contain"
      alignItems={"center"}
      minH={{ base: "30vh", md: "calc(70vh - 150px)" }}
      h={{ base: "30vh", md: "50vh" }}
      bg="base.blue-dark"
      position={"relative"}
      overflow={"hidden"}
    >
      <Flex
        align={"center"}
        justify={"center"}
        pos={"absolute"}
        top={0}
        left={0}
        bg={"rgba(2, 24, 33, 0.7)"}
        w={"100%"}
        h="100%"
        zIndex={3}
      >
        <Text
          color={"white"}
          textAlign={"center"}
          fontSize={{ base: 36, md: 64 }}
          fontWeight={600}
          letterSpacing={1.3}
        >
          {title}
        </Text>
      </Flex>
      <Box
        pos={"absolute"}
        w="100%"
        h="100%"
        bgImage={"/images/hero image 2.png"}
        bgPos={"center"}
        bgSize={"cover"}
      ></Box>
    </Box>
  );
};

export default PageHero;
