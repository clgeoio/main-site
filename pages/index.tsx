import { GlobalStyles } from "../design/GlobalStyles";
import styled from "styled-components";
import Head from "next/head";
import { Navbar } from "../design/navigation/Navbar";
import { breakpoints } from "../design/helpers/breakpoints";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  max-width: ${breakpoints.md};
`;

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
      <Wrapper>coming soon...</Wrapper>
    </div>
  );
};

export default Index;
