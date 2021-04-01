import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';
import screenDimension from '../helpers/screenDimension';
import Word from '../components/Word';
import Filter from '../components/Filter';
import Form from '../components/Form';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/reducers/actions/actionCreators'
class MainScreen extends Component {


    onToggleForm = () => {
        this.props.toggleForm()
    }
    styleButtonMemorized = (styles, word) => {
        return {


            ...styles.buttonMemorize,
            backgroundColor: word.isMemorized ? 'green' : 'red'


        }
    }
    onToggleWord = (word) => {
        this.props.toggleWord(word)
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
                    onPress: () => this.props.removeWord(word)
                }
            ]
        )

    }

    onAddWord = (newWord, callback) => {
        this.props.addWord(newWord)
        callback();

    }
    onSetFilterMode = (filterMode) => {
        this.props.setFilterMode(filterMode)
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

export default connect(mapStateToProps, actionCreators)(MainScreen);