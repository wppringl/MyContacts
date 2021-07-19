import Link from "next/link";
import {
  Box,
  Heading,
  FormControl,
  Input,
  RadioGroup,
  Radio,
  HStack,
  FormHelperText,
  FormLabel,
  Button,
  Select,
} from "@chakra-ui/react";
import axios from "axios";
import styles from "../styles/Home.module.css";
import { useState, useCallback, useEffect } from "react";

const addContact = ({ children }) => {
  const newContact = {
    firstName: "New Contact",
    lastName: "From Service",
    email: "email",
    phone: "phone",
    job: "job",
    pic: "data:image/jpeg;base64,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",
    favorite: false,
    group: "No Group",
    addDate: "2021-07-19T00:13:24Z",
  };

  const addAContact = useCallback(async () => {
    try {
      const response = await axios.post("/api/contacts");
      setContactList(response.data);
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <Box>
      <FormControl as="fieldset">
        <FormLabel as="legend">Add New Contact</FormLabel>
        <FormControl id="firstName" isRequired>
          <FormLabel> First Name </FormLabel>
          <Input variant="outline" placeholder="Frist Name" isRequired />
        </FormControl>
        <FormControl id="lastName" isRequired>
          <FormLabel> Last Name </FormLabel>
          <Input variant="outline" placeholder="Last Name" isRequired />
        </FormControl>
        <FormControl id="email">
          <FormLabel> email address </FormLabel>
          <Input variant="outline" placeholder="email address" isRequired />
        </FormControl>
        <FormControl id="phoneNumber" isRequired>
          <FormLabel> Phone Number </FormLabel>
          <Input variant="outline" placeholder="###-###-####" isRequired />
        </FormControl>
        <FormControl id="job">
          <FormLabel> Job </FormLabel>
          <Input variant="outline" placeholder="Job" isRequired />
        </FormControl>
        <FormControl id="picLink">
          <FormLabel> Picture Link </FormLabel>
          <Input
            variant="outline"
            placeholder="Copy Link to a Picture Here"
            isRequired
          />
        </FormControl>
        <FormControl id="group" isRequired>
          <FormLabel>Contact Group</FormLabel>
          <Select placeholder="Select a contact group">
            <option>Family</option>
            <option>Co-Workers</option>
            <option>Friends</option>
            <option>Other Groups</option>
            <option>No Group</option>
          </Select>
        </FormControl>
        <FormLabel as="legend">Add this contact to Favorites?</FormLabel>
        <RadioGroup defaultValue="No">
          <HStack spacing="24px">
            <Radio value="Yes">Yes</Radio>
            <Radio value="No">No</Radio>
          </HStack>
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default addContact;
