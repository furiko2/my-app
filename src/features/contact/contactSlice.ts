import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

// Define a type for the slice state

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
    // Use the PayloadAction type to declare the contents of `action.payload`
    // createContact: (state, action: PayloadAction<ContactState>) => {
    //   state.id = action.payload.id;
    //   state.firstName = action.payload.firstName;
    //   state.lastName = action.payload.lastName;
    //   state.email = action.payload.email;
    //   state.country = action.payload.country;
    // },
    createContact: {
      reducer: (state, action: PayloadAction<Contact>) => {
        console.log(state.contacts);
        state.contacts.push(action.payload);
        // state = [...state, action.payload];
        // state.contacts=[...state.contacts,action.payload]
      },
      prepare: (id, firstName, lastName, email, country) => {
        // const id = 2;
        return { payload: { id, firstName, lastName, email, country } };
      },
    },

    updateContact: (state, action: PayloadAction<Contact>) => {
      const { id, firstName, lastName, email, country } = action.payload
      const contact = state.contacts.find(c => c.id === id)
      contact!.firstName = firstName;
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

// Other code such as selectors can use the imported `RootState` type
export const selectContacts = (state: RootState) => state.persistedReducer;

export default contactSlice.reducer;
