import { createSlice } from "@reduxjs/toolkit";






const infoSlice = createSlice({
  name: 'info',
  initialState: [],
  reducers: {

    addInfo: (action, state) => {
      state = [...state, state.payload];
    }



  }
})



export const { addInfo } = infoSlice.actions;

export default infoSlice.reducer;











