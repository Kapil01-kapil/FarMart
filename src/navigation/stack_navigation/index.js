//Imports
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import news from '../../screens/news';
// Sidemenu Dashboard
const StackNavigator = createStackNavigator();

function StackNavigation() {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator screenOptions={{gestureEnabled: false}}>
        <StackNavigator.Screen
          name="news"
          component={news}
          options={{headerShown: false, gesturesEnabled: false}}
        />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation;
