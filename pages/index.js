import {useState, useEffect} from 'react';
import {Box, Button, VStack, CircularProgress} from '@chakra-ui/react';
import {useRouter} from 'next/router';
import {useMoralis} from 'react-moralis';
import ChatRoom from '../components/Chatroom';
export default function Home() {
  const {isAuthenticated, logout} = useMoralis();
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter();
  useEffect(()=> {
    setIsLoading(false)
  }, [])
  useEffect(() => {
    if (!isAuthenticated) {
      router.replace('/login');
    }
  }, [isAuthenticated, router]);

  if(isLoading) {
    return (
      <CircularProgress isIndeterminate color='teal.100' />
    )
  }

  return (
    <Box
    >
      {/*Main Chat room */}
      <ChatRoom/>
    </Box>
  );
}
