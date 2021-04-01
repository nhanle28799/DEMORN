export default function shouldShowFormReducer(state = false, action) {
    if (action.type === "TOGGLEFORM") {
        return !state
    }
    return state;
}