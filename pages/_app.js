import { wrapper } from '../Redux/store';
import '../styles/globals.css'
import 'antd/dist/antd.css';
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} />
    </AnimatePresence>
  );
}

export default wrapper.withRedux(MyApp)
