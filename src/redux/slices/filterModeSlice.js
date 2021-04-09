import { configureStore, createSlice } from "@reduxjs/toolkit";

const filterMode = createSlice({
    name: 'filterMode',
    initialState: 'Show_All',
    reducers: {
        setfilterMode: (state, action) => action.payload
    }

});

const { reducer, actions } = filterMode;
export const { setfilterMode } = actions;
export default reducer;