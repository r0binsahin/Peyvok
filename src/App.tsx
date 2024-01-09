import React, {useEffect} from 'react';

import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

import StackNavigation from './navigation/stack/StackNavigation';

import {SafeAreaView} from 'react-native-safe-area-context';

import {RealmContext, Word} from './models/Word';
import {Category} from './models/Category';

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
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <NavigationContainer theme={transparentTheme}>
        <StackNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
