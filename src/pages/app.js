import '../styles/globals.css';
import Layout from '../components/Layout';

// Every page automatically gets Navigation + Footer
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />  {/* Page content goes here */}
    </Layout>
  );
}
export default MyApp;
      