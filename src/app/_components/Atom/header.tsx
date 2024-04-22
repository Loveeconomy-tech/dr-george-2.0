import { FC } from 'react'
import React from 'react'
import { Box, Text } from '@chakra-ui/react'

interface IProp {
  title: string
}

const Header: FC<IProp> = ({ title }) => {
  return (
    <Box>
      <Text
        fontWeight={700}
        fontSize={{ base: 44, md: 52, '2xl': 56 }}
        color="base.600"
        lineHeight={1.3}
      >
        {title}
      </Text>
      <Box w={20} h={2} bgColor="base.400"></Box>
    </Box>
  )
}

export default Header
