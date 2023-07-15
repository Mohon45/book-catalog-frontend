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
  publicationYear: null,
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
    setPublicationYear: (state, action: PayloadAction<number>) => {
      state.publicationYear = action.payload;
    },
  },
});

export const { setSearchTerm, setPublicationYear } = bookSlice.actions;

export default bookSlice.reducer;
