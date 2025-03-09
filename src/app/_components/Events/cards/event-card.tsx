import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const EventCard = ({ type = "upcoming" }: { type?: "upcoming" | "past" }) => {
  return (
    <Flex gap={6}>
      <Flex
        w={40}
        h={40}
        bg={type === "upcoming" ? "base.blue" : "base.gray"}
        justify={"center"}
        align={"center"}
      >
        <Box fontFamily={"Montserrat"}>
          <Text
            fontSize={52}
            color={type === "upcoming" ? "base.gold" : "blue-dark"}
            lineHeight={"1"}
          >
            14
          </Text>
          <Text
            fontSize={20}
            color={type === "upcoming" ? "white" : "blue-dark"}
            textTransform={"uppercase"}
          >
            June
          </Text>
        </Box>
      </Flex>
      <Box>
        <Text fontSize={24} fontWeight={450}>
          Them them that love his appearing
        </Text>
        <Text w={"80%"}>
          Raising and equipping people who will come into the consciousness and
          the revelation
        </Text>
        <Box fontWeight={"bold"} fontFamily={"Montserrat"} fontSize={12} mt={2}>
          <Text>Love Economy Church - Thesaurus</Text>
          <Text>Agbogba, Suncity, North Legon</Text>
          <Text>09:00 AM - 12:00 PM</Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default EventCard;
