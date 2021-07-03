import { FC } from "react";
import Table from "react-bootstrap/esm/Table";
import { ContactInterface as Props } from "../App";

export const ContactCard = ({ contact }: any) => {
  return (
    <tr key={contact.id}>
      <td>{contact.firstName}</td>
      <td>{contact.lastName}</td>
      <td>{contact.email}</td>
      <td>{contact.country}</td>
    </tr>
  );
};
