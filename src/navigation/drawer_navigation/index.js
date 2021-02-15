import React from 'react';
import {Image} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Sidemenu from '../../screens/sidemenu';
import news from '../../screens/news';

const DashboardStack = createStackNavigator();
function DashboardStackFunc() {
  return (
    <DashboardStack.Navigator>
      <DashboardStack.Screen name="news" component={news} />
    </DashboardStack.Navigator>
  );
}

//TODO:- Drawer
const Drawer = createDrawerNavigator();
function AppDrawer() {
  return (
    <Drawer.Navigator
      // drawerType="front"
      drawerContent={(props) => <Sidemenu {...props} />}>
      <Drawer.Screen name="news" component={news} />
    </Drawer.Navigator>
  );
}

export default AppDrawer;
