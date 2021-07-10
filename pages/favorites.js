import { useState, useCallback, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";

export default function Home() {
  const [contactList, setContactList] = useState([]);

  const getContacts = useCallback(async () => {
    try {
      const response = await axios.get("/api/contacts");
      setContactList(
        response.data.filter((contact) => contact.firstName === "Jason")
      );
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <Layout>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>Welcome To My Contact Organizer</h1>

          <p>
            <a>First Name </a>
            <a> </a>
            <a>Last Name</a>
            <a> </a>
            <a>email Address</a>
            <a> </a>
            <a>Phone Number</a>
            <a> </a>
            <a>Job</a>
          </p>

          {contactList.map((contact) => (
            <p>
              <a>{contact.firstName} </a>
              <a> </a>
              <a>{contact.lastName}</a>
              <a> </a>
              <a>{contact.email}</a>
              <a> </a>
              <a>{contact.phone}</a>
              <a> </a>
              <a>{contact.job}</a>
            </p>
          ))}
        </main>
      </div>
    </Layout>
  );
}
