import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from './src/screens/home';
import { LoginEmail } from './src/screens/login/login-email';
import { LoginGoogle } from './src/screens/login/login-google';
import { LoginFacebook } from './src/screens/login/login-facebook';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

const Stack = createNativeStackNavigator();

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
      <Stack.Navigator>
        <Stack.Group screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Group>
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen name="LoginEmail" component={LoginEmail} />
          <Stack.Screen name="LoginGoogle" component={LoginGoogle} />
          <Stack.Screen name="LoginFacebook" component={LoginFacebook} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
