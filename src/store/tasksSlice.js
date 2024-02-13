import { createSelector, createSlice } from "@reduxjs/toolkit";

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
        color: action.payload.color,
      };

      console.log("createTask - newTask.color:", newTask.color);

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
    updateTask(state, action) {
      const { id, title, text, color } = action.payload;
      const taskToUpdate = state.tasks.find((task) => task.id === id);

      if (taskToUpdate) {
        taskToUpdate.title = title;
        taskToUpdate.text = text;
        taskToUpdate.color = color;
      }
    },
  },
});
export const selectCompletedTasksCount = createSelector(
  (state) => state.tasks.tasks,
  (tasks) => tasks.filter((task) => task.isDone).length
);

export const selectProcessedTasksCount = createSelector(
  (state) => state.tasks.tasks,
  (tasks) => tasks.length
);
export const { createTask, completeTask, updateTask } = tasksSlice.actions;

export const tasksReducer = tasksSlice.reducer;
