import {chakra, InputGroup, Input, InputRightElement, Button} from '@chakra-ui/react';
import {useMoralis, useMoralisQuery} from 'react-moralis';
import {useRef, useState} from 'react';

const MoralisInput = ({setIsSend}) => {
  const {user, Moralis} = useMoralis();
  const [message, setMessage] = useState('');
  const handleOnSendMessage = (e) => {
    e.preventDefault();
    if (!message) {
      return;
    }

    const Messages = Moralis.Object.extend('Message');
    const messages = new Messages();
    messages
      .save({
        message: message,
        username: user.getUsername(),
        ethAddress: user.get('ethAddress'),
      })
      .then(
        (message) => {},
        (error) => {},
      );
    setMessage('')
    setIsSend(true)
  };
  return (
    <chakra.form onSubmit={handleOnSendMessage} w='100%'>
      <InputGroup>
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="message"
        />
        <InputRightElement px={3} width="4.5rem">
          <Button
            variant="outline"
            size="sm"
            h="1.75rem"
            w=""
            onClick={handleOnSendMessage}
          >
            Send
          </Button>
        </InputRightElement>
      </InputGroup>
    </chakra.form>
  );
};

export default MoralisInput;
