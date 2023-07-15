import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IBookFilter {
  searchTerm: string | null;
  genre: string | null;
  publicationYear: number | null;
}

const initialState: IBookFilter = {
  searchTerm: "",
  genre: "",
  publicationYear: 2023,
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    // toggleState: (state) => {
    //   state.status = !state.status;
    // },
    // setPriceRange: (state, action: PayloadAction<number>) => {
    //   state.priceRange = action.payload;
    // },
  },
});

export const { setSearchTerm } = bookSlice.actions;

export default bookSlice.reducer;
