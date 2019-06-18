import React, { Component } from 'react'
import { ImageBackground } from 'react-native'
import Styles from '../Styles'

class MobileScreen extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ImageBackground source={require('../../assets/bg.png')} style={Styles.MainStyles.backgroundImage} >
                {this.props.children}
            </ImageBackground>
        )
    }
}

export default MobileScreen;