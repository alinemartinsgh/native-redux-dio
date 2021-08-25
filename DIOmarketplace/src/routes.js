import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import FeatherIcon from "react-native-vector-icons/Feather";

import Catalogo from './pages/Catalogo';
import Header from './components/Header';
import Cart from "./pages/Cart";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          cardStyle: { backgroundColor: '#313746' },
        }}
        initialRouteName='Catalog'
      >
        <Stack.Screen
          name="Catalog"
          component={Catalogo}
          options={{
            headerShown: true,
            headerTransparent: true,
            headerTitleAlign: 'center',
            headerTitle: () => <Header />
          }}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{
            headerShown: true,
            headerTransparent: true,
            headerTitleAlign: 'center',
            headerTitle: () => <Header />,
            headerBackTitleVisibility: false,
            headerLeftContainerStyle: {
              marginLeft: 20,
            },
            headerBackImage: () => (
              <FeatherIcon name="chevron-right" size={24} color="#F3F9FF" />

            )
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

