import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from '../../utiles/RootStackParams';

import {HomeScreen} from '../screens/HomeScreen';
import {CategoryScreen} from '../screens/CategoryScreen';
import {InfoScreen} from '../screens/InfoScreen';
import {WordScreen} from '../screens/WordScreen';
import {Header} from '../../components/Header';
import Background from '../../components/backgroundComponents/Background';

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigation = () => {
  const [isHeaderShown, setIsHeaderShown] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsHeaderShown(true);
    }, 6000);
  });

  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: isHeaderShown,
        header: () => <Header isHeaderShown={isHeaderShown} />,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
      <Stack.Screen name="WordScreen" component={WordScreen} />
      <Stack.Screen name="InfoScreen" component={InfoScreen} />
    </Stack.Navigator>
  );
};
export default StackNavigation;

const styles = StyleSheet.create({
  cover: {
    flex: 1,
  },
});
