import Link from "next/link";
import { Box, Heading, Alert, Button } from "@chakra-ui/react";
import axios from "axios";
import { useState, useCallback, useEffect } from "react";
import styles from "../styles/Home.module.css";

const DeleteContact = ({ children, singleContact }) => {
  const deleteContact = useCallback(async (contactID) => {
    try {
      console.log(singleContact._id);
      await axios.delete(`/api/contacts/${singleContact._id}`);
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <Box>
      <Alert mb={5}>Are you sure you want to delete this contact?</Alert>

      <Button
        onClick={() => {
          deleteContact(singleContact);
        }}
      >
        Delete
      </Button>
    </Box>
  );
};

export default DeleteContact;
