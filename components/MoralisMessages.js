import {useState, useRef, useEffect} from 'react';
import {Box, Tag, Center, useToast} from '@chakra-ui/react';
import {useMoralisQuery} from 'react-moralis';
import Message from './Message';

const MAX_DAY = 31;

const MoralisMessages = ({isSend, setIsSend, ...rest}) => {
  const [isComponentLoading, setIsComponentLoading] = useState(true);
  const [firstLoad, setFirstLoad] = useState(true)
  const toast = useToast();
  const updateRef = useRef(null);
  const {data, isLoading} = useMoralisQuery(
    'Message',
    (query) =>
      query
        .ascending('createdAt')
        .greaterThan(
          'createdAt',
          new Date(Date.now() - 1000 * 60 * 60 * 24 * MAX_DAY),
        ),

    [],
    {
      live: true,
    },
  );

  useEffect(() => {
    if (isSend) {
      updateRef.current?.scrollIntoView({behavior: 'smooth', inline: 'end'});
      setIsSend(false);
    } else if (!firstLoad){
      toast({
          title: 'New Message.',
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
    }
    
    setTimeout(()=> {
      setFirstLoad(false)
    }, 5000)

  }, [data]);

  useEffect(() => {
    setIsComponentLoading(false);
  }, []);

  useEffect(() => {
    if (!isComponentLoading && !isLoading) {
      updateRef.current.scrollIntoView({behavior: 'smooth', inline: 'end'});
      setIsComponentLoading(true);
    }
  }, [isComponentLoading, isLoading]);

  return (
    <Box
      w="100%"
      p={{base: 0, md: 3}}
      overflowY="scroll"
      css={{
        '&::-webkit-scrollbar': {
          display: 'none'
        },
      }}
      {...rest}
    >
      {data.map((message) => (
        <Message key={message.id} message={message} />
      ))}
      <Center>
        <Tag ref={updateRef} mx="auto" colorScheme="teal" textAlign="center">
          You are up to date!!🎉
        </Tag>
      </Center>
    </Box>
  );
};

export default MoralisMessages;
