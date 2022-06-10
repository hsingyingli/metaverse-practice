import {useMoralis} from 'react-moralis';
import {
  Flex,
  Text,
  Avatar,
} from '@chakra-ui/react';

const Message = ({message}) => {
  const {user} = useMoralis();
  const owner = message.get('username');
  const isUserMessage = message.get('ethAddress') === user.get('ethAddress');
  return (
    <Flex
      m={{base: 1, md: 5}}
      justifyContent={isUserMessage ? 'right' : 'left'}
    >
      <Flex
        flexDir="column"
        alignItems={isUserMessage ? 'flex-end' : 'flex-start'}
      >
        <Flex
          flexDir={isUserMessage ? 'row' : 'row-reverse'}
          alignItems="center"
        >
          <Text
            bgColor="gray.200"
            p={1}
            fontWeight="semibold"
            rounded="md"
            color="blackAlpha.800"
          >
            {message.get('message')}
          </Text>
          <Avatar
            src={`https://avatars.dicebear.com/api/pixel-art/${owner}.svg`}
            mx={2}
            size="sm"
          />
        </Flex>
        <Text fontSize="sm">{owner}</Text>
      </Flex>
    </Flex>
  );
};

export default Message;
