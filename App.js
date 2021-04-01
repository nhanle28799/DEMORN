import React, { Component } from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import Box from './src/components/Box'
import Filter from './src/components/Filter'
import Form from './src/components/Form'
import MainScreen from './src/screens/MainScreen';
import { createStore } from 'redux'
import { connect, Provider } from 'react-redux';
import ItemofWord from './src/components/ItemofWord'

const defaultStore = {
  words: [
    { id: 1, en: 'One', vn: 'Một', isMemorized: true },
    { id: 2, en: 'Two', vn: 'Hai', isMemorized: true },
    { id: 3, en: 'Three', vn: 'Ba', isMemorized: false },
    { id: 4, en: 'Four', vn: 'Bốn', isMemorized: false },
    { id: 5, en: 'Five', vn: 'Năm', isMemorized: true },
  ],
  shouldShowForm: false,
  filterMode: 'Show_All',
};

const store = createStore((state = defaultStore, action) => {
  if (action.type === "TOGGLEFORM") {
    return { ...state, shouldShowForm: !state.shouldShowForm };
  }
  if (action.type === "ADDWORD") {
    const newWord = action.newWord;
    const newWords = state.words.map(word => ({ ...word }));
    newWords.push(newWord);
    return { ...state, words: newWords };
  }
  if (action.type === "TOGGLE_WORD") {
    const newWords = state.words.map(item => {
      if (item.id === action.word.id) {
        return { ...item, isMemorized: !item.isMemorized };
      }
      return item;
    });
    return { ...state, words: newWords };
  }
  if (action.type === "REMOVEWORD") {
    const newWords = state.words.filter(item => {
      if (item.id === action.word.id) {
        return false
      }
      return true
    })
    return { ...state, words: newWords }
  }
  if (action.type === "FILTERMODE") {
    return { ...state, filterMode: action.filterMode }
  }
  return state;
});
// console.log(store.getState());
// //Thay đổi store bằng cách gửi action
// store.dispatch({ type: 'INCREASE' });
// console.log(store.getState());
export default class App extends Component {


  render() {

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Provider store={store}>
          <MainScreen />
        </Provider>

      </SafeAreaView>

    )
  }
}
