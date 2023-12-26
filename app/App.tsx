import React, {useEffect} from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

import {RealmContext, Word} from './models/Word';
import {RootStackParamList} from './utiles/RootStackParams';
import {Category} from './models/Category';

import StackNavigation from './navigation/stack/StackNavigation';
import {Header} from './components/Header';
import {Dimensions, View} from 'react-native';
import Background from './components/Background';

const Stack = createStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  const {useRealm} = RealmContext;
  const realm = useRealm();

  const transparentTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent',
    },
  };

  useEffect(() => {
    realm.subscriptions.update(mutableSubs => {
      mutableSubs.add(realm.objects(Word));
      mutableSubs.add(realm.objects(Category));
    });
  }, []);

  return (
    <NavigationContainer theme={transparentTheme}>
      <StackNavigation />
    </NavigationContainer>
  );
}

export default App;
