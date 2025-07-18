import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 3,
  notes: [
    { id: 1, title: "hola", text: "asd" },
    { id: 2, title: "chau", text: "xd" },
  ],
  inputTitle: "",
  inputText: "",
};

const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action) => {
      const { title, text } = action.payload;
      state.notes.push({ id: state.id, title: title, text: text });
      state.id += 1;
    },
    deleteNote: (state, action) => {
      const { id } = action.payload;
      const filteredNotes = state.notes.filter((note) => note.id != id);
      state.notes = filteredNotes;
    },
    updateField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
  },
});

export const { addNote, updateField, deleteNote } = noteSlice.actions;
export default noteSlice.reducer;
