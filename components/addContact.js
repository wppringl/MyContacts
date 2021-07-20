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
import { useRouter } from "next/router";

const addContact = ({ children, onClose }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [job, setJob] = useState("");
  const [group, setGroup] = useState("");
  const [pic, setPic] = useState("");
  const [addDate, setAddDate] = useState("");
  const [favorite, setFavorite] = useState(false);
  const router = useRouter();

  const addNewContact = useCallback(async () => {
    const newContact = {
      firstName,
      lastName,
      email,
      phone,
      job,
      group,
      favorite,
      pic:
        pic ||
        "https://wwwen.uni.lu/var/storage/images/media/images/lcl_images/no_picture/1416637-1-fre-FR/no_picture.png",
    };
    console.log(newContact);
    try {
      await axios.post("/api/contacts", newContact);
      router.reload(window.location.pathname);
      onClose();
    } catch (e) {
      console.error(e);
    }
  }, [firstName, lastName, email, phone, job, group, favorite, pic]);

  const cancelNewContact = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setJob("");
    setPic("");
    setFavorite("No");
    setGroup("");
    onClose();
  };

  return (
    <Box>
      <FormControl as="fieldset">
        <FormLabel as="legend">Add New Contact</FormLabel>
        <FormControl id="firstName" isRequired>
          <FormLabel> First Name </FormLabel>
          <Input
            variant="outline"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            isRequired
          />
        </FormControl>
        <FormControl id="lastName" isRequired>
          <FormLabel> Last Name </FormLabel>
          <Input
            variant="outline"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            isRequired
          />
        </FormControl>
        <FormControl id="email">
          <FormLabel> email address </FormLabel>
          <Input
            variant="outline"
            placeholder="email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            isRequired
          />
        </FormControl>
        <FormControl id="phoneNumber" isRequired>
          <FormLabel> Phone Number </FormLabel>
          <Input
            variant="outline"
            placeholder="###-###-####"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            isRequired
          />
        </FormControl>
        <FormControl id="job">
          <FormLabel> Job </FormLabel>
          <Input
            variant="outline"
            placeholder="Job"
            value={job}
            onChange={(e) => setJob(e.target.value)}
            isRequired
          />
        </FormControl>
        <FormControl id="picLink">
          <FormLabel> Picture Link </FormLabel>
          <Input
            variant="outline"
            placeholder="Copy Link to a Picture Here"
            value={pic}
            onChange={(e) => setPic(e.target.value)}
          />
        </FormControl>
        <FormControl id="group" isRequired>
          <FormLabel>Contact Group</FormLabel>
          <Select
            placeholder="Select a contact group"
            value={group}
            onChange={(e) => setGroup(e.target.value)}
          >
            <option>Family</option>
            <option>Co-Workers</option>
            <option>Friends</option>
            <option>Other Groups</option>
            <option>No Group</option>
          </Select>
        </FormControl>
        <FormLabel as="legend">Add this contact to Favorites?</FormLabel>
        <RadioGroup
          value={favorite}
          onChange={(value) => {
            console.log(value);
            setFavorite(value === "true" ? true : false);
          }}
        >
          <HStack spacing="24px">
            <Radio value={true} colorScheme="green">
              Yes
            </Radio>
            <Radio value={false} colorScheme="green">
              No
            </Radio>
          </HStack>
        </RadioGroup>
      </FormControl>
      <Button mt={3} colorScheme="teal" type="submit" onClick={addNewContact}>
        Submit New Contact
      </Button>
      <Button colorScheme="blue" mt={3} onClick={cancelNewContact}>
        Cancel
      </Button>
    </Box>
  );
};

export default addContact;
