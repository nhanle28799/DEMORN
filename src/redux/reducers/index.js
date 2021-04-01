import { combineReducers } from "redux";
import filterModeReducer from './filterModeReducer';
import shouldShowFormReducer from './shouldShowFormReducer';
import wordsReducer from './wordsReducer';


const rootReducer = combineReducers({
    words: wordsReducer,
    shouldShowForm: shouldShowFormReducer,
    filterMode: filterModeReducer,
});
export default rootReducer;