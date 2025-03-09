import { Box, Flex, Text } from "@chakra-ui/react";
import EventCard from "./cards/event-card";
const UpcomingEvents = () => {
  return (
    <Box
      pt={{ base: 2, md: 36 }}
      px={{ base: 4, "2xl": 40 }}
      pos="relative"
      gap={16}
    >
      <Box>
        <Text fontSize={"4xl"} fontWeight={"bold"} mb={8} color={"base.blue"}>
          Upcoming Events
        </Text>

        <Flex mt={8} gap={12} flexWrap={"wrap"}>
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </Flex>
      </Box>
    </Box>
  );
};

export default UpcomingEvents;
