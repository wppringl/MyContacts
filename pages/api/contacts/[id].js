import {
  getContact,
  fullUpdate,
  partialUpdate,
  deleteContact,
} from "../../../services/contacts-service.js";
import axios from "axios";

export default async (req, res) => {
  if (req.method === "GET") {
    const response = await axios.post(
      "https://graphql.fauna.com/graphql",
      {
        query: `
        query {
            findContactByID(id: ${req.query.id}) {
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
      },
      {
        headers: {
          Authorization: "Bearer fnAEL4CVHlACBmfKmrT3IlnUW-At5o39RFcgk7RW",
        },
      }
    );

    if (!response.data.data.findContactByID) {
      res.status(404).json();
      return;
    }
    res.status(200).json(response.data.data.findContactByID);
  }

  if (req.method === "PUT") {
    const response = await axios.post(
      "https://graphql.fauna.com/graphql",
      {
        query: `
            mutation updateContact($id: ID!, $contactInput: ContactInput!) {
              updateContact (id: $id, data: $contactInput) {
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
          contactInput: req.body,
          id: req.query.id,
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

    res.status(200).json(response.data.data.updateContact);
  }

  if (req.method === "PATCH") {
    const response = await axios.post(
      "https://graphql.fauna.com/graphql",
      {
        query: `
        mutation partialUpdateContact($id: ID!, $contactInput: PartialUpdateContactInput!) {
            partialUpdateContact(id: $id, data: $contactInput) {
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
          contactInput: req.body,
          id: req.query.id,
        },
      },
      {
        headers: {
          Authorization: "Bearer fnAEL4CVHlACBmfKmrT3IlnUW-At5o39RFcgk7RW",
          "X-Schema-Preview": "partial-update-mutation",
        },
      }
    );

    if (response.data.errors) {
      res.status(404).json(response.data.errors);
      return;
    }

    res.status(200).json(response.data.data.partialUpdateContact);
  }

  if (req.method === "DELETE") {
    const response = await axios.post(
      "https://graphql.fauna.com/graphql",
      {
        query: `
        mutation deleteContact($id: ID!) {
            deleteContact(id: $id) {
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
          id: req.query.id,
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

    res.status(200).json(response.data.data.partialUpdateContact);
  }
};
