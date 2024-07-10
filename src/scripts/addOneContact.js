import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'node:fs/promises';

export const addOneContact = async () => {
  const newContact = createFakeContact();
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = data ? JSON.parse(data) : [];
    contacts.push(newContact);
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8');
  } catch (error) {
    console.error('error:', error);
  }
};

addOneContact();
