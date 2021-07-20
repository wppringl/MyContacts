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
} from "@chakra-ui/react";
import axios from "axios";
import styles from "../styles/Home.module.css";
import contactProfile from "./contactProfile";

const editContact = ({ onClose }) => {
  return (
    <Box>
      <FormControl as="fieldset">
        <FormLabel as="legend">Edit Contact</FormLabel>
        <Input variant="outline" placeholder="Frist Name" isRequired />
        <Input variant="outline" placeholder="Last Name" />
        <Input variant="outline" placeholder="eMail" />
        <Input variant="outline" placeholder="Phone Number" />
        <Input variant="outline" placeholder="Picture Address" />
        <Input variant="outline" placeholder="Contact Group" />
        <FormLabel as="legend">Is this Contact a Favorite?</FormLabel>
        <RadioGroup defaultValue="No">
          <HStack spacing="24px">
            <Radio value="Yes">Yes</Radio>
            <Radio value="No">No</Radio>
          </HStack>
        </RadioGroup>

        <Button type="submit" colorScheme="teal" mr={3} onClick={onClose}>
          Submit Change
        </Button>
        <Button colorScheme="blue" mr={3} onClick={onClose}>
          Cancel
        </Button>
      </FormControl>
    </Box>
  );
};

export default editContact;
