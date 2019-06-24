import React from 'react'
import { TouchableOpacity, Image, View, Text } from 'react-native'
import Styles from '../Styles'

const Button = (props) => {
    onPressHandler = () => {
        if (props.onPress) {
            props.onPress()
        }
    }

    return (
        <TouchableOpacity
            onPress={onPressHandler}
            disabled={false}
            // activeOpacity={this.props.disabled ? 0.3 : 1}
            activeOpacity={1}
        >
            <View style={{ ...Styles.ContainerStyles.Button, ...props.style }}>
                <View style={{ flex: 1 }}>
                    <Text style={Styles.ContainerStyles.ButtonText}>{props.title}</Text>
                </View>
                <View style={{ marginRight: 12 }}>
                    <Image source={props.iconSource} style={{ width: 16, height: 16 }}></Image>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default Button