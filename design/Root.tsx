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
        <meta name="description" content="clg software engineer" />
        <title>clg</title>
      </Head>
      <Navbar title="clg" />
      <Box margin={5}>{children}</Box>
    </Fragment>
  );
};

export { Root };
