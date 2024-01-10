import React, {useEffect, useState} from 'react';

import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

import StackNavigation from './navigation/stack/StackNavigation';

import {SafeAreaView} from 'react-native-safe-area-context';

import {RealmContext, Word} from './models/Word';
import {Category} from './models/Category';
import {setupTrackPlayer} from './utiles/audioFunctions';

function App(): React.JSX.Element {
  const {useRealm} = RealmContext;
  const realm = useRealm();

  const [isPlayerInitialized, setIsPlayerInitialized] = useState(false);

  const setPlayer = async () => {
    if (!isPlayerInitialized) {
      await setupTrackPlayer();
      setIsPlayerInitialized(true);
    }
  };

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

    setPlayer();
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
