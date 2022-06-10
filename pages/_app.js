import Chakra from '../components/Chakra';
import Moralis from '../components/Moralis';
function MyApp({Component, pageProps}) {
  return (
    <Moralis>
      <Chakra>
        <Component {...pageProps} />
      </Chakra>
    </Moralis>
  );
}

export default MyApp;
