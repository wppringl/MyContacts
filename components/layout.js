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

const Layout = ({ children, contactList, removeContact }) => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const [singleContact, setSingleContact] = useState({});
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
            <Flex justifyContent="space-between">
              <a>Picture</a>
              <a> </a>
              <a>First Name </a>
              <a> </a>
              <a>Last Name</a>
              <a> </a>
              <a>email Address</a>
              <a> </a>
              <a>Phone Number</a>
              <a> </a>
              <a>Favorite</a>
            </Flex>
            <div>
              {contactList.map((contact) => (
                <Flex key={contact._id} justifyContent="space-between">
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
                </Flex>
              ))}
            </div>
            {children}
            <Modal isOpen={isOpen} onClose={onClose} isCentered>
              <ModalOverlay />
              <ModalContent padding="2rem">
                <ModalCloseButton />
                <ModalBody>
                  {modalMode === "contactProfile" && (
                    <ContactProfile
                      singleContact={singleContact}
                      onClose={onClose}
                    />
                  )}
                  {modalMode === "edit" && (
                    <EditContact
                      singleContact={singleContact}
                      onClose={onClose}
                    />
                  )}
                  {modalMode === "delete" && (
                    <DeleteContact
                      singleContact={singleContact}
                      onClose={onClose}
                      removeContact={removeContact}
                    />
                  )}
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
