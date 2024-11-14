import {configureStore} from "@reduxjs/toolkit";
import packageSlice from "./feature/packageSlice";
import loaderSlice from "./feature/loaderSlice";

export const store = configureStore({
    reducer: {
        package: packageSlice,
        loader: loaderSlice,
    },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
