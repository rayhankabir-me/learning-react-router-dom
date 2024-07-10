import { getContacts } from "../contacts";

export async function getContactLoader() {
  const contacts = await getContacts();
  return { contacts };
}
