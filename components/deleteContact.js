import Link from "next/link";
import { Box, Heading, Alert, Button } from "@chakra-ui/react";
import axios from "axios";
import { useState, useCallback, useEffect } from "react";
import styles from "../styles/Home.module.css";

const DeleteContact = ({ singleContact, onClose, removeContact }) => {
  const deleteContact = useCallback(async () => {
    try {
      await axios.delete(`/api/contacts/${singleContact._id}`);
      onClose();
      removeContact(singleContact._id);
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <Box>
      <Alert mb={5}>Are you sure you want to delete this contact?</Alert>
      <Button
        type="submit"
        colorScheme="red"
        mr={3}
        onClick={() => {
          deleteContact();
        }}
      >
        Delete Contact
      </Button>
      <Button colorScheme="blue" mr={3} onClick={onClose}>
        Cancel
      </Button>
    </Box>
  );
};

export default DeleteContact;
