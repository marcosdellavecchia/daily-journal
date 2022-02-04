import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { useAuthentication } from '../utils/hooks/useAuthentication';
import { LoggedStack } from './logged';
import { NotesStack } from './notes';
import { UnloggedStack } from './unlogged';

const RootStack = createStackNavigator();

export const RootNavigation = () => {
  const { user } = useAuthentication();

  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {!user ? (
        <RootStack.Screen name="UnloggedStack" component={UnloggedStack} />
      ) : (
        <>
          <RootStack.Screen name="LoggedStack" component={LoggedStack} />
          <RootStack.Screen
            name="NoteStack"
            component={NotesStack}
            options={{ presentation: 'modal' }}
          />
        </>
      )}
    </RootStack.Navigator>
  );
};
