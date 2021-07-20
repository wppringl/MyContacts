import { useState, useCallback, useEffect } from "react";
//import Head from "next/head";
import axios from "axios";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";
import {
  Image,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

export default function Home() {
  const [contactList, setContactList] = useState([]);
  const removeContact = (id) => {
    const index = contactList.findIndex((contact) => contact._id === id);
    setContactList([
      ...contactList.slice(0, index),
      ...contactList.slice(index + 1),
    ]);
  };

  const getContacts = useCallback(async () => {
    try {
      const response = await axios.get("/api/contacts");
      setContactList(response.data);
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    getContacts();
  }, []);

  return <Layout contactList={contactList} removeContact={removeContact} />;
}
