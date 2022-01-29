import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { Platform } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Colors } from './src/core/colors';
import { Home } from './src/screens/home';
import { Login } from './src/screens/login';
import { Register } from './src/screens/register';
import { Dashboard } from './src/routing/dashboard';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Group screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Group>
        <Stack.Group
          screenOptions={{
            headerStyle: {
              backgroundColor:
                Platform.OS === 'ios' ? Colors.DARK_GRAY : Colors.ACCENT,
            },
            headerTintColor:
              Platform.OS === 'ios' ? Colors.WHITE : Colors.BLACK,
            headerBackTitleVisible: false,
          }}
        >
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: 'Log in' }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ title: 'Register new account' }}
          />
        </Stack.Group>
        <Stack.Group screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Dashboard" component={Dashboard} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
