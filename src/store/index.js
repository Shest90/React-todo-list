import { configureStore } from "@reduxjs/toolkit";

import { counterReducer } from "./counterSlice";
import { tasksReducer } from "./tasksSlice";
import taskEditorReducer from "./taskEditorSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    tasks: tasksReducer,
    taskEditor: taskEditorReducer,
  },
});

export default store;
