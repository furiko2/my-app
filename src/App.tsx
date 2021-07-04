import React, { useState } from "react";
//styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Components
import { ContactList } from "./components/ContactList";
import { ContactForm } from "./components/ContactForm";
import { NavHeader } from "./components/NavHeader";

import Table from "react-bootstrap/esm/Table";
import { RootState } from "./app/store";
import { useAppSelector } from "./app/hooks";

import Contact from "./features/contact/contactSlice";
import ContactsAll from "./features/contact/contactSlice";

function App() {
  const initialState = useAppSelector(
    (state: RootState) => state.persistedReducer
  );
  console.log(initialState.contacts);
  const [allContacts, setAllContacts] = useState(initialState);

  const handleNewContact = () => {
    return;
  };

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
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              <ContactList contacts={allContacts.contacts} />
            </tbody>
          </Table>
        </Route>
        <Route path="/contactForm">
          <ContactForm />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
