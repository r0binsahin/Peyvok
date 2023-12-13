import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from './Home';
import {CategoryPage} from './CategoryPage';
import {InfoPage} from './InfoPage';
import {WordPage} from './WordPage';

const Tab = createBottomTabNavigator();

const TabScreen = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={Home}></Tab.Screen>
      <Tab.Screen name="CategoryPage" component={CategoryPage}></Tab.Screen>
      <Tab.Screen name="InfoPage" component={InfoPage}></Tab.Screen>
      <Tab.Screen name="WordPage" component={WordPage}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default TabScreen;

const styles = StyleSheet.create({});
