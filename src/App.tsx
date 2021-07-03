import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ContactList } from "./components/ContactList";
import { ContactAdd } from "./components/ContactForm";
import { NavHeader } from "./components/NavHeader";

import { Provider } from "react-redux";
import Table from "react-bootstrap/esm/Table";

export type ContactInterface = {
  id: number;
  firstName: String;
  lastName: String;
  email: String;
  country: String;
};

function App() {
  const initialState = [
    {
      id: 1,
      firstName: "john",
      lastName: "doe",
      email: "email.com",
      country: "DE",
    },
    {
      id: 2,
      firstName: "kane",
      lastName: "doe",
      email: "email.com",
      country: "SE",
    },
  ];

  const [allContacts, setAllContacts] = useState(initialState);

  const handleNewContact = () => {
    return;
  };
  console.log(allContacts);
  return (
    <Router>
      <NavHeader />

      <Switch>
        <Route exact path="/">
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>
              <ContactList contacts={allContacts} />
            </tbody>
          </Table>
        </Route>
        <Route path="/addContact">
          <ContactAdd />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
