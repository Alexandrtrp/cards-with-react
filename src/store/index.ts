import { configureStore} from "@reduxjs/toolkit";
import { cardsReducer } from "./cardSlice.ts";
import { likeReducer } from "./likeSlice.ts";
import { userReducer } from "./userSlice.ts";

export const store = configureStore({
    reducer: {
        cards: cardsReducer,
        like: likeReducer,
        user: userReducer,
    }
})

export type AppStore = typeof store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch