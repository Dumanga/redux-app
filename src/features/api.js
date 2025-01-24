import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://apis.dnjs.lk' }),
  endpoints: (builder) => ({
    fetchColors: builder.query({
      query: (search) => `/objects/colors.php?search=${search}`,
      transformResponse: (response) => {
        console.log(response);
        return response.colors || response;
      },
    }),
  }),
});

export const { useLazyFetchColorsQuery } = api;
