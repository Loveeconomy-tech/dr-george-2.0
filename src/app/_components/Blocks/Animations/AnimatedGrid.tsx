'use client'
import {FC, useRef} from 'react'
import { Text, Grid, GridItem, Box, Flex } from "@chakra-ui/react";
import useHover from '../../../_hooks/useHover';

const AnimatedGrid:FC<{count: string; description: string, border?: string}> = ({count, description, border}: {count: string; description: string, border?: string}) => {
    const ref = useRef(null);
    const isHovered = useHover(ref);



    return <Grid as={Flex} ref={ref} 
            templateColumns={{base: "repeat(1, 1fr)", md: "repeat(7, 1fr)"}} gap={16} 
            borderBottomWidth={border || 1}
            borderColor={{base: 'gray.300', md: 'gray.600'}} 
            color="gray.500"
            align={"center"}
            py={10}  px={{ base: 4, '2xl': 28 }}
            cursor={"pointer"}
            >
            <Box as={GridItem} colSpan={3}>
                <Text fontSize={{base: 124, md: 148}}  color={isHovered ? 'black' : "gray.400"} >{count}</Text>
            </Box>
            <Box as={GridItem} colSpan={4}>
                <Text fontSize={{base: 20, md: 24}} color={isHovered ? 'black' : "gray.500"} lineHeight={1.5} mt={-4}>
                    {description}
                </Text>
            </Box>
        </Grid>
}

export default AnimatedGrid
