let id = 2;

export let contacts = [
  {
    firstName: 'William',
    lastName: 'Pringle',
    phone:'313-418-3735',
    email: 'Pringle.William85@gmail.com',
    id: '1',
  },
];

export const createContact = (contactInput) => {
  const createdContact = {...contactInput, id: `${id++}`};
  contacts.push(createdContact);
  return createdContact;
}

export const getContact = (id) => {
    return contacts.find((contact) => contact.id === id);
}

export const fullUpdate = (id, input) => {
    const index = contacts.findIndex(contact => contact.id === id);
    contacts[index] = {...input, id};
    return contacts[index];
}

export const partialUpdate = (id, input) => {
    const index = contacts.findIndex(contact => contact.id === id);
    contacts[index] = {...contacts[index],...input, id};
    return contacts[index];
}

export const deleteContact = (id) => {
    contacts = contacts.filter((contact) => contact.id !== id);
}