/* this page is responsible to handle customizations
 related to the structure of the HTML document.
 -> rendered on the server side which makes it useful 
 for injecting metadata or critical styles for performance */

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
