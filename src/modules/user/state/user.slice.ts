import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IAuthInfo {
  email: string;
  password: string;
}

interface IUser {
  id?: string;
  displayName?: string;
  email?: string;
  createAt?: {
    seconds: number;
    nanoseconds: number;
  };
}

interface IUserState {
  currentUser: IUser;
  errorMessage: string;
  loading: boolean;
}

const initialState: IUserState = {
  currentUser: {},
  errorMessage: '',
  loading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    googleSigInStart(state) {
      state.loading = true;
    },
    sigInSuccess(state, action: PayloadAction<IUser>) {
      state.loading = false;
      state.currentUser = action.payload;
    },
    signInFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.errorMessage = action.payload;
    },
    emailSigInStart(state, action: PayloadAction<IAuthInfo>) {
      state.loading = true;
    },
    signOutStart(state) {},
    signOutSuccess(state) {
      state.loading = false;
    },
    signOutFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.errorMessage = action.payload;
    },
  },
});

export const { googleSigInStart } = userSlice.actions;
export default userSlice.reducer;
