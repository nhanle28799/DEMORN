import actionTypes from "./actionTypes";

export function toggleWord(word) {
    return { type: actionTypes.ACTION_TYPE_TOGGLE_WORD, word };
}
export function removeWord(word) {
    return { type: actionTypes.ACTION_TYPE_REMOVE_WORD, word };
}
export function toggleForm() {
    return { type: actionTypes.ACTION_TYPE_TOGGLE_FORM };
}
export function addWord(newWord) {
    return { type: actionTypes.ACTION_TYPE_ADD_WORD, newWord };
}
export function setFilterMode(filterMode) {
    return { type: actionTypes.ACTION_TYPE_FILTER_MODE, filterMode };
}