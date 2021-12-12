import { wrapper } from '../Redux/store';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  );
}

export default wrapper.withRedux(MyApp)
