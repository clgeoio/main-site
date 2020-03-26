import { GlobalStyles } from "../design/GlobalStyles";

import Head from "next/head";
import { Navbar } from "../design/navigation/Navbar";
const Index: React.FunctionComponent = () => {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="clgeo.io software engineer" />
        <title>clgeo.io</title>
      </Head>
      <GlobalStyles />
      <Navbar title="clgeo.io" />
      <h1>clgeio</h1>
    </div>
  );
};

export default Index;
