import { Contact, ContactsAll } from "../features/contact/contactSlice";
import { ContactCard } from "./ContactCard";

export const ContactList = ({
  contacts,
}: {
  contacts: ContactsAll["contacts"];
}): JSX.Element => {
  const renderContactList = () => {
    return (
      <>
        {contacts.map((contact: Contact) => {
          return <ContactCard key={contact.id} contact={contact} />;
        })}
      </>
    );
  };
  return renderContactList();
};
