import { GlobalStyles } from "../design/GlobalStyles";
import React from "react";
import styled from "styled-components";
import Head from "next/head";
import { Navbar } from "../design/navigation/Navbar";
import { breakpoints } from "../design/helpers/breakpoints";
import { Fragment } from "react";
import { Background } from "../design/Background";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: ${breakpoints.md};
  flex-direction: column;
  align-items: center;
`;

const Index: React.FunctionComponent = () => {
  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="clgeo.io software engineer" />
        <title>clgeo.io</title>
      </Head>
      <GlobalStyles />
      <Background imageSrc={"/static/images/bg.jpg"} />
      <Wrapper>
        <Navbar title="clgeo.io" />
        coming soon...
      </Wrapper>
    </Fragment>
  );
};

export default Index;
