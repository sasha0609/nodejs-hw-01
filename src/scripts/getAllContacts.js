import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const getAllContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const allContacts = data ? JSON.parse(data) : [];
    console.log('CONTACTS:', allContacts);
  } catch (error) {
    console.error('ERROR:', error);
  }
};

console.log(await getAllContacts());
