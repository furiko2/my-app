import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ContactList } from "./components/ContactList";
import { ContactAdd } from "./components/ContactAdd";
import { NavHeader } from "./components/NavHeader";

import { Provider } from "react-redux";

export type AppProp = {
  id: number;
  firstName: String;
  lastName: String;
  email: String;
  country: String;
};

function App() {
  const initialState: AppProp[] = [
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

  const [allContacts, setAllContacts] = useState<AppProp[]>(initialState);

  const handleNewContact = () => {
    return;
  };

  return (
    <Router>
      <NavHeader />

      <Switch>
        <Route exact path="/">
          <ContactList contact={allContacts} />
        </Route>
        <Route path="/addContact">
          <ContactAdd />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
