import React, { FunctionComponent } from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { getAuth, signOut } from 'firebase/auth';

import { Journal } from '../screens/journal';
import { Settings } from '../screens/settings';
import { Colors } from '../core/colors';

const auth = getAuth();

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Log out"
        onPress={() => signOut(auth)}
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
          backgroundColor: Colors.BLACK,
          shadowColor: 'transparent',
        },
        headerTintColor: Colors.WHITE,
        drawerActiveTintColor: `${Colors.ACCENT}`,
        drawerInactiveTintColor: `${Colors.WHITE}`,
        drawerStyle: {
          backgroundColor: Colors.BLACK,
        },
      }}
    >
      <Drawer.Screen name="Journal" component={Journal} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
};
