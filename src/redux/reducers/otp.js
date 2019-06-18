import * as types from '../actionTypes/otp'

const inittialState = {
    number: null,
    otpVerified: false,
    verificationErr: false
}

const otpReducer = (state = inittialState, action) => {
    switch (action.type) {
        case types.SEND_OTP:
            console.log("IN ACTION SEND OTP")
            return {
                ...state,
                number: action.number,
                otpVerified: false,
                verificationErr: false
            }
        case types.VERIFY_OTP_SUCCESS:
            console.log("IN ACTION SUCCESS OTP")
            return {
                ...state,
                otpVerified: true,
                verificationErr: false
            }
        case types.VERIFY_OTP_SUCCESS:
            console.log("IN ACTION FALIURE OTP")
            return {
                ...state,
                otpVerified: false,
                verificationErr: true
            }
        default:
            return state
    }
}

export default otpReducer