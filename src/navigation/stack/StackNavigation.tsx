import React from 'react';

import {Dimensions} from 'react-native';

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
  return (
    <Background>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerShown: true,
          header: () => <Header />,
          cardStyleInterpolator: ({current}) => {
            return {
              cardStyle: {
                transform: [
                  {
                    translateX: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [Dimensions.get('window').width, 0],
                    }),
                  },
                ],
              },
            };
          },
          transitionSpec: {
            open: {animation: 'timing', config: {duration: 350}},
            close: {animation: 'timing', config: {duration: 350}},
          },
        }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
        <Stack.Screen name="WordScreen" component={WordScreen} />
        <Stack.Screen name="InfoScreen" component={InfoScreen} />
      </Stack.Navigator>
    </Background>
  );
};
export default StackNavigation;
