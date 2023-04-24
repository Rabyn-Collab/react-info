import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from './infoSlice'




export const store = configureStore({
  info: TodoReducer
})