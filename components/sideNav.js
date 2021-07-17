import Link from "next/link";
import {
  Box,
  Heading,
  UnorderedList,
  ListItem,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useState, useCallback } from "react";
import Head from "next/head";
//import Image from "next/image";
import axios from "axios";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";
import AddContact from "../components/addContact";

const SideNav = () => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const [modalMode, setModalMode] = useState();

  const openAddContact = useCallback(() => {
    setModalMode("addContact");
    onOpen();
  }, []);

  return (
    <Box
      as="nav"
      mr="50px"
      pl="2rem"
      width="300px"
      minHeight="100vh"
      background="lightgrey"
    >
      <Heading as="h2" size="lg" marginTop="2rem">
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

      <Heading as="h2" size="lg" marginTop="2rem">
        {" "}
        Groups{" "}
      </Heading>

      <UnorderedList>
        <ListItem>
          <Link href="/family">Family</Link>
        </ListItem>
        <ListItem>
          <Link href="/coWorkers">Co-Workers</Link>
        </ListItem>
        <ListItem>
          <Link href="/friends">Friends</Link>
        </ListItem>
        <ListItem>
          <Link href="/otherGroups">Other Groups</Link>
        </ListItem>
        <ListItem>
          <Link href="/noGroup">No Group</Link>
        </ListItem>
      </UnorderedList>

      <Button
        size="lg"
        background="lightblue"
        marginTop="2rem"
        onClick={() => {
          openAddContact();
        }}
      >
        + Add Contact
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent padding="2rem">
          <ModalCloseButton />
          <ModalBody>{modalMode === "addContact" && <AddContact />}</ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default SideNav;
