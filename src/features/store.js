import { configureStore } from "@reduxjs/toolkit";
import InfoReducer from './infoSlice';



export const store = configureStore({
  reducer: {
    info: InfoReducer
  }
})