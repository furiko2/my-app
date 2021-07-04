import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Dropdown from "react-bootstrap/esm/Dropdown";
import Form from "react-bootstrap/esm/Form";
import FormControl from "react-bootstrap/esm/FormControl";

import "../App.css";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { RootState } from "../app/store";
import {
  Contact,
  createContact,
  removeContact,
  updateContact,
} from "../features/contact/contactSlice";

import { useHistory, useParams } from "react-router-dom";

import { nanoid } from "nanoid";
const countryList = require("country-list");

const allCountries = countryList.getNames();

interface id {
  [key: string]: string;
}
export const ContactForm = (props: any) => {
  const history = useHistory();
  let idToMatch: id = useParams();
  const getId = () => nanoid();

  const newContact: Contact = {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    country: "Country",
  };

  const isMatchingId = (contact: any) => {
    return contact.id === idToMatch["contactID"];
  };

  const existingContact: Contact | undefined = useAppSelector(
    (state: RootState) => state.persistedReducer.contacts.find(isMatchingId)
  );

  const initialState =
    existingContact !== undefined ? existingContact : newContact;
  console.log(initialState);
  const [contact, setContact] = useState(initialState);

  const dispatch = useAppDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setContact({ ...contact, [name]: value });
  };

  const handleCreate = () => {
    const newId = getId();

    dispatch(
      createContact(
        newId,
        contact.firstName,
        contact.lastName,
        contact.email,
        contact.country
      )
    );
    setContact(initialState);
  };

  const handleEdit = () => {
    dispatch(updateContact(contact));
  };

  const handleDelete = () => {
    dispatch(removeContact(existingContact!.id));
    history.push('/');
  };

  const getValidity = () => {
    return contact.firstName !== "john1";
  };
  return (
    <div>
      <Form>
        <Form.Row className="align-items-center">
          <Col xs="auto">
            <Form.Label htmlFor="inlineFormInput" srOnly>
              First Name
            </Form.Label>
            <Form.Control
              name="firstName"
              className="mb-2"
              id="inlineFormInput"
              placeholder="First Name"
              isInvalid={getValidity()}
              value={contact.firstName}
              onChange={(e) =>
                setContact({ ...contact, firstName: e.target.value })
              }
            />
          </Col>
          <Col xs="auto">
            <Form.Label htmlFor="inlineFormInputGroup" srOnly>
              Last Name
            </Form.Label>
            <Form.Control
              name="lastName"
              className="mb-2"
              id="inlineFormInput"
              placeholder="Last Name"
              value={contact.lastName}
              onChange={(e) =>
                setContact({ ...contact, lastName: e.target.value })
              }
            />
          </Col>
        </Form.Row>
        <Form.Row>
          <Col xs="auto">
            <Form.Label htmlFor="inlineFormInputGroup" srOnly>
              Email
            </Form.Label>
            <FormControl
              name="email"
              id="inlineFormInput"
              placeholder="Email"
              value={contact.email}
              onChange={handleChange}
            />
          </Col>
          <Col xs="auto">
            <Dropdown>
              <Dropdown.Toggle variant="info" id="dropdown-basic">
                {contact.country}
              </Dropdown.Toggle>

              <Dropdown.Menu className="ScrollableMenu">
                {allCountries.map((country: any) => {
                  return (
                    <Dropdown.Item
                      onClick={() => {
                        setContact((prevContact) => ({
                          ...prevContact,
                          country: country,
                        }));
                      }}
                    >
                      {country}
                    </Dropdown.Item>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Form.Row>
        <Form.Row>
          <Col xs="auto">
            {!existingContact && (
              <Button type="button" className="mb-2" onClick={handleCreate}>
                Add Contact
              </Button>
            )}
            {existingContact && (
              <>
                <Button type="button" variant="outline-warning" className="mb-2" onClick={handleEdit}>
                  Edit Ccontact
                </Button>{' '}
                <Button type="button" variant="outline-danger" className="mb-2" onClick={handleDelete}>
                  Delete Contact
                </Button>
              </>
            )}
          </Col>
        </Form.Row>
      </Form>
    </div>
  );
};
