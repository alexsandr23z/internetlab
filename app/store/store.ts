import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userFormInfoSlice from "./redusers/userFormInfoSlice";


const rootReducer = combineReducers({
  userFormInfo: userFormInfoSlice,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];