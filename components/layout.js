import SideNav from "./sideNav";
import Header from "./header";
import ContactProfile from "./contactProfile";
import EditContact from "./editContact";
import DeleteContact from "./deleteContact";
import axios from "axios";
import styles from "../styles/Home.module.css";
import { useState, useCallback, useEffect } from "react";
import {
  Image,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  ModalCloseButton,
  useDisclosure,
  Button,
  Box,
} from "@chakra-ui/react";

const Layout = ({ children, contactList }) => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const [singleContact, setSingleContact] = useState([]);
  const [modalMode, setModalMode] = useState();

  const getSingleContact = useCallback((clickedContact, mode) => {
    setSingleContact(clickedContact);
    setModalMode(mode);
    onOpen();
  }, []);

  return (
    <Box>
      <Header />
      <Flex>
        <SideNav />
        <div>
          <main>
            <p>
              <a>First Name </a>
              <a> </a>
              <a>Last Name</a>
              <a> </a>
              <a>email Address</a>
              <a> </a>
              <a>Phone Number</a>
              <a> </a>
              <a>Favorite</a>
            </p>
            <div>
              {contactList.map((contact) => (
                <p key={contact._id}>
                  <Image
                    className="contactImage"
                    height="50px"
                    width="50px"
                    borderRadius="50%"
                    _hover={{ cursor: "pointer" }}
                    src={contact.pic}
                    onClick={() => {
                      getSingleContact(contact, "contactProfile");
                    }}
                  />
                  <a className="contactContent" color="white">
                    {contact.firstName}{" "}
                  </a>
                  <a className="contactContent">{contact.lastName}</a>
                  <a className="contactContent">{contact.email}</a>
                  <a className="contactContent">{contact.phone}</a>
                  <a className="contactContent">{contact.addDate}</a>
                  <Button
                    onClick={() => {
                      getSingleContact(contact, "edit");
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => {
                      getSingleContact(contact, "delete");
                    }}
                  >
                    Delete
                  </Button>
                </p>
              ))}
            </div>
            {children}
            <Modal isOpen={isOpen} onClose={onClose} isCentered>
              <ModalOverlay />
              <ModalContent padding="2rem">
                <ModalCloseButton />
                <ModalBody>
                  {modalMode === "contactProfile" && <ContactProfile />}
                  {modalMode === "edit" && <EditContact />}
                  {modalMode === "delete" && <DeleteContact />}
                  <Button
                    type="submit"
                    colorScheme="teal"
                    mr={3}
                    onClick={onClose}
                  >
                    Submit / Exit
                  </Button>
                  <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Cancel
                  </Button>
                </ModalBody>
              </ModalContent>
            </Modal>
          </main>
        </div>
      </Flex>
    </Box>
  );
};

export default Layout;

// Tasks remaining
// (1) Complete basic page design and contact and group pages
// (2) Add buttons and functionality for adding contacts in side nav
// (3) Add images and other data base information
// (4) Make images buttons to edit/delete profiles as pop up window (maybe)
// (5) Add edit/delete profile functionality to API calls
