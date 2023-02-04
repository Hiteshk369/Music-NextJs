import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import type { AppProps } from 'next/app'
import PlayerLayout from '@/components/PlayerLayout';
import 'styles/globals.css'

const theme = extendTheme({
  colors: {
    gray: {
      100: '#F5F5F5',
      200: '#EEEEEE',
      300: '#E0E0E0',
      400: '#BDBDBD',
      500: '#9E9E9E',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
    },
  },
  components: {
    Button: {
      variants: {
        link: {
          ':focus': {
            outline: 'none',
            boxShadow: 'none'
          }
        }
      }
    }
  }
})

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <PlayerLayout>
        <Component {...pageProps} />
      </PlayerLayout>
    </ChakraProvider>
  )
}

export default App