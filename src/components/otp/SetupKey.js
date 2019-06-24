import React, { Component } from 'react'
import { View, KeyboardAvoidingView, StyleSheet, Keyboard, Image, Text } from 'react-native'
import { connect } from 'react-redux'
import { verifyKeyFailure, verifyKeySuccess } from '../../redux/actions/otp'
import MobileScreen from '../MobileScreen'
import Header from './Header'
import Button from '../../containers/Button'
import OtpBox from '../../containers/OtpBox'
import Styles from '../../Styles'

class SetupKey extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyboardActive: false,
            confirmation: false
        };
    }

    componentDidMount() {
        this.keyboardDidShowListener =
            Keyboard.addListener('keyboardDidShow', this._keyboardDidShowHandler)
        this.keyboardDidHideListener =
            Keyboard.addListener('keyboardDidHide', this._keyboardDidHideHandler)
    }

    componentWillUnmount() {
        this.keyboardDidHideListener.remove()
        this.keyboardDidShowListener.remove()
    }

    _keyboardDidShowHandler = () => {
        this.setState({ keyboardActive: true })
    }

    _keyboardDidHideHandler = () => {
        this.setState({ keyboardActive: false })
    }

    onPressHandler = () => {
        let key = this.setupKeyInput.join("").length
        console.log(this.setupKeyInputRefs)
        if (this.state.confirmation) this.props.verifyKey(key)
        else {
            if (key !== 4) alert('Enter Valid Key')
            else {
                alert('Verify Key')
                this.setState({
                    confirmation: true
                })
            }
        }
    }

    setupKeyInput = Array(4).fill()
    setupKeyInputRefs = Array(4).fill()

    render() {
        return (
            <MobileScreen>
                <KeyboardAvoidingView behavior="padding" style={this.state.keyboardActive ? styles.OtpContainerKeyboardActive : styles.OtpContainer}>
                    <View>
                        <Header
                            title={this.state.keyboardActive ? null : "Health"}
                            description="Setup a 4-digit passcode."
                            info="This code is needed to login again."
                        />
                        <View style={this.state.keyboardActive ? styles.InputKeyboadActive : styles.Input}>
                            <View style={{ margin: 'auto' }}>
                                <Image source={require('../../../assets/bg.png')} style={{ width: 50, height: 50 }} />
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 16, paddingRight: 16 }}>
                                {this.setupKeyInput.map((_, index) =>
                                    <OtpBox
                                        onChangeText={(num) => this.setupKeyInput[index] = num}
                                        ref={this.setupKeyInputRefs[index]}
                                        key={index}
                                    />
                                )}
                            </View>
                            <View style={{ width: "100%" }}>
                                <Text style={{
                                    textAlign: 'center', fontSize: 13, color: "#212873"
                                }}>{this.state.confirmation ? "Forgot Passcode?" : null}</Text>
                            </View>
                        </View>
                    </View>
                    <Button
                        title={this.state.confirmation ? "Login" : "Setup Key"}
                        iconSource={require('../../../assets/right.png')}
                        style={{ marginRight: 12 }}
                        onPress={this.onPressHandler}
                    />
                </KeyboardAvoidingView>
            </MobileScreen>
        );
    }
}

const styles = StyleSheet.create({
    OtpContainer: {
        ...Styles.MainStyles.keyboadAvoidingContainer,
        ...Styles.OtpStyles.OtpContainer,
    },
    OtpContainerKeyboardActive: {
        ...Styles.MainStyles.keyboadAvoidingContainer,
        ...Styles.OtpStyles.OtpContainer,
        ...Styles.OtpStyles.OtpContainerKeyboadActive
    },
    Input: {
        ...Styles.OtpStyles.InputDetails,
        justifyContent: 'space-around'
    },
    InputKeyboadActive: {
        ...Styles.OtpStyles.InputDetails,
        ...Styles.OtpStyles.InputDetailsKeyboardActive
    }
})

const mapStateToProps = (state) => {

}

const mapDispatchToProps = (dispatch) => {
    return {
        verifyKey: (key) => {
            if (key === "1111") dispatch(verifyKeySuccess())
            else dispatch(verifyKeyFailure())
        }
    }
}

export default connect(null, mapDispatchToProps)(SetupKey);