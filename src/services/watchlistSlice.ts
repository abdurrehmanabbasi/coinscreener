import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const coinsJson = localStorage.getItem("coins");
const coins = typeof coinsJson === "string" ? JSON.parse(coinsJson) : [];
const initialState: string[] = coins;

const watchlistSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    addCoin: (state, action: PayloadAction<string>) => {
      localStorage.setItem("coins",JSON.stringify([...state,action.payload]))
      return [...state, action.payload];
    },
    removeCoin: (state, action: PayloadAction<string>) => {
      localStorage.setItem("coins",JSON.stringify(state.filter((coin: string) => coin !== action.payload)))
      return state.filter((coin: string) => coin !== action.payload);
    },
  },
});

export const { addCoin, removeCoin } = watchlistSlice.actions;
export default watchlistSlice.reducer;
