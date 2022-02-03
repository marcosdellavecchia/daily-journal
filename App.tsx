import 'react-native-gesture-handler';
import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import { UnloggedStack } from './src/routing/unlogged';
import { LoggedStack } from './src/routing/logged';
import { NotesStack } from './src/routing/notes';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

const MainStack = createStackNavigator();

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
      <MainStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <MainStack.Screen name="UnloggedStack" component={UnloggedStack} />
        <MainStack.Screen name="LoggedStack" component={LoggedStack} />
        <MainStack.Screen
          name="NoteStack"
          component={NotesStack}
          options={{ presentation: 'modal' }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
