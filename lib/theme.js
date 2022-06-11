import { extendTheme } from "@chakra-ui/react";
import  {mode} from '@chakra-ui/theme-tools'


const styles =  {
    global: (props) => ({
      body: {
        fontFamily: 'body',
        color: mode('gray.800', 'whiteAlpha.900')(props),
        bg: mode('#FFFAF0', '#000000')(props),
        lineHeight: 'base',
        margin: 0,
        padding: 0
      },
    }),
  }

const config = {
  initialColorMode : 'dark',
  useSystemColorMode: false,
}



const theme = extendTheme({config, styles})

export default theme
