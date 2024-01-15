import { createSlice } from "@reduxjs/toolkit";

export const toDoReducer = createSlice({
   name: "toDo",
   initialState: {
      value: 'Dilan Madhusanka',
   },
   reducers: {
      addToDo: (state) => {
         console.log(state);
         return state;
      },
      deleteToDo: (state) => {
         console.log(state);
         return state;
      }
   },
});

export const { addToDo, deleteToDo } = toDoReducer.actions;
export default toDoReducer.reducer;
