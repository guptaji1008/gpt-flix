import { createSlice } from "@reduxjs/toolkit";

const aboutSlice = createSlice({
    name: "about",
    initialState: false,
    reducers: {
        changeAboutState: (state, action) => {
            return action.payload;
        }
    }
});

export const { changeAboutState } = aboutSlice.actions;
export default aboutSlice.reducer;