import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
  name: "note",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    edit: (state, action) => {
      state[Number(action.payload.id)].title = action.payload.values.title;
      state[Number(action.payload.id)].content = action.payload.values.content;
      console.log(action.payload);
    },
    del: (state, action) => {
      state.splice(action.payload, 1);
    },
  },
});

export const { add, edit, del } = noteSlice.actions;

export default noteSlice.reducer;
