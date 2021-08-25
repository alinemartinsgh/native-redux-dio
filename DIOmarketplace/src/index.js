import React from 'react';
import 'react-native-gesture-handler'
import { StatusBar } from 'react-native'
import { Provider } from 'react-redux'

import Routes from './routes';
import store from './store'

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor="#312E38" />
      <Routes />
    </Provider>
  )
}
