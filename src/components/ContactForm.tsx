import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Dropdown from "react-bootstrap/esm/Dropdown";
import Form from "react-bootstrap/esm/Form";
import FormControl from "react-bootstrap/esm/FormControl";

import "../App.css";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { RootState } from "../app/store";
import { createContact } from "../features/contact/contactSlice";

import { nanoid } from "nanoid";
const countryList = require("country-list");

const allCountries = countryList.getNames();


export const ContactForm = (props: any) => {
  const getId = () => nanoid();
  const initialState = {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    country: "Country",
  };
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
            <Button type="button" className="mb-2" onClick={handleCreate}>
              Add Contact
            </Button>
          </Col>
        </Form.Row>
      </Form>
    </div>
  );
};
