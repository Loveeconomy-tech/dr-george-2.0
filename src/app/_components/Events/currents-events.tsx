import { Box, Flex, Text } from "@chakra-ui/react";

const CurrentEvents = () => {
  return (
    <Flex
      py={{ base: 2, md: 24 }}
      px={{ base: 4, "2xl": 36 }}
      pos="relative"
      bg="base.blue"
      gap={16}
    >
      <Box
        w={{ base: "100%", md: 40, lg: 120 }}
        h={{ base: "100%", md: 40, lg: 96 }}
        bg={"base.gold"}
      ></Box>
      <Box textColor={"base.gray"} w={{ base: "100%", md: 40, lg: 120 }}>
        <Text fontSize={"4xl"} fontWeight={"bold"}>
          Teachers of the Word 2024 - Mid Year Edition
        </Text>
        <Text fontFamily={"Montserrat"} mt={4}>
          Raising and equipping people who will come into the consciousness and
          the revelation of Christ and his finished work through the preaching
          and teaching of the gospel.
        </Text>

        <Box mt={8} fontFamily={"Montserrat"} fontWeight={"bold"}>
          <Text mb={2}>Love Economy Church - Thesaurus</Text>
          <Text mb={2}>Agbogba, Suncity, North Legon</Text>
          <Text mb={2}>09:00 am to 11:00 pm </Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default CurrentEvents;
