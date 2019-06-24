import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import rootReducer from './src/redux/reducers'
import OtpInput from './src/components/otp/OtpInput'
import MobileInput from './src/components/otp/MobileInput'
import SetupKey from './src/components/otp/SetupKey'

const store = createStore(rootReducer)

const rootStack = createStackNavigator(
  {
    OtpInput: {
      screen: OtpInput,
      title: 'OtpInput'
    },
    MobileInput: {
      screen: MobileInput,
      title: 'MobileInput'
    },
    SetupKey: {
      screen: SetupKey,
      title: 'SetupKey'
    }
  },
  {
    initialRouteName: 'SetupKey',
    defaultNavigationOptions: {
      header: null
    }
  }
)

const AppContainer = createAppContainer(rootStack)

export default class App extends Component {
  constructor(props) {
    super(props)
    store.subscribe(() => console.log(store.getState()))
  }

  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}
