import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//Interfaces
export interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  country: string;
}
export interface ContactsAll {
  contacts: Contact[];
}


const initialState: ContactsAll = {
  contacts: [],
};
export const contactSlice = createSlice({
  name: "contacts",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
       //immer state upadte "without" mutation
    createContact: {
      reducer: (state, action: PayloadAction<Contact>) => {
        state.contacts.push(action.payload);
      },
      prepare: (
        id: string,
        firstName: string,
        lastName: string,
        email: string,
        country: string
      ) => {
        return { payload: { id, firstName, lastName, email, country } };
      },
    },

    updateContact: (state, action: PayloadAction<Contact>) => {
      const { id, firstName, lastName, email, country } = action.payload;
      const contact = state.contacts.find((contact) => contact.id === id);
      contact!.firstName = firstName; //check for undefined at ContactForm=>existingContact
      contact!.lastName = lastName;
      contact!.email = email;
      contact!.country = country;
    },
    removeContact: (state, action: PayloadAction<string>) => {
      state.contacts = state.contacts.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { createContact, updateContact, removeContact } =
  contactSlice.actions;

export default contactSlice.reducer;
