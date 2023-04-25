import { createSlice } from "@reduxjs/toolkit";
import { crudInfo, getInfo } from "./localstorage";


const infoSlice = createSlice({
  name: 'info',
  initialState: getInfo(),
  reducers: {

    addUser: (state, action) => {
      state.push(action.payload);
      crudInfo(state);
    }



  }
});

export const { addUser } = infoSlice.actions;
export default infoSlice.reducer;

