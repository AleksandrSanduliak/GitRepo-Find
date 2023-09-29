import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type initialState = {
  searchValue: string | null;
};
export const initialState: initialState = {
  searchValue: null,
};

const repoSlice = createSlice({
  name: "repo",
  initialState,
  reducers: {
    searchRepo: (state, action: PayloadAction<string>) => {
      console.log(action, "reposlice");
      state.searchValue = action.payload ?? state.searchValue;
    },
  },
});

export const { searchRepo } = repoSlice.actions;
export default repoSlice.reducer;
