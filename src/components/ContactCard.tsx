import Button from "react-bootstrap/esm/Button";
import Contact from "../features/contact/contactSlice";
import ContactsAll from "../features/contact/contactSlice";
import { useHistory } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";

import { removeContact } from "../features/contact/contactSlice";
import { RootState } from "../app/store";
export const ContactCard = ({ contact }: any) => {
  const history = useHistory();

  const dispatch = useAppDispatch();

  const handleEdit = () => {
    history.push(`/contactForm/${contact.id}`);
  };

 
  const handleDelete = () => {
    dispatch(removeContact(contact.id));
   
  };
  
  return (
    <tr key={contact.id}>
      <td>{contact.firstName}</td>
      <td>{contact.lastName}</td>
      <td>{contact.email}</td>
      <td>{contact.country}</td>
      <td>
        <Button variant="outline-warning" onClick={handleEdit}>
          Edit
        </Button>{" "}
        <Button variant="outline-danger" onClick={handleDelete}>
          Delete
        </Button>
      </td>
    </tr>
  );
};
