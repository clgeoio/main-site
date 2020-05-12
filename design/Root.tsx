import { GlobalStyles } from "../design/GlobalStyles";
import React from "react";
import styled from "styled-components";
import Head from "next/head";
import { Navbar } from "../design/navigation/Navbar";
import { breakpoints } from "../design/helpers/breakpoints";
import { Fragment } from "react";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: ${breakpoints.md};
  flex-direction: column;
  align-items: center;
`;

const ChildWrapper = styled.div`
  margin-top: 20px;
  width: 90%;
  background-color: #eee;
  opacity: 0.9;
  padding: 10px;
  border-radius: 4px;
`;

const Root: React.FunctionComponent = ({ children }) => {
  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="clgeo.io software engineer" />
        <title>clgeo.io</title>
      </Head>
      <GlobalStyles />
      <Wrapper>
        <Navbar title="clgeo.io" />
        <ChildWrapper>{children}</ChildWrapper>
      </Wrapper>
    </Fragment>
  );
};

export { Root };
