import { ContactsAll } from "../features/contact/contactSlice";
import { ContactCard } from "./ContactCard";

export const ContactList = ({ contacts }: ContactsAll) => (
  <>
    {contacts.map((contact) => (
      <ContactCard {...{ contact, key: contact.id }} />
    ))}
  </>
);
