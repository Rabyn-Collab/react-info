import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'






export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  endpoints: (builder) => ({

    getMovieByCategory: builder.query({
      query: (query) => ({
        url: '/',
        method: 'GET'
      })
    }),

    getSearchMovie: builder.query({
      query: (query) => ({
        url: '/',
        method: 'GET'
      })
    }),



  })

});


export const{useGetMovieByCategoryQuery, useGetSearchMovieQuery} = movieApi;