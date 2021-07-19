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

const editContact = () => {
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
        <Button mt={4} colorScheme="teal" type="submit">
          Submit
        </Button>
      </FormControl>
    </Box>
  );
};

export default editContact;
