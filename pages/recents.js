import { useState, useCallback, useEffect } from "react";
import Head from "next/head";
import { Image } from "@chakra-ui/react";
import axios from "axios";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";

export default function Recents() {
  const [contactList, setContactList] = useState([]);

  const getContacts = useCallback(async () => {
    try {
      const response = await axios.get("/api/contacts");
      //const currentDate = getFullYear();
      //console.log(currentDate);
      setContactList(response.data.filter((contact) => contact.addDate));
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    getContacts();
  }, []);

  return <Layout contactList={contactList} />;
}
