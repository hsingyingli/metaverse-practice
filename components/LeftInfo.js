import {StackDivider, Box, Avatar, Text, VStack} from '@chakra-ui/react';
import {useMoralis} from 'react-moralis';

const LeftInfo = () => {
  const {user} = useMoralis();
  return (
    <VStack spacing="24px" display={{base: 'none', md: 'block'}}>
      <Box
        display="flex"
        flexDirection="column"
        w={150}
        h={150}
        rounded="lg"
        bgGradient="linear(to-t, gray.700, gray.800)"
        alignItems="center"
        justifyContent="center"
        boxShadow="0 0 5px 1px gray"
        overflow="hidden"
      >
        <Avatar
          src={`https://avatars.dicebear.com/api/pixel-art/${user?.get(
            'username',
          )}.svg`}
          m={2}
        />
        <Text>{user?.get('username')}</Text>
      </Box>
    </VStack>
  );
};

export default LeftInfo;
