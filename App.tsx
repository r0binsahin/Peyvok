import React, {useEffect} from 'react';

import {StyleSheet, View} from 'react-native';
import {RealmContext, Word} from './app/models/Word';

import {AudioPlayer} from './app/components/AudioPlayer';

function App(): React.JSX.Element {
  const {useQuery, useRealm} = RealmContext;
  const realm = useRealm();
  const words = useQuery(Word) as Realm.Results<Word>;

  useEffect(() => {
    realm.subscriptions.update(mutableSubs => {
      mutableSubs.add(realm.objects(Word));
    });
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <AudioPlayer words={words} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'red',
    justifyContent: 'center',
  },

  img: {
    width: 50,
    height: 50,
  },
});
export default App;
