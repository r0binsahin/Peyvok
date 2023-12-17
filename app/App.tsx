import React, {useEffect} from 'react';

import {View} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {HomeScreen} from './navigation/screens/HomeScreen';
import {CategoryScreen} from './navigation/screens/CategoryScreen';
import {WordScreen} from './navigation/screens/WordScreen';
import {InfoScreen} from './navigation/screens/InfoScreen';

import {RealmContext, Word} from './models/Word';
import {RootStackParamList} from './utiles/RootStackParams';
import {Category} from './models/Category';

const Stack = createStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  const {useRealm} = RealmContext;
  const realm = useRealm();

  useEffect(() => {
    realm.subscriptions.update(mutableSubs => {
      mutableSubs.add(realm.objects(Word));
      mutableSubs.add(realm.objects(Category));
    });
  }, []);

  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="HomeScreen"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="HomeScreen" component={HomeScreen}></Stack.Screen>
          <Stack.Screen
            name="CategoryScreen"
            component={CategoryScreen}></Stack.Screen>
          <Stack.Screen name="InfoScreen" component={InfoScreen}></Stack.Screen>
          <Stack.Screen name="WordScreen" component={WordScreen}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default App;
