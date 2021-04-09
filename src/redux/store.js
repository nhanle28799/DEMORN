
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import filterModeReducer from './slices/filterModeSlice';
import shouldShowFormReducer from './slices/shouldShowFormSlice';
import wordsReducer from './slices/wordSlice';


const store = configureStore({
    reducer: {
        words: wordsReducer,
        shouldShowForm: shouldShowFormReducer,
        filterMode: filterModeReducer
    }
});

export default store;