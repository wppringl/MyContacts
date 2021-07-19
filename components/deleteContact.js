import Link from "next/link";
import { Box, Heading, Alert, Button } from "@chakra-ui/react";
import axios from "axios";
import styles from "../styles/Home.module.css";

const deleteContact = (contact) => {
  return (
    <Box>
      <Alert mb={5}>Are you sure you want to delete this contact?</Alert>
      {contact._id}
    </Box>
  );
};

export default deleteContact;
