import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { contactsApi } from './contactsApi';

const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});

export default store;
