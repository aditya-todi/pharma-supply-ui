import React, { Component } from 'react'
import MobileInput from './MobileInput'
import OtpInput from './OtpInput'

const Otp = (props) => {
    return (
        <View>
            {props.otp === true ? <OtpInput /> : <MobileInput />}
        </View>
    )
}

export default Otp