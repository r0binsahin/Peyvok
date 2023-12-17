import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from '../../utiles/RootStackParams';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen} from '../screens/HomeScreen';
import {CategoryScreen} from '../screens/CategoryScreen';
import {InfoScreen} from '../screens/InfoScreen';
import {WordScreen} from '../screens/WordScreen';

const Stack = createStackNavigator<RootStackParamList>();
const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen}></Stack.Screen>
      <Stack.Screen
        name="CategoryScreen"
        component={CategoryScreen}></Stack.Screen>
      <Stack.Screen name="WordScreen" component={WordScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};
export default StackNavigation;

const styles = StyleSheet.create({});
