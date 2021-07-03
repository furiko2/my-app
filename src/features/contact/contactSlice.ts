import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

// Define a type for the slice state
interface ContactState {
  id: number;
  firstName: String;
  lastName: String;
  email: String;
  country: String;
}

// Define the initial state using that type
const initialState: ContactState = {
  id: 1,
  firstName: "james",
  lastName: "doehe",
  email: "email@email.com",
  country: "DE",
};

export const contactSlice = createSlice({
  name: "contacts",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    createContact: (state, action: PayloadAction<ContactState>) => {
      state.id = action.payload.id;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.country = action.payload.country;
    },
    update: () => {},
    remove: () => {},
  },
});

export const { createContact } = contactSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCountry = (state: RootState) => state.contactSlice.country;

export default contactSlice.reducer;
