import { extendTheme } from '@chakra-ui/react'


export const theme = extendTheme({
  styles: {
    global: () => ({
      'html, body': {
        fontFamily: 'Garamond, Baguede, sans-serif',
        fontWeight: 500,
      },
      body: {
        lineHeight: 'tall',
        color: 'gray.700',
        fontSize: 'md',
        fontWeight: 500,
        bg: 'white',
        fontFamily: 'Garamond, Baguede, sans-serif'
      }
    })
  },
  breakpoints:{
    sm: '24em',
    md: '48em', // 768
    lg: '62em', // 992
    xl: '80em', // 1280
    '2xl': '85.375em', // 1366
    '3xl': '90em', // 1440
    '4xl': '96em', // 1536
    '5xl': '120em' // 1920
  },
  fonts: {
    heading: 'Garamond, Baguede, sans-serif',
    body: 'Garamond, Baguede, sans-serif'
  },
  fontSizes: {
    xx: '.55rem',
    tiny: '.68rem',
    '7xl': '5rem',
    '8xl': '6rem'
  },
  colors: {
    base: {
      blue: '#09143C',
      'blue-dark': '#102033',
      gold: '#c99d50',
      gray: '#f5f5f5'
    }
  },
  space: {
    14: '3.5rem',
    60: '15rem',
    66: '17.5rem',
    70: '18rem',
    80: '20rem',
    82: '21rem',
    85: '23rem',
    90: '25rem',
    95: '26rem',
    108: '27rem',
    110: '30rem',
    115: '32rem',
    120: '35rem',
    121: '36rem',
    122: '37rem',
    123: '40rem',
    124: '42rem',
    125: '45rem',
    127: '48rem',
    129: '50rem',
    130: '55rem',
    135: '60rem',
    137: '65rem',
    140: '70rem',
    143: '72rem',
    145: '76rem',
    150: '80rem',
    155: '90rem'
  },
  sizes: {
    14: '3.5rem',
    60: '15rem',
    66: '17.5rem',
    70: '18rem',
    80: '20rem',
    82: '21rem',
    85: '23rem',
    90: '25rem',
    95: '26rem',
    108: '27rem',
    109: '28.125rem',
    110: '30rem',
    115: '32rem',
    116: '34rem',
    120: '35rem',
    121: '36rem',
    122: '37rem',
    123: '40rem',
    124: '42rem',
    125: '45rem',
    126: '47rem',
    127: '48rem',
    128: '49rem',
    129: '50rem',
    130: '55rem',
    132: '58rem',
    135: '60rem',
    137: '65rem',
    140: '70rem',
    143: '72rem',
    145: '76rem',
    150: '80rem',
    155: '90rem'
  }
})
