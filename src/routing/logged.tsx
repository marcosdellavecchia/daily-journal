import React, { FunctionComponent } from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import { Journal } from '../screens/journal';
import { Settings } from '../screens/settings';
import { CreateNote } from '../screens/create-note';
import { Colors } from '../core/colors';
import { ViewNote } from '../screens/view-note';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Log out"
        onPress={() =>
          props.navigation.reset({
            index: 0,
            routes: [{ name: 'UnloggedStack' }],
          })
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
          backgroundColor: Colors.DARK_GRAY,
        },
        headerTintColor: Colors.WHITE,
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
        name="CreateNote"
        component={CreateNote}
        options={{ title: 'Create Note' }}
      />
      <Drawer.Screen
        name="ViewNote"
        component={ViewNote}
        options={{ title: 'View Note' }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{ title: 'Settings' }}
      />
    </Drawer.Navigator>
  );
};
