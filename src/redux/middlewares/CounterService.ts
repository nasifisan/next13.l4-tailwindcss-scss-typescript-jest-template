import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';

import { REDUCER_MAPPERS } from '@/constants/ReducerMappers';

const CounterService = createApi({
  reducerPath: REDUCER_MAPPERS.COUNTER,
  baseQuery: fetchBaseQuery(),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },

  tagTypes: ['COUNTER'],

  endpoints: (build) => ({
    incremental: build.query({
      query: (query: any) => ({
        url: 'https://api.com',
        method: 'get',
        headers: query.headers,
      }),
      providesTags: ['COUNTER'],
    }),
  }),
});

export default CounterService;
