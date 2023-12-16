import React, {useEffect} from 'react';

import {View} from 'react-native';
import {RealmContext, Word} from './models/Word';

import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from './navigation/pages/RootStackParams';
import {HomeScreen} from './navigation/pages/HomeScreen';
import {InfoScreen} from './navigation/pages/InfoScreen';
import {CategoryScreen} from './navigation/pages/CategoryScreen';
import {WordScreen} from './navigation/pages/WordScreen';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  const {useRealm} = RealmContext;
  const realm = useRealm();

  useEffect(() => {
    realm.subscriptions.update(mutableSubs => {
      mutableSubs.add(realm.objects(Word));
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
