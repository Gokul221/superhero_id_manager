/* this page is responsible for customizing the default app component
    which wraps all the pages in the app.
    -> you can inject props to all pages thru here
    -> global css and state management */

import "@/styles/globals.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import Layout from "@/Components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout><Component {...pageProps} /></Layout>
  );
}
