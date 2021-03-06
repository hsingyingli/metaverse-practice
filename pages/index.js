import {useState, useEffect} from 'react';
import {Box, CircularProgress} from '@chakra-ui/react';
import {useRouter} from 'next/router';
import {useMoralis} from 'react-moralis';
import ChatRoom from '../components/Chatroom';
export default function Home() {
  const {isAuthenticated} = useMoralis();
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setIsLoading(false);
  }, []);
  useEffect(() => {
    if (!isAuthenticated) {
      router.replace('/login');
    }
  }, [isAuthenticated, router]);

  if (isLoading) {
    return (
      <Box
        h="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        mx="auto"
      >
        <CircularProgress isIndeterminate color="teal.100" />
      </Box>
    );
  }

  return (
    <Box>
      {/*Main Chat room */}
      <ChatRoom />
    </Box>
  );
}
