'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { theme } from './_theme/theme'
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { SpeedInsights } from "@vercel/speed-insights/next"
export function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme} resetCSS>
        <AnimatePresence mode='wait'>
          <motion.div
            key={pathname}
            initial="pageInitial"
            animate="pageAnimate"
            variants={{
              pageInitial: {
                opacity: 0
              },
              pageAnimate: {
                opacity: 1,
                transition: { duration: 0.5 }
              }
            }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </ChakraProvider>
      <SpeedInsights />
    </QueryClientProvider>
  )
}