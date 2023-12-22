import React, {useEffect} from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {RealmContext, Word} from './models/Word';
import {RootStackParamList} from './utiles/RootStackParams';
import {Category} from './models/Category';

import StackNavigation from './navigation/stack/StackNavigation';
import {Header} from './components/Header';
import {View} from 'react-native';

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
        <StackNavigation />
      </NavigationContainer>
    </View>
  );
}

export default App;
