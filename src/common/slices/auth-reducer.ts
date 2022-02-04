import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UserModel } from '../models';
import authService from '../services/auth-service';

interface LoginModel {
  username: string;
  password: string;
}

interface RegisterModel {
  username: string;
  password: string;
  email: string;
}

interface UserState {
  isLoggedIn: boolean;
  user: UserModel | null;
  loading: boolean;
}

const user = JSON.parse(
  localStorage.getItem('user') ?? 'null'
) as UserModel | null;

export const register = createAsyncThunk(
  'auth/register',
  async ({ username, email, password }: RegisterModel) => {
    const response = await authService.register(username, email, password);
    return response.data;
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async ({ username, password }: LoginModel) => {
    const data = await authService.login(username, password);
    return { user: data };
  }
);

export const logout = createAsyncThunk('auth/logout', async () => {
  await authService.logout();
});

const initialState = user
  ? { isLoggedIn: true, user, loading: false }
  : ({ isLoggedIn: false, user: null, loading: false } as UserState);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(register.fulfilled, (state, action) => {
      state.isLoggedIn = false;
    });

    builder.addCase(register.rejected, (state, action) => {
      state.isLoggedIn = false;
    });

    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
    });

    builder.addCase(login.rejected, (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    });

    builder.addCase(login.pending, (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
      state.loading = true;
    });

    builder.addCase(logout.fulfilled, (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    });
  },
});

export const authReducer = authSlice.reducer;
