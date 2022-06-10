import {chakra, Box} from '@chakra-ui/react';
import MoralisInput from './MoralisInput';
import MoralisMessages from './MoralisMessages';
import {ByMoralis} from 'react-moralis';
import {useState} from 'react'
const ChakraMoralis = chakra(ByMoralis);

const ChatRoom = () => {
  const [isSend, setIsSend] = useState(false)
  return (
    <Box
      h="100%"
      w="100%"
      minW='380px'
      overflowX='scroll'
      display="flex"
      flexDirection="column"
      ml={{base: 0, md: 10}}
      p={{base:1, md: 5}}
      rounded="lg"
      bgColor='gray.900'
      alignItems="center"
      justifyContent="center"
      boxShadow="0 0 5px 1px gray"
    >
      <ChakraMoralis
        variant="dark"
        style={{width:'300px', height: '200px', marginLeft: 'auto', marginRight: 'auto'}}
      />
      <MoralisMessages flexGrow={1} isSend={isSend} setIsSend={setIsSend}/>
      <MoralisInput setIsSend={setIsSend}/>
    </Box>
  );
};

export default ChatRoom;
