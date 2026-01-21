import { configureStore } from "@reduxjs/toolkit";
import heartSlice from "./slices.jsx/HeartSlice";

const store = configureStore({
    reducer: {
        heartsProducts: heartSlice,
    }
})

export default store;