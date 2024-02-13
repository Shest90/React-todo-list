import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    completedTasksCount: 0,
    processedTasksCount: 0,
  },
  reducers: {
    createTask(state, action) {
      const newTask = {
        id: `${Date.now()}-${state.tasks.length}`,
        title: action.payload.title,
        text: action.payload.text,
        isDone: false,
        date: new Date().toLocaleDateString(),
      };

      state.processedTasksCount += 1;
      state.tasks.push(newTask);
    },
    completeTask(state, action) {
      state.tasks = state.tasks.map((elem) => {
        if (elem.id === action.payload) {
          if (elem.isDone) {
            state.processedTasksCount += 1;
            state.completedTasksCount -= 1;
          } else {
            state.processedTasksCount -= 1;
            state.completedTasksCount += 1;
          }

          return {
            ...elem,
            isDone: !elem.isDone,
          };
        }
        return elem;
      });
    },
  },
});

export const { createTask, completeTask } = tasksSlice.actions;

export const tasksReducer = tasksSlice.reducer;
