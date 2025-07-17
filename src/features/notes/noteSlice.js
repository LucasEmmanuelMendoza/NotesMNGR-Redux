import { createSlice } from "@reduxjs/toolkit";

const initialState = { notes: [] };

const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state) => {},
  },
});

export const { addNote } = noteSlice.actions;
export default noteSlice.reducer;
