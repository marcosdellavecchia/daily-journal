import React, { FunctionComponent } from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';

import { CreateNote } from '../screens/create-note';
import { ViewNote } from '../screens/view-note';
import { Colors } from '../core/colors';

const Stack = createStackNavigator();

export const NotesStack: FunctionComponent = () => {
  return (
    <Stack.Navigator
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
        name="CreateNote"
        component={CreateNote}
        options={{ title: 'Create Note' }}
      />
      <Stack.Screen
        name="ViewNote"
        component={ViewNote}
        options={{ title: 'View Note' }}
      />
    </Stack.Navigator>
  );
};
