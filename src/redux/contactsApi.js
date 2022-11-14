import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://636fbae6bb9cf402c81e5849.mockapi.io/api/',
  }),
  tagTypes: ['Todo'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => 'todos',
      providesTags: ['Todo'],
    }),
    addContact: builder.mutation({
      query: data => ({
        url: 'todos',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Todo'],
    }),
    deleteContact: builder.mutation({
      query: todoId => ({
        url: `todos/${todoId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Todo'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsApi;
// export default contactsApi;
