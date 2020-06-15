import React, { useState } from "react";
import { Box, Heading, Flex, Text, Link as LinkBox } from "@chakra-ui/core";
import Link from "next/link";

const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);

interface NavbarProps {
  title: string;
}

const Navbar: React.FunctionComponent<NavbarProps> = ({ title }) => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Flex
      as="nav"
      justify="space-between"
      direction={{ base: "column", md: "row" }}
      wrap="wrap"
      padding="1.5rem"
      bg="gray.900"
      color="white"
    >
      <Flex flexGrow={1} justifyContent="space-between">
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg">
            <Link href="/">
              <LinkBox>{title}</LinkBox>
            </Link>
          </Heading>
        </Flex>

        <Box display={{ base: "flex", md: "none" }} onClick={handleToggle}>
          <svg
            fill="white"
            width="12px"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </Box>
      </Flex>
      <Flex>
        <Box
          display={{ base: show ? "block" : "none", md: "flex" }}
          width={{ sm: "full", md: "auto" }}
          alignItems="center"
          justifyContent="flex-end"
          flexGrow={1}
        >
          <MenuItems>
            <LinkBox href="https://github.com/clgeoio">Github</LinkBox>
          </MenuItems>
        </Box>
      </Flex>
    </Flex>
  );
};

export { Navbar };
