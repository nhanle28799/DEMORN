import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import ItemofWord from './ItemofWord';
import PropTypes from 'prop-types';

export default class Word extends Component {
    static propTypes = {
        data: PropTypes.array,
        filterMode: PropTypes.string,
        onToggleWord: PropTypes.func,
    }
    static defaultPros = {
        data: [],
        filterMode: 'Show_All',
    }
    render() {
        const { data, onToggleWord, onRemoveWord } = this.props;
        return (
            <FlatList
                data={data}
                //KeyExtractor giúp ta nhận ra đảm bảo nếu data này thay đổi thì giúp ta nhận biết được
                //Chủ yếu rằng chắc chắn cái Flatlist sẽ re-render
                keyExtractor={(item, index) => item.id.toString()}//Gía trị sẽ đại diện cho từng dòng mỗi dòng trả về item và vị trí của dòng
                //Dữ liệu tạo ra phải là dữ liệu string
                renderItem={({ item, index }) => <ItemofWord word={item}
                    filterMode={this.props.filterMode}
                    onToggleWord={onToggleWord}
                    onRemoveWord={onRemoveWord} />}

            />

        );

    }
}
