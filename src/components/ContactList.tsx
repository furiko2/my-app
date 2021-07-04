import Contact from "../features/contact/contactSlice";
import ContactsAll from "../features/contact/contactSlice";
import { ContactCard } from "./ContactCard";

export const ContactList = ({ contacts }: any) => {
  const renderContactList = () => {
    return contacts.map((contact: any) => {
      return <ContactCard key={contact.id} contact={contact} />;
    });
  };
  return renderContactList();
};
