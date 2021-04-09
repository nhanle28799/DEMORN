import { configureStore, createSlice } from "@reduxjs/toolkit";

const word = createSlice({
    name: 'shouldShowForm',
    initialState: false,
    reducers: {
        toggleForm:(state,action)=> !state
    }
});

const { reducer, actions } = word;
export const {toggleForm}=actions;
export default reducer;