import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const mediaApi = createApi({
  reducerPath: 'media',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api',
  }),
  endpoints(build) {
    return {
      getMediaByTitle: build.query({
        query: (title) => {
          return {
            url: '/tmdb/search_by_title',
            params: {
              search: title,
            },
            method: 'GET',
          };
        },
      }),
    };
  },
});

export const { useGetMediaByTitleQuery } = mediaApi;
export { mediaApi };
