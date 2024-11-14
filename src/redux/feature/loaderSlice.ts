import {createSlice} from "@reduxjs/toolkit";

const initialState: boolean = false;

const loaderSlice = createSlice({
    name: "loader",
    initialState,
    reducers: {
        activeLoader() {
            return true;
        },
        desactiveLoader() {
            return false;
        },
    },
});

export const {activeLoader, desactiveLoader} = loaderSlice.actions;
export default loaderSlice.reducer;
