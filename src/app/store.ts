import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/cryptoApi";
import watchlistSlice from "../services/watchlistSlice";
const store= configureStore({
    reducer:{
        [cryptoApi.reducerPath]:cryptoApi.reducer,
        'watchlist':watchlistSlice
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(cryptoApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export default store