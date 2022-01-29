import React, { FunctionComponent } from 'react';
import { Platform } from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import { Journal } from '../screens/journal';
import { Settings } from '../screens/settings';
import { Colors } from '../core/colors';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Log out"
        onPress={() =>
          props.navigation.reset({ index: 0, routes: [{ name: 'Home' }] })
        }
        inactiveTintColor={Colors.WHITE}
      />
    </DrawerContentScrollView>
  );
}

export const LoggedStack: FunctionComponent = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerStyle: {
          backgroundColor:
            Platform.OS === 'ios' ? Colors.DARK_GRAY : Colors.ACCENT,
        },
        headerTintColor: Platform.OS === 'ios' ? Colors.WHITE : Colors.BLACK,
        drawerActiveTintColor: `${Colors.ACCENT}`,
        drawerInactiveTintColor: `${Colors.WHITE}`,
        drawerStyle: {
          backgroundColor: Colors.BLACK,
        },
      }}
    >
      <Drawer.Screen
        name="Journal"
        component={Journal}
        options={{ title: 'Journal' }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{ title: 'Settings' }}
      />
    </Drawer.Navigator>
  );
};
