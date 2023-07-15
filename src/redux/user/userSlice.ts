import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IUserState {
  user: {
    userName: string | null;
    email: string | null;
    _id: string | null;
    accessToken: string | null;
    refreshToken: string | null;
  };
}

const initialState: IUserState = {
  user: {
    userName: null,
    email: null,
    _id: null,
    accessToken: null,
    refreshToken: null,
  },
};

const userSlice = createSlice({
  name: "user ",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUserState | null>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
