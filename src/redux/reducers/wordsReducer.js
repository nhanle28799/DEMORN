const defaultWord = [
    { id: 1, en: 'One', vn: 'Một', isMemorized: true },
    { id: 2, en: 'Two', vn: 'Hai', isMemorized: true },
    { id: 3, en: 'Three', vn: 'Ba', isMemorized: false },
    { id: 4, en: 'Four', vn: 'Bốn', isMemorized: false },
    { id: 5, en: 'Five', vn: 'Năm', isMemorized: true },
];
export default function wordsReducer(state = defaultWord, action) {
    if (action.type === "ADDWORD") {
        const newWord = action.newWord;
        const newWords = state.map(word => ({ ...word }));
        newWords.push(newWord);
        return newWords
    }
    if (action.type === "TOGGLE_WORD") {
        const newWords = state.map(item => {
            if (item.id === action.word.id) {
                return { ...item, isMemorized: !item.isMemorized };
            }
            return item;
        });
        return newWords
    }
    if (action.type === "REMOVEWORD") {
        const newWords = state.filter(item => {
            if (item.id === action.word.id) {
                return false
            }
            return true
        })
        return newWords
    }
    return state;
}