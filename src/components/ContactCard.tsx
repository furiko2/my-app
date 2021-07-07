import Button from "react-bootstrap/esm/Button";
import { Contact } from "../features/contact/contactSlice";

import { useHistory } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";

import { removeContact } from "../features/contact/contactSlice";

export const ContactCard = ({
  contact: { id, firstName, lastName, email, country },
}: {
  contact: Contact;
}): JSX.Element => {
  const history = useHistory();

  const dispatch = useAppDispatch();

  const handleEdit = () => {
    history.push(`/contactForm/${id}`);
  };
  const handleDelete = () => {
    dispatch(removeContact(id));
  };

  return (
    <tr key={id}>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{email}</td>
      <td>{country}</td>
      <td>
        <Button className="mr-2" variant="outline-warning" onClick={handleEdit}>
          Edit
        </Button>
        <Button variant="outline-danger" onClick={handleDelete}>
          Delete
        </Button>
      </td>
    </tr>
  );
};
