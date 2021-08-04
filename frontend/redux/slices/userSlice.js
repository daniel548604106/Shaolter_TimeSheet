import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isUserLoggedIn: false,
    userInfo: {},
  },
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    setUserLogin: (state, { payload }) => {
      (state.isUserLoggedIn = true), (state.userInfo = payload);
    },
    setUserLogout: (state, { payload }) => {
      (state.isUserLoggedIn = false), (state.userInfo = {});
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserLogin, setUserLogout } = userSlice.actions;

export default userSlice.reducer;
