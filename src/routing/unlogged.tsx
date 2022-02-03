import 'react-native-gesture-handler';
import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';

import { Colors } from '../../src/core/colors';
import { Home } from '../../src/screens/home';
import { Login } from '../../src/screens/login';
import { Register } from '../../src/screens/register';

const Stack = createStackNavigator();

export const UnloggedStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Group>
      <Stack.Group
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.DARK_GRAY,
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerTintColor: Colors.WHITE,
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
    </Stack.Navigator>
  );
};
