import React, { Component, PureComponent } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

class Child extends Component {
    shouldComponentUpdate(newProps, newState) {
        if (newProps.onInCrease === this.props.onInCrease || newProps.onDeCrease === this.props.onDeCrease || newProps.onReset === this.props.onReset) {
            return false
        } else {
            return true
        }
    }
    render() {

        console.log(" Render Child");

        return (
            <View style={{
                flexDirection: 'row'
                , justifyContent: 'space-evenly'
                , alignItems: 'center'
            }}>
                <TouchableOpacity
                    onPress={() => this.props.dispatch({ type: 'INCREASE' })}
                    style={{
                        padding: 10,
                        backgroundColor: 'green', borderRadius: 5
                    }}>
                    <Text>InCrease</Text>
                </TouchableOpacity >
                <TouchableOpacity
                    onPress={() => this.props.dispatch({ type: 'DECREASE' })}
                    style={{
                        padding: 10,
                        backgroundColor: 'yellow',
                        borderRadius: 5

                    }}>
                    <Text>DesCrease</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.props.dispatch({ type: 'RESET' })}
                    style={{
                        padding: 10,
                        backgroundColor: 'red',
                        borderRadius: 5
                    }}>
                    <Text>Reset</Text>
                </TouchableOpacity>
            </View >
        )
    }
}
export default connect()(Child);
