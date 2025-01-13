import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export const config = {
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-magistr-2",
  headers: {
    authorization: "bc87767e-4fd6-4faf-bbe1-2b50fbc9866d",
    "Content-Type": "application/json",
  },
};

// b0ff82b903f1b1bd17ff6a6c

export const checkResponse = (res: Response) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};

export const getInitialCards = createAsyncThunk(
  "cards/getInitialCards",
  async function fetchData() {
    try {
      const res = await fetch(`${config.baseUrl}/cards`, {
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


export type TPersonInfo = {
  about: string;
  avatar: string;
  cohort: string;
  name: string;
  _id: string;
};

export type TCard = {
  createdAt: string;
  likes: Array<TPersonInfo>;
  link: string;
  name: string;
  owner: TPersonInfo;
  _id: string;
};

export type TCardsState = {
  cards: Array<TCard>;
  loading: boolean;
  error: string | undefined;
  popupVisible: boolean;
  popupData: {
    link: string;
    text: string;
    likes: Array<TPersonInfo>;
  };
};

type TSaveData = {
  link: string;
  text: string;
  likes: Array<TPersonInfo>;
};

// Надо выделить действия с попапом в отдельный слайс

const initialState: TCardsState = {
  cards: [],
  loading: false,
  error: undefined,
  popupVisible: false,
  popupData: {
    link: "",
    text: "",
    likes: [],
  },
};

const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    addVisiblePopup: (state) => {
      state.popupVisible = true;
    },
    deleteVisiblePopup: (state) => {
      state.popupVisible = false;
    },
    saveDataToPopup: (state, action: PayloadAction<TSaveData>) => {
      state.popupData.link = action.payload.link;
      state.popupData.text = action.payload.text;
      state.popupData.likes = action.payload.likes;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getInitialCards.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(getInitialCards.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getInitialCards.fulfilled, (state, action) => {
        state.loading = false;
        state.cards = action.payload;
      });
  },
});

export const cardsReducer = cardSlice.reducer;
export const { addVisiblePopup, deleteVisiblePopup, saveDataToPopup } =
  cardSlice.actions;
