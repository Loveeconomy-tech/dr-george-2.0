import { FC } from 'react'
import React from 'react'
import { ColorProps, Flex, Icon } from '@chakra-ui/react'
import { BsFillPlayFill } from 'react-icons/bs'

interface IProp {
  color?: ColorProps['color']
}

const ReelButton: FC<IProp> = ({ color }) => {
  return (
    <Flex
      w={32}
      h={32}
      borderWidth={1}
      borderColor={'whiteAlpha.300'}
      rounded={'full'}
      align="center"
      justify={'center'}
    >
      <Icon as={BsFillPlayFill} fontSize={48} color={color} />
    </Flex>
  )
}

export default ReelButton
