import { FC } from 'react'
import React from 'react'
import { BackgroundProps, ColorProps, Flex, Icon } from '@chakra-ui/react'

interface IProp {
  textColor?: ColorProps['color']
  bgColor?: BackgroundProps['bg']
  icon?: any
}

const SocialBox: FC<IProp> = ({ icon, bgColor, textColor }) => {
  return (
    <Flex
      borderWidth={1}
      p={2}
      borderColor={bgColor || 'whiteAlpha.300'}
      rounded="sm"
    >
      <Icon as={icon} color={textColor || 'white'} fontSize={12} />
    </Flex>
  )
}

export default SocialBox
