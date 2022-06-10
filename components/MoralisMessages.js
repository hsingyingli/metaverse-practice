import {useState, useRef, useEffect} from 'react'
import {Box, Tag, Center} from '@chakra-ui/react';
import { useMoralisQuery} from 'react-moralis';
import Message from './Message';

const MAX_DAY = 31

const MoralisMessages = ({isSend, setIsSend, ...rest}) => {
  const [isComponentLoading, setIsComponentLoading] = useState(true)
  const updateRef = useRef(null); 
  const {data, isLoading, error} = useMoralisQuery(
    'Message',
    (query) =>
      query
        .ascending('createdAt').greaterThan('createdAt', new Date(Date.now() - 1000 * 60 * 60 * 24 * MAX_DAY)),
        
    [],
    {
      live: true,
    },
  );

  useEffect(()=> {
    if (isSend) {
      updateRef.current?.scrollIntoView({ behavior: 'smooth', inline: 'end'})
      setIsSend(false)
    }
  }, [data])

  useEffect(() => {
    setIsComponentLoading(false)
  }, [])

  useEffect(()=> {
    if(!isComponentLoading && !isLoading) {
      updateRef.current.scrollIntoView({ behavior: 'smooth', inline: 'end'})
      setIsComponentLoading(true)
    }
  }, [isComponentLoading, isLoading])


  return (
    <Box w="100%" p={{base: 0, md: 3}} overflowY="scroll" {...rest}>
      {data.map((message) => (
        <Message key={message.id} message={message} />
      ))}
      <Center>
        <Tag ref={updateRef} mx="auto" colorScheme="teal" textAlign="center">
          You are up to date!!
        </Tag>
      </Center>
    </Box>
  );
};

export default MoralisMessages;
