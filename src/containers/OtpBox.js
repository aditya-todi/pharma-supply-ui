import React, { Component } from 'react'
import { View, TextInput } from 'react-native'
import Styles from '../Styles'

class OtpBox extends Component {
    render() {
        return (
            <View style={Styles.ContainerStyles.OtpBox}>
                <View style={{ paddingBottom: 10 }}>
                    <TextInput
                        style={Styles.ContainerStyles.OtpBoxInput}
                        defaultValue={this.props.defaultValue}
                        maxLength={1}
                        keyboardType="numeric"
                        onChangeText={this.props.onChangeText}
                        onKeyPress={this.props.onKeyPress}
                        ref={input => this.props.ref = input}
                        autoCorrect={false}
                    />
                </View>
                <View style={Styles.ContainerStyles.OtpBoxBar}></View>
            </View >
        )
    }
}

export default OtpBox;