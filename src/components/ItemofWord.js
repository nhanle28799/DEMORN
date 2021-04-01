import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import screenDimension from '../helpers/screenDimension';
import PropTypes from 'prop-types';
export default class ItemofWord extends Component {
    static propTypes = {
        word: PropTypes.object,
        filterMode: PropTypes.string
        , onToggleWord: PropTypes.func,

    }
    static defaultPros = {
        data: {},
        filterMode: 'Show_All',
    }
    renderItemWords = (word) => {
        const { filterMode, onToggleWord, onRemoveWord } = this.props;
        if (filterMode === 'Show_Forgot' && !word.isMemorized) {
            return null;
        } else if (filterMode === 'Show_Memorized' && word.isMemorized) {
            return null;
        }
        return (
            <View key={word.id}>
                <View style={styles.groupWord}>
                    <View style={styles.groupHorizontal}>
                        <Text style={styles.textEn}>{word.en}</Text>
                        <Text style={styles.textVn}>
                            {word.isMemorized ? '----' : word.vn}
                        </Text>
                    </View>
                    <View style={styles.groupHorizontal}>
                        <TouchableOpacity
                            onPress={() => onToggleWord(word)}
                            style={{
                                ...styles.buttonMemorize,
                                backgroundColor: word.isMemorized ? 'green' : 'red',
                            }}>
                            <Text style={styles.textMemorize}>
                                {word.isMemorized ? 'Forgot' : 'Memorize'}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => onRemoveWord(word)}
                            style={styles.buttonRemove}>
                            <Text style={styles.textRemove}>Remove</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
    render() {
        return this.renderItemWords(this.props.word);
    }
}
const styles = StyleSheet.create({
    groupWord: {
        backgroundColor: '#AAAA',
        height: 130,
        justifyContent: 'space-evenly',
        marginHorizontal: 10,
        marginTop: 10
        , borderRadius: 10,
        shadowRadius: 5,
        shadowOpacity: 100,
        shadowColor: 'red'
    },
    groupHorizontal: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 10,
    },
    textEn: {
        fontSize: 20, color: 'green'
        , alignItems: 'center'
    },
    textVn: {
        fontSize: 20, color: 'red'
    },
    buttonMemorize: {
        padding: 10,
        backgroundColor: 'green'
        , borderRadius: 10
    },
    buttonRemove: {
        padding: 10,
        backgroundColor: 'orange'
        , borderRadius: 10
    },
    textMemorize: {
        color: 'white',
        fontSize: screenDimension.getWidth() / 22,
    },
    textRemove: {
        color: 'darkblue',
        fontSize: screenDimension.getWidth() / 22,
    },
});