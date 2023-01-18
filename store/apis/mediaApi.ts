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
      getActors: build.query({
        query: (typeAndID) => {
          return {
            url: '/tmdb/search_actors',
            params: {
              type: typeAndID.type,
              id: typeAndID.id,
            },
            method: 'GET',
          };
        },
      }),
    };
  },
});

export const { useGetMediaByTitleQuery, useGetActorsQuery } = mediaApi;
export { mediaApi };
