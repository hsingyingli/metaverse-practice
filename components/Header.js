import {
  Box,
  Avatar,
  Spacer,
  Container,
  Flex,
  IconButton,
  useColorModeValue,
  useColorMode
} from '@chakra-ui/react';
import {MoonIcon, SunIcon} from '@chakra-ui/icons';

import UserAvatar from './UserAvatar';

const Header = () => {

  const {toggleColorMode} = useColorMode()
  return (
    <Box
      position="fixed"
      left={0}
      top={0}
      w="100vw"
      overflow="hidden"
      bgColor= {useColorModeValue("#FFFAF0", "#151516")}
      boxShadow="0 0 0.5px 0.5px gray"
      py={2}
      zIndex={5}
    >
      <Container maxW="container.lg">
        <Flex alignItems="center">
          <Spacer />
          <UserAvatar/>
          <IconButton
            mx={2}
            colorScheme={useColorModeValue('purple', 'orange')}
            icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
            onClick={toggleColorMode}
          />
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
