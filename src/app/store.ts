import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import storage from "redux-persist/lib/storage";
import { PERSIST, persistReducer } from 'redux-persist'
//slices
import contactSlice from "./../features/contact/contactSlice";

const persistConfig = {
  key: 'root',
  storage
};
const persistedReducer = persistReducer(persistConfig, contactSlice);

export const store = configureStore({
  reducer: {
    persistedReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: [PERSIST]
    }
  }),
}); 

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
