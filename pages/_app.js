import Layout from '../components/Layout';

import '../styles/main.css';

function MyApp({ Component, pageProps }) {
  // Check to see if there is a specific layout we should use, if not use the default one
  const getLayout =
    Component.overrideLayout || ((page) => <Layout>{page}</Layout>);

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
