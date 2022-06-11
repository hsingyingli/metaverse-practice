import {useEffect} from 'react'
import {Box, Button, useColorModeValue, useToast} from '@chakra-ui/react';
import {useMoralis} from 'react-moralis';
import { useRouter } from 'next/router';

const Login = () => {
  const {authenticate, isAuthenticated} = useMoralis();
  const router = useRouter();
  const toast = useToast();
  const handleOnLogin = () => {
    authenticate({onError: ()=> {
      alert("Fail to login, please checkout your metawallet extension")
    }});
  }
  useEffect(()=> {
    if (isAuthenticated) {
      router.push('/')
    }
  }, [isAuthenticated, router])

  return (
    <Box display='flex' alignItems='center' justifyContent='center' w='100%' h='100vh'>
      <Button colorScheme="teal" color={useColorModeValue('white', 'gray.700')} onClick={handleOnLogin}>
        Login to MetaVerse
      </Button>

    </Box>
  );
};

export default Login;
