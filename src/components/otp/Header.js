import React from 'react'
import { View, Text } from 'react-native'
import Styles from '../../Styles'

const Header = (props) => {
    return (
        <View style={Styles.OtpStyles.HeaderContainer}>
            {props.title ?
                (<Text style={Styles.OtpStyles.HeaderTitle}>{props.title}</Text>) : null
            }
            <View>
                <Text style={{
                    ...Styles.OtpStyles.HeaderText,
                    ...Styles.OtpStyles.HeaderDescription
                }}>{props.description}</Text>
                <Text style={{
                    ...Styles.OtpStyles.HeaderText,
                    ...Styles.OtpStyles.HeaderInfo
                }}>{props.info}</Text>
            </View>
        </View>
    )
}

export default Header