export default function filterModeReducer(state = "Show_All", action) {

    if (action.type === "FILTERMODE") {
        return action.filterMode
    }
    return state;
}