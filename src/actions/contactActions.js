import { redirect } from "react-router-dom";
import { createContact, updateContact } from "../contacts";

export async function createContactAction() {
  const contact = await createContact();
  return { contact };
}

export async function EditContactAction({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  await updateContact(params.contactId, updates);
  return redirect(`/contacts/${params.contactId}`);
}
