import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import rootReducer from './src/redux/reducers'
import MobileScreen from './src/components/MobileScreen'
import OtpInput from './src/components/otp/OtpInput'
import MobileInput from './src/components/otp/MobileInput'

const store = createStore(rootReducer)

const rootStack = createStackNavigator(
  {
    OtpInput: {
      screen: OtpInput,
      title: 'OtpInput'
    }
      ,
    MobileInput: {
      screen: MobileInput,
      title: 'MobileInput'
    }
  },
  {
    initialRouteName: 'MobileInput',
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
