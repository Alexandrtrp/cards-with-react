import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { checkResponse, config } from "./cardSlice.ts";

export const getProfileInfoThunk = createAsyncThunk(
  "user/getProfileInfoThunk",
  async function getInfo() {
    try {
      const res = await fetch(`${config.baseUrl}/users/me`, {
        headers: {
          authorization: config.headers.authorization,
        },
      });
      return checkResponse(res);
    } catch (err) {
      return console.log(`Ошибка. Запрос не выполнен: ${err}`);
    }
  }
);

type TState = {
  userId: string;
};


const initialState: TState = {
  userId: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProfileInfoThunk.pending, (state, action) => {})
      .addCase(getProfileInfoThunk.rejected, (state, action) => {})
      .addCase(getProfileInfoThunk.fulfilled, (state, action) => {
        state.userId = action.payload._id;
      });
  },
});

export const userReducer = userSlice.reducer;
