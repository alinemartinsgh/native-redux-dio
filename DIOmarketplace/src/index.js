import React from 'react';
import 'react-native-gesture-handler'
import { StatusBar } from 'react-native'

import Routes from './routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#312E38" />
      <Routes />
    </>
  )
}
