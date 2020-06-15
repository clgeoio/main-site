import React, { Fragment } from "react";
import Head from "next/head";
import { Navbar } from "../design/navigation/Navbar";
import { Box } from "@chakra-ui/core";

const Root: React.FunctionComponent = ({ children }) => {
  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="clgeo.io software engineer" />
        <title>clgeo.io</title>
      </Head>
      <Navbar title="clgeo.io" />
      <Box margin={5}>{children}</Box>
    </Fragment>
  );
};

export { Root };
