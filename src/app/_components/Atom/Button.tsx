import { FC } from 'react'
import React from 'react'
import {
  BackgroundProps,
  Box,
  Button,
  Icon,
  Text,
  TypographyProps
} from '@chakra-ui/react'

interface IProp {
  title: string
  bgColor: BackgroundProps['bg']
  textSize?: TypographyProps['fontSize']
  icon?: any
  [x: string]: any
}

const CustomButton: FC<IProp> = ({
  icon,
  title,
  bgColor,
  textSize,
  ...rest
}) => {
  return (
    <Box
      display={"flex"}
      as={Button}
      bg={bgColor}
      _hover={{ bg: bgColor }}
      _active={{ bg: bgColor }}
      _focus={{ bg: bgColor }}
      h={rest.h || 14}
      minW={52}
      rounded={rest.rounded || 'full'}
      mt={rest.mt || 4}
      px={rest.px || 4}
      py={rest.py || 1}
      fontSize={textSize || 24}
      {...rest}
    >
      {icon && (
        <Icon
          mr={2}
          color={rest.color}
          as={icon}
          fontSize={textSize || 24}
          transform={rest.transform}
        />
      )}
      <Text color={rest.color}>{title}</Text>
    </Box>
  )
}

export default CustomButton
