import Link from "next/link";
import { Box } from "@chakra-ui/react";
import { useState, useCallback } from "react";
import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";

const Header = () => {
  const [contactList, setContactList] = useState([]);

  const getContacts = useCallback(async () => {
    try {
      const response = await axios.get("/api/contacts");
      setContactList(response.data);
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <Box style={{ background: "Blue" }}>
      <h1>Welcome To My Contact Organizer Header </h1>

      <button onClick={getContacts}>All Contacts</button>
    </Box>
  );
};

export default Header;
