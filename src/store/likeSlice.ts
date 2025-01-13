import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { checkResponse, config } from "./cardSlice.ts";

export const addLike = createAsyncThunk(
  "like/addLike",
  async function pushLike(id: string) {
    try {
      const res = await fetch(`${config.baseUrl}/cards/likes/${id}`, {
        method: "PUT",
        headers: {
          authorization: config.headers.authorization,
          "Content-Type": config.headers["Content-Type"],
        },
      });
      return checkResponse(res);
    } catch (err) {
      return console.log(`Ошибка. Запрос не выполнен: ${err}`);
    }
  }
);

export const deleteLike = createAsyncThunk(
  "like/deleteLike",
  async function deleteLike(id: string) {
    try {
      const res = await fetch(`${config.baseUrl}/cards/likes/${id}`, {
        method: "DELETE",
        headers: {
          authorization: config.headers.authorization,
          "Content-Type": config.headers["Content-Type"],
        },
      });
      return checkResponse(res);
    } catch (err) {
      return console.log(`Ошибка. Запрос не выполнен: ${err}`);
    }
  }
);

const initialState = [];

const likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {},
  // extraReducers: (builder) => {
  //   builder.addCase(addLike.fulfilled, (state, action) => {
  //     console.log(action.payload)
  //   });
  //   builder.addCase(deleteLike.fulfilled, (state, action) => {
  //     console.log(action.payload)
  //   });
  // },
});

export const likeReducer = likeSlice.reducer;
export const {} = likeSlice.actions;
