import React from 'react'
import { View, TextInput, TouchableOpacity, Text } from 'react-native'
import Styles from '../Styles'

const TextInputWithButton = (props) => {
    onPress = () => {
        if (props.onPress) {
            props.onPress()
        }
    }

    return (
        <View style={{
            ...Styles.ContainerStyles.TextInputWithButton,
            ...props.style
        }}>
            <View style={{ flex: 1 }}>
                <TextInput
                    style={{ backgroundColor: 'transparent' }}
                    placeholder={props.placeholder}
                    defaultValue={props.defaultValue}
                    onChangeText={props.onChangeText}
                    keyboardType={props.keyboardType ? props.keyboardType : "default"}
                    editable={props.editable}
                />
            </View>
            <View>
                <TouchableOpacity activeOpacity={1} onPress={onPress}>
                    <Text style={Styles.ContainerStyles.TextInputWithButtonTitle}>{props.title}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default TextInputWithButton;