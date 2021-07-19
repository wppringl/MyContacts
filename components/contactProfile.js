import Link from "next/link";
import { Box, Heading, Image } from "@chakra-ui/react";
//import { StarIcon } from "@chakra-ui/icons";
import axios from "axios";
import styles from "../styles/Home.module.css";

const contactProfile = ({ children, singleContact }) => {
  return (
    <Box>
      <Image
        className="contactImage"
        height="200px"
        width="200px"
        src={singleContact.pic}
      />
      <a>Full Name: </a>
      <a>
        {singleContact.firstName} {singleContact.lastName}
      </a>
      <br />
      <a>Phone Number: </a>
      {singleContact.phone}
      <br />
      <a>Job: </a>
      {singleContact.job}
      <br />
      <a>eMail: </a>
      {singleContact.email}
      <br />
      Group: {singleContact.group}
      <br />
      <a>Contact Create Date: </a>
      {singleContact.addDate}
      <br />
      <a>Contact Edit Date: </a>
      {singleContact._ts}
      <br />
      {singleContact.favorite === true && <a>Favorite contact</a>}
    </Box>
  );
};

export default contactProfile;
