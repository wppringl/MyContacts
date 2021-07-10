import Link from "next/link";
import { Box } from "@chakra-ui/react";
import { useState, useCallback } from "react";
import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";

const SideNav = () => {
  const [contactList, setContactList] = useState([]);

  const getAllContacts = useCallback(async () => {
    try {
      const response = await axios.get("/api/contacts");
      setContactList(response.data);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const getFavoriteContacts = useCallback(async () => {
    try {
      const response = await axios.get("/api/contacts");
      setContactList(
        response.data.filter((contact) => contact.firstName === "Jason")
      );
    } catch (e) {
      console.error(e);
    }
  }, []);

  const getFavoriteContacts1 = useCallback(async () => {
    try {
      const response = await axios.get("/api/contacts");
      setContactList(response.data);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const getFavoriteContacts2 = useCallback(async () => {
    try {
      const response = await axios.get("/api/contacts");
      setContactList(response.data);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const getFavoriteContacts3 = useCallback(async () => {
    try {
      const response = await axios.get("/api/contacts");
      setContactList(response.data);
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <Box
      as="nav"
      mr="50px"
      style={{ width: "300px", minHeight: "100vh", background: "lightgrey" }}
    >
      <h1> Contacts </h1>

      <ul>
        <li>
          <Link href="/">All Contacts</Link>
        </li>
        <li>
          <Link href="/favorites">Favorites</Link>
        </li>
        <li>
          <Link href="/recents">Recents</Link>
        </li>
      </ul>

      <h1> Groups </h1>

      <ul>
        <li>
          <Link href="/family">Family</Link>
        </li>
        <li>
          <Link href="/coworkers">Co-Workers</Link>
        </li>
        <li>
          <Link href="/friends">Friends</Link>
        </li>
        <li>
          <Link href="/other">Other Groups</Link>
        </li>
        <li>
          <Link href="/none">No Group</Link>
        </li>
      </ul>
    </Box>
  );
};

export default SideNav;
