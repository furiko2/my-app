import React, { FC, ReactNode } from "react";
import { AppProp as Props } from "../App";
import { ContactCard } from "./ContactCard";

export const ContactList:FC<Props[]> = ({ contact }: Props[]): JSX.Element => {
  const renderContactList = () => {
    return contact.map((person: Props) => {
       return <ContactCard key={person.id} person={person} />;
    });
  };
  return renderContactList();
};
