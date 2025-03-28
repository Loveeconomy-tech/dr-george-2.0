import { Box, Flex, Text } from "@chakra-ui/react";
import EventCard from "./cards/event-card";
const NoEvents = () => {
  return (
    <Flex
      py={{ base: 2, md: 24 }}
      px={{ base: 4, "2xl": 36 }}
      pos="relative"
      bg="base.blue"
      justify={"center"}
      gap={16}
    >
      <Box textColor={"base.gray"} w={{ base: "100%", md: 40, lg: 120 }}>
        <Text fontSize={"4xl"} fontWeight={"bold"}>
          We have a series of upcoming events.
        </Text>
        <Text fontFamily={"Montserrat"} mt={4}>
          Your season of renewal is here, and we know God is about to move in a
          powerful way. We’ll be spending time with Rev. G.W Arthur as he
          teaches and expounds on God’s word for you. These are moments set
          apart for divine transformation, and we don’t want you to miss them.
        </Text>

        <Box
          mt={8}
          fontFamily={"Montserrat"}
          fontWeight={"bold"}
          textAlign={"center"}
        >
          <Text mb={2}>Stay tuned—more details coming soon!</Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default NoEvents;
