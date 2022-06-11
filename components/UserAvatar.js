import {
  Avatar,
  Box,
  Popover,
  PopoverTrigger,
  PopoverArrow,
  Button,
  Portal,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  IconButton,
  VStack,
  StackDivider,
  Heading,
  HStack,
  Editable,
  EditableInput,
  EditablePreview,
  Tooltip,
  CircularProgress,
  useColorModeValue
} from '@chakra-ui/react';
import {useMemo, useState, useEffect} from 'react';
import {useMoralis} from 'react-moralis';

const UserAvatar = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState('');
  const {user, setUserData, isUserUpdating, logout} = useMoralis();
  const username = useMemo(() => user?.get('username'), [user]);
  const textColor = useColorModeValue('teal.600', 'teal.200')
  const handleOnSaveUsername = (e) => {
    e.preventDefault()
    if (name.length > 0) {
      setUserData({
        username: name,
      });
      setName('');
      window.location.reload()

    }
  };

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <CircularProgress isIndeterminate color="teal.100" />;
  }

  return (
    user && (
      <Popover>
        <PopoverTrigger>
          <IconButton
            icon={
              <Avatar
                src={`https://avatars.dicebear.com/api/pixel-art/${user.get('ethAddress')}.svg`}
              />
            }
          />
        </PopoverTrigger>
        <Portal>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader pt={4} fontWeight="bold" color={textColor}>
              User Info
            </PopoverHeader>
            <PopoverBody>
              <VStack
                divider={<StackDivider borderColor="gray.200" />}
                spacing={4}
                align="stretch"
              >
                <Box>
                  <Heading fontSize="md" pb={1} color={textColor}>
                    Username:
                  </Heading>
                  <Tooltip label="click to edit" placement="top">
                    <Editable defaultValue={username}>
                      <EditablePreview />
                      <EditableInput
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </Editable>
                  </Tooltip>
                </Box>
                <HStack>
                  <Button onClick={handleOnSaveUsername}>Save</Button>
                  <Button onClick={logout} colorScheme="teal" size="sm">
                    Logout
                  </Button>
                </HStack>
              </VStack>
            </PopoverBody>
          </PopoverContent>
        </Portal>
      </Popover>
    )
  );
};

export default UserAvatar;
