import Link from "next/link";
import { Box, Heading, UnorderedList, ListItem } from "@chakra-ui/react";
import { useState, useCallback } from "react";
import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";

const SideNav = () => {
  return (
    <Box
      as="nav"
      mr="50px"
      pl="2rem"
      width="300px"
      minHeight="100vh"
      background="lightgrey"
    >
      <Heading as="h2" size="lg">
        {" "}
        Contacts{" "}
      </Heading>

      <UnorderedList>
        <ListItem>
          <Link href="/">All Contacts</Link>
        </ListItem>
        <ListItem>
          <Link href="/favorites">Favorites</Link>
        </ListItem>
        <ListItem>
          <Link href="/recents">Recents</Link>
        </ListItem>
      </UnorderedList>

      <Heading as="h2" size="lg">
        {" "}
        Groups{" "}
      </Heading>

      <UnorderedList>
        <ListItem>
          <Link href="/family">Family</Link>
        </ListItem>
        <ListItem>
          <Link href="/coworkers">Co-Workers</Link>
        </ListItem>
        <ListItem>
          <Link href="/friends">Friends</Link>
        </ListItem>
        <ListItem>
          <Link href="/other">Other Groups</Link>
        </ListItem>
        <ListItem>
          <Link href="/none">No Group</Link>
        </ListItem>
      </UnorderedList>
    </Box>
  );
};

export default SideNav;
