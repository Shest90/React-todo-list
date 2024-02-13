import { createSlice } from "@reduxjs/toolkit";

const taskEditorSlice = createSlice({
  name: "taskEditor",
  initialState: {
    editedTask: null,
  },
  reducers: {
    startEditing(state, action) {
      state.editedTask = action.payload;
    },
    finishEditing(state) {
      state.editedTask = null;
    },
  },
});

export const { startEditing, finishEditing } = taskEditorSlice.actions;
export default taskEditorSlice.reducer;
