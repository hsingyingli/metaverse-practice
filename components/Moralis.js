import {MoralisProvider} from 'react-moralis';

const Moralis = ({children}) => {
  return (
    <MoralisProvider
      appId={process.env.NEXT_PUBLIC_APP_ID}
      serverUrl={process.env.NEXT_PUBLIC_SERVER_URL}
    >
      {children}
    </MoralisProvider>
  );
};

export default Moralis;
