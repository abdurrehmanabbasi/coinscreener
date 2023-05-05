import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://api.coingecko.com/api/v3/";

const createRequest = (url: any) => ({ url });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getGlobal: builder.query({
      query: () => createRequest("/global"),
    }),
    getCoins: builder.query({
      query: () => createRequest("/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false&locale=en"),
    }),
    getCoinDetails: builder.query({
      query: (id) => createRequest(`/coins/${id}?localization=false&sparkline=true`),
    }),
  }),
});


export const {useGetGlobalQuery,useGetCoinsQuery,useGetCoinDetailsQuery}=cryptoApi