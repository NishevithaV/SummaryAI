import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const apiKey = process.env.RAPID_API_SUMMARY_KEY

export const textApi = createApi({
    reducerPath: 'textApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set('x-rapidapi-key', apiKey);
            headers.set('x-rapidapi-Host', 'article-extractor-and-summarizer.p.rapidapi.com');

            return headers;
        }
    }),
    endpoints: (builder) => ({
        getResult: builder.query({
            query: (params) => `/summarize?url=${encodeURIComponent(params.textUrl)}&length=12`
        })
    })
})

export const { useLazyGetResultQuery } = textApi;