import {ChakraProvider} from '@chakra-ui/react';
import theme from '../lib/theme';
import Layout from './Layout';

const Chakra = ({children}) => {
  return (
    <ChakraProvider theme={theme}>
      <Layout>{children}</Layout>
    </ChakraProvider>
  );
};

export default Chakra;
