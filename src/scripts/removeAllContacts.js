import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeAllContacts = async () => {
  const data = '[]';
  try {
    await fs.writeFile(PATH_DB, data);
    console.log(data);
  } catch (error) {
    console.error('ERROR:', error);
  }
};

removeAllContacts();
