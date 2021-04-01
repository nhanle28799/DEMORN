import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Child from './Child';
import { connect } from 'react-redux';

class Box extends Component {
    render() {
        return (
            <View style={{ justifyContent: 'center', flex: 1 }}>
                <Text
                    style={{
                        alignSelf: 'center',
                        color: 'red',
                        fontSize: 20,
                        marginBottom: 10,
                    }}>
                    Count = {this.props.count}
                </Text>
                <Child />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return { count: state };
};

export default connect(mapStateToProps)(Box);