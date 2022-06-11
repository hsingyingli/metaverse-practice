import {Box, Container} from '@chakra-ui/react';
import Header from './Header';

const Layout = ({children}) => {
  return (
    <Box>
      <Header />
      <Container maxW="container.lg" maxH="100vh" >
        {children}
      </Container>
    </Box>
  );
};

export default Layout;
