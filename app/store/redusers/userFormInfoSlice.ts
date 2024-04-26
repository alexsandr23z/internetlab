import { IUserInfo, IUserInfoValidate } from "@/app/models/IUser"
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserFormInfoState {
  name: string;
  tel: string;
  checkbox: boolean;
  isValid: boolean;
}

const initialState: UserFormInfoState = {
  name: '',
  tel: '',
  checkbox: false,
  isValid: true,
}

export const userFormInfoSlice = createSlice({
  name: 'userFormInfo',
  initialState,
  reducers: {
    setUserInfo(state, action: PayloadAction<IUserInfo>) {
      state.name = action.payload.name;
      state.tel = action.payload.tel;
      state.checkbox = action.payload.checkbox;
    },
    userInfoValidate(state, action: PayloadAction<IUserInfoValidate>) {
      state.isValid = action.payload.isValid;
    }
  }
})

export default userFormInfoSlice.reducer;
export const {setUserInfo, userInfoValidate} = userFormInfoSlice.actions;