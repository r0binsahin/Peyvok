import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {HomeScreen} from './HomeScreen';
import {CategoryScreen} from './CategoryScreen';
import {InfoScreen} from './InfoScreen';
import {WordScreen} from './WordScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from './RootStackParams';

const Stack = createStackNavigator<RootStackParamList>();

const StackScreen = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen name="HomeScreen" component={HomeScreen}></Stack.Screen>
      <Stack.Screen
        name="CategoryScreen"
        component={CategoryScreen}></Stack.Screen>
      <Stack.Screen name="InfoScreen" component={InfoScreen}></Stack.Screen>
      <Stack.Screen name="WordScreen" component={WordScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default StackScreen;

const styles = StyleSheet.create({});
