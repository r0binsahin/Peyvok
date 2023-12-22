import React, {useEffect} from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {RealmContext, Word} from './models/Word';
import {RootStackParamList} from './utiles/RootStackParams';
import {Category} from './models/Category';
import TopTab from './navigation/topTab/TopTab';
import StackNavigation from './navigation/stack/StackNavigation';

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
    <NavigationContainer>
      <TopTab />
    </NavigationContainer>
  );
}

export default App;
