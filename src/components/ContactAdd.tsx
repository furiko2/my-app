import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Dropdown from "react-bootstrap/esm/Dropdown";
import Form from "react-bootstrap/esm/Form";
import FormControl from "react-bootstrap/esm/FormControl";
import InputGroup from "react-bootstrap/esm/InputGroup";
import "../App.css";

interface Props {}
const countryList = require("country-list");

const allCountries = countryList.getNames();

export const ContactAdd = (props: Props) => {
  const [contact, setContact] = useState({
    firstName: "john",
    lastName: "",
    email: "",
    country: "",
  });

  const handleChange = () => {
    return;
  };
  console.log(contact);
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
              className="mb-2"
              id="inlineFormInput"
              placeholder="Last Name"
              value={contact.lastName}
            />
          </Col>
        </Form.Row>
        <Form.Row>
          <Col xs="auto">
            <Form.Label htmlFor="inlineFormInputGroup" srOnly>
              Email
            </Form.Label>
            <FormControl
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
            <Button type="submit" className="mb-2">
              Submit
            </Button>
          </Col>
        </Form.Row>
      </Form>
    </div>
  );
};
