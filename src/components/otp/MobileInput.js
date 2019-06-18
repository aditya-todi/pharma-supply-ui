import React, { Component } from 'react'
import { KeyboardAvoidingView, View, Keyboard, StyleSheet, Text } from 'react-native'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import MobileScreen from '../MobileScreen'
import { sendOtp } from '../../redux/actions/otp'
import Header from './Header'
import Button from '../../containers/Button'
import TextInputWithButton from '../../containers/TextInputWithButton'
import Styles from '../../Styles'

class MobileInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            validMobileNumber: false,
            showWarning: false,
            number: null,
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

    onChangeTextHandler = (number) => {
        if ((number.length === 10) && !(isNaN(parseInt(number)))) {
            this.setState({
                showWarning: false,
                validMobileNumber: true,
                number: number
            })
        } else {
            this.setState({
                validMobileNumber: false
            })
        }
    }

    onPressHandler = () => {
        if (this.state.validMobileNumber) {
            this.setState({
                showWarning: false,
            })
            this.props.sendOtp(this.state.number)
            console.log(this.props)
            this.props.navigation.navigate('OtpInput')
        } else {
            this.setState({
                showWarning: true
            })
        }
    }

    render() {
        return (
            <MobileScreen>
                <KeyboardAvoidingView behavior="padding" style={this.state.keyboardActive ? styles.OtpContainerKeyboardActive : styles.OtpContainer}>
                    <View>
                        <Header
                            title={this.state.keyboardActive ? null : "Health"}
                            description="Enter your mobile number"
                        />
                        <View style={this.state.keyboardActive ? styles.InputKeyboadActive : styles.Input}>
                            <View>
                                <Text style={Styles.ContainerStyles.WarningMessage}>
                                    {this.state.showWarning ? "Please enter valid mobile number" : null}
                                </Text>
                                <TextInputWithButton
                                    style={this.state.showWarning ? { borderColor: "#e34c4c" } : {}}
                                    placeholder="Enter your mobile number"
                                    onChangeText={this.onChangeTextHandler}
                                    keyboardType="numeric"
                                    default={this.props.number}
                                />
                            </View>
                        </View>
                    </View>
                    <Button
                        title="Continue"
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
        sendOtp: (number) => dispatch(sendOtp(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(MobileInput))
