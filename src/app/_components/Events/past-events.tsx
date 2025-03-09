import { Box, Flex, Text } from "@chakra-ui/react";
import EventCard from "./cards/event-card";
const PastEvents = () => {
  return (
    <Box
      py={{ base: 2, md: 36 }}
      px={{ base: 4, "2xl": 40 }}
      pos="relative"
      gap={16}
    >
      <Box>
        <Text fontSize={"4xl"} fontWeight={"bold"} mb={8} color={"base.blue"}>
          Past Events
        </Text>

        <Flex mt={8} gap={12} flexWrap={"wrap"}>
          <EventCard type="past" />
          <EventCard type="past" />
          <EventCard type="past" />
          <EventCard type="past" />
        </Flex>
      </Box>
    </Box>
  );
};

export default PastEvents;
