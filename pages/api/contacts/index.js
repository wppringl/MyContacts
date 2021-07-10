import axios from "axios";
import { contacts, createContact } from "../../../services/contacts-service.js";

// The Key is fnAEL4CVHlACBmfKmrT3IlnUW-At5o39RFcgk7RW
// const client = new faunadb.Client({
//   secret: "fnAEL4CVHlACBmfKmrT3IlnUW-At5o39RFcgk7RW"
// });

export default async (req, res) => {
  if (req.method === "GET") {
    const response = await axios.post(
      "https://graphql.fauna.com/graphql",
      {
        query: `
    query {
      allContacts {
        data {
          _id
          firstName
          lastName
          email
          phone
          job
          pic
          favorite
          group
          addDate
          _ts
          }
      }
    }
    `,
      },
      {
        headers: {
          Authorization: "Bearer fnAEL4CVHlACBmfKmrT3IlnUW-At5o39RFcgk7RW",
        },
      }
    );

    if (response.data.errors) {
      res.status(404).json(response.data.errors);
      return;
    }

    res.status(200).json(response.data.data.allContacts.data);
  }

  if (req.method === "POST") {
    const response = await axios.post(
      "https://graphql.fauna.com/graphql",
      {
        query: `
      mutation createContact($data: ContactInput!) {
        createContact (data: $data) {
          _id
          firstName
          lastName
          email
          phone
          job
          pic
          favorite
          group
          addDate
          _ts
        }
      }
      `,
        variables: {
          data: { ...req.body, addDate: new Date() },
        },
      },
      {
        headers: {
          Authorization: "Bearer fnAEL4CVHlACBmfKmrT3IlnUW-At5o39RFcgk7RW",
        },
      }
    );

    if (response.data.errors) {
      res.status(404).json(response.data.errors);
      return;
    }

    res.status(201).json(response.data.data.createContact);
  }
};
