import React, { Component } from 'react'
import { KeyboardAvoidingView, View, Keyboard, StyleSheet, Text } from 'react-native'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import { verifyOtpFailure, verifyOtpSuccess } from '../../redux/actions/otp'
import MobileScreen from '../MobileScreen'
import Header from './Header'
import Button from '../../containers/Button'
import TextInputWithButton from '../../containers/TextInputWithButton'
import OtpBox from '../../containers/OtpBox'
import Styles from '../../Styles'

class OtpInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyboardActive: false
        }
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

    onChangeTextHandler = (text) => {
    }

    onPressHandler = () => {
    }

    changeMobileNumber = () => {
        this.props.navigation.navigate('MobileInput')
    }

    focusPrevious = (key) => {
        console.log(key.nativeEvent.key)
    }

    focusNext = (num) => {
        console.log(num)
    }

    otpTextInput = Array(4).fill()

    render() {
        return (
            <MobileScreen>
                <KeyboardAvoidingView behavior="padding" style={this.state.keyboardActive ? styles.OtpContainerKeyboardActive : styles.OtpContainer}>
                    <View>
                        <Header
                            title={this.state.keyboardActive ? null : "Health"}
                            description="Enter a 4-digit OTP sent on"
                            info={this.props.number}
                        />
                        <View style={this.state.keyboardActive ? styles.InputKeyboadActive : styles.Input}>
                            <View>
                                <Text style={Styles.ContainerStyles.WarningMessage}>
                                    {null}
                                </Text>
                                <TextInputWithButton
                                    style={this.state.showWarning ? { borderColor: "#e34c4c" } : {}}
                                    onChangeText={this.onChangeTextHandler}
                                    keyboardType="numeric"
                                    defaultValue={this.props.number}
                                    editable={false}
                                    title="Change"
                                    onPress={this.changeMobileNumber}
                                />
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 16, paddingRight: 16 }}>
                                {Array(4).fill(0).map((_, index) =>
                                    <OtpBox
                                        onChangeText={(num) => this.focusNext(num)}
                                        onKeyPress={(key) => this.focusPrevious(key)}
                                        key={index}
                                    />
                                )}
                            </View>
                            <View style={{ width: "100%" }}>
                                <Text style={{
                                    textAlign: 'center', fontSize: 13, color: "#212873"
                                }}>Resend OTP</Text>
                            </View>
                        </View>
                    </View>
                    <Button
                        title="Verify mobile number"
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
        ...Styles.OtpStyles.InputDetails
    },
    InputKeyboadActive: {
        ...Styles.OtpStyles.InputDetails,
        ...Styles.OtpStyles.InputDetailsKeyboardActive
    }
})

const mapStateToProps = (state) => {
    return {
        number: state.otpReducer.number
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, null)(withNavigation(OtpInput));