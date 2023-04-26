import { createSlice } from "@reduxjs/toolkit";
import { crudInfo, getInfo } from "./localstorage";


const infoSlice = createSlice({
  name: 'info',
  initialState: getInfo(),
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
      crudInfo(state);
    },
    updateUser: (state, action) => {
      state = state.map((m) => m.id === action.payload.id ? action.payload : m)
      crudInfo(state);
    },



  }
});

export const { addUser, updateUser } = infoSlice.actions;
export default infoSlice.reducer;

