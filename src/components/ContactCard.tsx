import Button from "react-bootstrap/esm/Button";
import Contact from "../features/contact/contactSlice";
import ContactsAll from "../features/contact/contactSlice";

export const ContactCard = ({ contact }: any) => {
const handleEdit = () =>{

}

const handleDelete = () =>{

}

  return (
    <tr key={contact.id}>
      <td>{contact.firstName}</td>
      <td>{contact.lastName}</td>
      <td>{contact.email}</td>
      <td>{contact.country}</td>
      <td>
        <Button variant="outline-warning" onClick={handleEdit}>Edit</Button>{" "}
        <Button variant="outline-danger" onClick={handleDelete}>Delete</Button>
      </td>
    </tr>
  );
};
