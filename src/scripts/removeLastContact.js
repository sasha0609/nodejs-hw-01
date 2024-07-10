import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data);
    if (contacts.length > 0) {
      const updatedContacts = contacts.slice(0, -1);

      await fs.writeFile(
        PATH_DB,
        JSON.stringify(updatedContacts, null, 2),
        'utf8',
      );
    }
  } catch (error) {
    console.error('ERROR:', error);
  }
};

removeLastContact();
