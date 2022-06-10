import {useEffect} from 'react'
import {Box, Button} from '@chakra-ui/react';
import {useMoralis} from 'react-moralis';
import { useRouter } from 'next/router';

const Login = () => {
  const {authenticate, isAuthenticated} = useMoralis();
  const router = useRouter();

  useEffect(()=> {
    if (isAuthenticated) {
      router.push('/')
    }
  }, [isAuthenticated, router])

  return (
    <Box display='flex' alignItems='center' justifyContent='center' w='100%' h='100vh'>
      <Button colorScheme="teal" color="gray.700" onClick={authenticate}>
        Login to MetaVerse
      </Button>

    </Box>
  );
};

export default Login;
