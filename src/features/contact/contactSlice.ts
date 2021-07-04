import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

// Define a type for the slice state

export interface Contact {
  id: String;
  firstName: String;
  lastName: String;
  email: String;
  country: String;
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

    update: () => {},
    remove: () => {},
  },
});

export const { createContact } = contactSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCountry = (state: RootState) =>
//   state.persistedReducer.country;

export default contactSlice.reducer;
