import React, { FC, ReactNode } from "react";
import { ReactElement } from "react";
import { ContactInterface as Props } from "../App";
import { ContactCard } from "./ContactCard";

export const ContactList = ({ contacts }: any) => {
  const renderContactList = () => {
    return contacts.map((contact: any) => {
      return <ContactCard key={contact.id} contact={contact} />;
    });
  };
  return renderContactList();
};
