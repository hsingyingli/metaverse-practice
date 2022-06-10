import {useEffect} from 'react';
import {Box, Button} from '@chakra-ui/react';
import {useRouter} from 'next/router';
import {useMoralis} from 'react-moralis';
import LeftInfo from '../components/LeftInfo';
import ChatRoom from '../components/Chatroom';

export default function Home() {
  const {isAuthenticated, logout} = useMoralis();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace('/login');
    }
  }, [isAuthenticated, router]);

  return (
    <Box
      display="flex"
      flexDir="row"
      justifyContent="space-around"
      w="100%"
      h='calc(100vh - 48px)'
    >
      {/*left side info */}
      <LeftInfo />
      {/*Main Chat room */}
      <ChatRoom />
    </Box>
  );
}
