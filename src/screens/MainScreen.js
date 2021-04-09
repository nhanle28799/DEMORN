import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';
import screenDimension from '../helpers/screenDimension';
import Word from '../components/Word';
import Filter from '../components/Filter';
import Form from '../components/Form';
import { connect } from 'react-redux';
import { fetchWords, removeWord, toggleWord } from '../redux/slices/wordSlice'
import { addWord } from '../redux/slices/wordSlice';
import { toggleForm } from '../redux/slices/shouldShowFormSlice';
import { setfilterMode } from '../redux/slices/filterModeSlice';
import axios from 'axios';
class MainScreen extends Component {
    componentDidMount() {
        this.props.dispatch(fetchWords());
    }
    onToggleForm = () => {
        this.props.dispatch(toggleForm())
    }
    styleButtonMemorized = (styles, word) => {
        return {
            ...styles.buttonMemorize,
            backgroundColor: word.isMemorized ? 'green' : 'red'
        }
    }
    onToggleWord = (word) => {
        this.props.dispatch(toggleWord(word));
    }
    onRemoveWord = (word) => {
        Alert.alert(
            "Thông báo",
            "Bạn có chắc muốn xóa ?",
            [
                {
                    text: 'Hủy',
                    style: 'cancel'
                },
                {
                    text: 'Xóa',
                    onPress: () => this.props.dispatch(removeWord(word))
                }
            ]
        )
    }
    onAddWord = (newWord, callback) => {
        this.props.dispatch(addWord(newWord))
        callback();
    }
    onSetFilterMode = (filterMode) => {
        this.props.dispatch(setfilterMode((filterMode)))
    }
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
            }}>
                <Form
                    onAddWord={this.onAddWord}
                    onToggleForm={this.onToggleForm}
                    shouldShowForm={this.props.shouldShowForm}
                />
                <Filter
                    onSetFilterMode={this.onSetFilterMode}
                    filterMode={this.props.filterMode}
                />
                {/* <ScrollView>
                    {this.state.words.map(word => this.renderItemWords(word))}
                </ScrollView> */}
                <Word
                    onToggleWord={this.onToggleWord}
                    onRemoveWord={this.onRemoveWord}
                    data={this.props.words}
                    filterMode={this.props.filterMode}
                />
            </View>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        words: state.words,
        filterMode: state.filterMode,
        shouldShowForm: state.shouldShowForm,
    };
};
export default connect(mapStateToProps)(MainScreen);