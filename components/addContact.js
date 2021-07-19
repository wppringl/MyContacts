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

const addContact = () => {
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
