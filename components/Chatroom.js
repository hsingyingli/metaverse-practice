import {useRef, useEffect} from 'react';
import {chakra, Box, useColorModeValue} from '@chakra-ui/react';
import MoralisInput from './MoralisInput';
import MoralisMessages from './MoralisMessages';
import {ByMoralis} from 'react-moralis';
import {useState} from 'react';
const ChakraMoralis = chakra(ByMoralis);

const ChatRoom = () => {
  const [isSend, setIsSend] = useState(false);

  return (
    <Box
      mt={20}
      h="calc(100vh - 100px)"
      w="100%"
      minW="350px"
      display="flex"
      flexDirection="column"
      p={{base: 1, md: 5}}
      rounded="lg"
      bgColor={useColorModeValue('#FFFFF5', "#1F2428")}
      alignItems="center"
      justifyContent="center"
      boxShadow={`0 0 5px 1px ${useColorModeValue('gray', 'white')}`}
    >
      <ChakraMoralis
        variant="dark"
        style={{
          width: '150px',
          height: '100px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      />
      <MoralisMessages flexGrow={1} isSend={isSend} setIsSend={setIsSend} />
      <MoralisInput setIsSend={setIsSend} />
    </Box>
  );
};

export default ChatRoom;
