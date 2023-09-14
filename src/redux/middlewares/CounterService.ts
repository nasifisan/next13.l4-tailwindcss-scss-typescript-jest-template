import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';

import { REDUCER_MAPPERS } from '@/constants/ReducerMappers';

const CounterService = createApi({
  reducerPath: REDUCER_MAPPERS.COUNTER_SERVICE,
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({ baseUrl: 'https://64fffab818c34dee0cd4193c.mockapi.io/api/' }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },

  tagTypes: ['COUNTER'],

  endpoints: (build) => ({
    // incremental: build.query({
    //   query: (query: any) => ({
    //     url: 'https://api.com',
    //     method: 'get',
    //     headers: query.headers,
    //   }),
    //   providesTags: ['COUNTER'],
    // }),
    fakePost: build.mutation({
      query: ({ body, headers }) => {
        return {
          url: `test`,
          method: 'POST',
          body: JSON.stringify(body),
          headers: headers,
        };
      },
    }),
    fetchData: build.query({
      query: (url: string) => ({
        url: url,
        method: 'get',
        // headers: query.headers,
      }),
    }),
  }),
});

export const { useFakePostMutation, useFetchDataQuery } = CounterService;

export default CounterService;
