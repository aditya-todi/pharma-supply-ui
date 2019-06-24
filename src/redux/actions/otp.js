import * as types from '../actionTypes/otp'

export const sendOtp = (number) => {
    return {
        type: types.SEND_OTP,
        number
    }
}

export const verifyOtpSuccess = () => {
    return {
        type: types.VERIFY_OTP_SUCCESS
    }
}

export const verifyOtpFailure = () => {
    return {
        type: types.VERIFY_OTP_FAILURE
    }
}

export const verifyKeySuccess = () => {
    return {
        type: types.VERIFY_KEY_SUCCESS
    }
}

export const verifyKeyFailure = () => {
    return {
        type: types.VERIFY_KEY_FAILURE
    }
}