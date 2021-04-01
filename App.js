import React, { Component } from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import Box from './src/components/Box'
import Filter from './src/components/Filter'
import Form from './src/components/Form'
import MainScreen from './src/screens/MainScreen';
import { combineReducers, createStore } from 'redux'
import { connect, Provider } from 'react-redux';
import ItemofWord from './src/components/ItemofWord'
import { func } from 'prop-types'
import store from './src/redux/store'






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





