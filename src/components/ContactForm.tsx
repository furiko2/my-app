import React, { ReactNode, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Dropdown from "react-bootstrap/esm/Dropdown";
import Form from "react-bootstrap/esm/Form";
import FormControl from "react-bootstrap/esm/FormControl";

import * as EmailValidator from "email-validator";
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
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
const countryList = require("country-list");

const allCountries = countryList.getNames().sort();

interface id {
  [key: string]: string;
}
export const ContactForm = () => {
  const history = useHistory();
  let idToMatch: id = useParams();
  const getId = () => nanoid();

  const newContact: Contact = {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    country: "",
  };

  const isMatchingId = (contact: Contact) => {
    return contact.id === idToMatch["contactID"];
  };

  const existingContact: Contact | undefined = useAppSelector(
    (state: RootState) => state.persistedReducer.contacts.find(isMatchingId)
  );

  const initialState =
    existingContact !== undefined ? existingContact : newContact;

  const [contact, setContact] = useState(initialState);

  const dispatch = useAppDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setContact({ ...contact, [name]: value });
  };

  const getAllCountriesList = (): ReactNode => {
    return allCountries.map((country: string) => {
      return (
        <Dropdown.Item
          key={country}
          onClick={() => {
            setContact((prevContact) => ({
              ...prevContact,
              country,
            }));
          }}
        >
          {country}
        </Dropdown.Item>
      );
    });
  };

  const handleCreate = (e: React.MouseEvent<HTMLInputElement>) => {
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
    history.push("/");
  };

  const handleDelete = () => {
    dispatch(removeContact(existingContact!.id));
    history.push("/");
  };

  const isNotEmpty = (stringToCheck: string) => {
    return stringToCheck !== "";
  };

  const isValidContactEmail = () => {
    return EmailValidator.validate(contact.email);
  };

  const isValidContact = (): boolean => {
    return (
      isValidContactEmail() &&
      isNotEmpty(contact.lastName) &&
      isNotEmpty(contact.firstName) &&
      isNotEmpty(contact.country)
    );
  };

  return (
    <Container>
      <Row>
        <Col className="contactForm ">
          <Form>
            <Form.Row className="align-items-center">
              <Col xs="auto">
                <Form.Label htmlFor="inlineFormInput" srOnly>
                  First Name
                </Form.Label>
                <Form.Control
                  key="inputFname"
                  name="firstName"
                  className="mb-2 mt-2 FormWidth"
                  id="inlineFormInput"
                  placeholder="First Name"
                  isValid={isNotEmpty(contact.firstName)}
                  value={contact.firstName}
                  onChange={handleChange}
                />
                <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                  Last Name
                </Form.Label>
                <Form.Control
                  key="inputLname"
                  name="lastName"
                  className="mb-2 FormWidth"
                  id="inlineFormInput"
                  placeholder="Last Name"
                  isValid={isNotEmpty(contact.lastName)}
                  value={contact.lastName}
                  onChange={handleChange}
                />
                <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                  Email
                </Form.Label>
                <FormControl
                  key="inputEmail"
                  name="email"
                  className="FormWidth"
                  id="inlineFormInput"
                  placeholder="Email"
                  value={contact.email}
                  isValid={isValidContactEmail()}
                  onChange={handleChange}
                />
                <Dropdown>
                  <Dropdown.Toggle
                    key="inputCountry"
                    name="country-name"
                    variant={
                      isNotEmpty(contact.country) ? "success" : "secondary"
                    }
                    id="dropdown-basic"
                    className="mt-2 dropdownWidth cut-text "
                  >
                    {contact.country ? contact.country : "Country:"}
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="scrollableMenu">
                    {getAllCountriesList()}
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
              <Col xs="auto"></Col>
            </Form.Row>

            <Form.Row>
              <Col xs="auto">
                {!existingContact && (
                  <Button
                    key="sumbitButton"
                    type="submit"
                    className="mb-2 mt-2"
                    variant="success"
                    disabled={!isValidContact()}
                    onClick={handleCreate}
                  >
                    Add Contact
                  </Button>
                )}
                {existingContact && (
                  <Row>
                    <Col>
                      <Button
                        key="editButton"
                        type="button"
                        variant="outline-warning"
                        className="mb-2 mt-2 mr-2 pl-2 pr-2"
                        onClick={handleEdit}
                      >
                        Edit Contact
                      </Button>
                      <Button
                        key="deleteButton"
                        type="button"
                        variant="outline-danger"
                        className="mb-2 mt-2 ml-1 pl-2 pr-2"
                        onClick={handleDelete}
                      >
                        Delete Contact
                      </Button>
                    </Col>
                  </Row>
                )}
              </Col>
            </Form.Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
