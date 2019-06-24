import { StyleSheet } from 'react-native'

const fontColor = "#212873"
const fontColorDark = "#161b20"
const backgroundLight = "#ffffff"
const backgroundDark = "#212873"

const OtpStyles = StyleSheet.create({
    OtpContainer: {
        marginLeft: "10%",
        marginTop: 70,
        marginBottom: 16,
        justifyContent: 'space-between'
    },
    OtpContainerKeyboadActive: {
        marginTop: 30,
        justifyContent: 'space-around'
    },
    HeaderContainer: {
        marginBottom: 10
    },
    HeaderTitle: {
        fontSize: 32,
        color: fontColor
    },
    HeaderText: {
        fontWeight: "500",
        fontStyle: "normal",
        lineHeight: 28,
        letterSpacing: 0
    },
    HeaderDescription: {
        fontSize: 17,
        color: fontColor
    },
    HeaderInfo: {
        fontSize: 15,
        color: fontColorDark
    },
    InputDetails: {
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 8,
        paddingBottom: 20,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        backgroundColor: backgroundLight,
        height: 290,
        justifyContent: 'space-between',
    },
    InputDetailsKeyboardActive: {
        height: 220
    }
})

const MainStyles = StyleSheet.create({
    backgroundImage: {
        width: null,
        height: null,
        flex: 1
    },
    keyboadAvoidingContainer: {
        flex: 1
    }
})

const ContainerStyles = StyleSheet.create({
    Button: {
        height: 40,
        borderRadius: 2,
        backgroundColor: backgroundDark,
        flexDirection: 'row',
        alignItems: 'center'
    },
    ButtonText: {
        color: backgroundLight,
        textAlign: 'center',
        fontSize: 17,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#ffffff"
    },
    TextInputWithButton: {
        height: 40,
        padding: 10,
        borderRadius: 4,
        backgroundColor: "#ffffff",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#b0bac5",
        flexDirection: 'row',
        alignItems: 'center'
    },
    TextInputWithButtonTitle: {
        fontSize: 13,
        fontWeight: "500",
        fontStyle: "normal",
        color: "#212873"
    },
    WarningMessage: {
        fontSize: 14,
        color: "#e34c4c",
        paddingLeft: 12,
        paddingBottom: 2
    },
    OtpBox: {
        flexBasis: "20%"
    },
    OtpBoxBar: {
        width: "100%",
        height: 4,
        borderRadius: 2,
        backgroundColor: "#b0bac5"
    },
    OtpBoxInput: {
        fontSize: 15,
        color: fontColorDark,
        backgroundColor: 'transparent',
        textAlign: 'center'
    }
})

export default {
    MainStyles,
    OtpStyles,
    ContainerStyles
}