import React from 'react';
import {StyleSheet} from 'react-native';

import {InfoScreen} from '../screens/InfoScreen';
import StackNavigation from '../stack/StackNavigation';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {RootStackParamList} from '../../utiles/RootStackParams';

const Top = createMaterialTopTabNavigator<RootStackParamList>();

const TopTab = () => {
  return (
    <Top.Navigator>
      <Top.Screen name="Home" component={StackNavigation} />
      <Top.Screen name="Info" component={InfoScreen} />
    </Top.Navigator>
  );
};

export default TopTab;

const styles = StyleSheet.create({});
