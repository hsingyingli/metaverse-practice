import {Box, Container} from '@chakra-ui/react';
import Head from 'next/head';
import Header from './Header';

const Layout = ({children}) => {
  return (
    <Box>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Web3 Practice Chatroom" />
        <meta name="author" content="Hsing Ying Li" />
        <title>Web3 Chatroom</title>
      </Head>
      <Header />
      <Container maxW="container.md">
        {children}
      </Container>
    </Box>
  );
};

export default Layout;
