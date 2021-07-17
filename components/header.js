import Link from "next/link";
import { Box, Heading } from "@chakra-ui/react";
import { useState, useCallback } from "react";
//import Head from "next/head";
//import Image from "next/image";
import axios from "axios";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";

const Header = () => {
  return (
    <Box pl="4rem" background="grey" padding="1rem" textAlign="center">
      <Heading as="h1" size="2xl">
        Welcome To My Contact Organizer
      </Heading>
    </Box>
  );
};

export default Header;
