import { extendTheme } from "@chakra-ui/react";
import  {mode} from '@chakra-ui/theme-tools'


const styles =  {
    global: (props) => ({
      body: {
        fontFamily: 'body',
        color: mode('gray.800', 'whiteAlpha.700')(props),
        bg: mode('white', 'gray.800')(props),
        lineHeight: 'base',
      },
    }),
  }

const config = {
  initialColorMode : 'dark',
  useSystemColorMode: false,
}


const theme = extendTheme({config, styles})

export default theme
