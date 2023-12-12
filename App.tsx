import React, {useCallback, useEffect} from 'react';

import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RealmContext, Word} from './app/models/Word';
import {BSON} from 'realm';
import {AudioPlayer} from './app/components/AudioPlayer';

const {useQuery, useRealm} = RealmContext;

function App(): React.JSX.Element {
  const realm = useRealm();
  const words = useQuery(Word);

  useEffect(() => {
    realm.subscriptions.update(mutableSubs => {
      mutableSubs.add(realm.objects(Word));
    });
  }, []);

  const addWords = useCallback(() => {
    realm.write(() => {
      realm.create('Word', {
        _id: new BSON.ObjectID(),
        word: 'test word',
        image: 'image',
        audio: 'audio',
        category: 'category',
      }) as Word;
      realm.create('Word', {
        _id: new BSON.ObjectID(),
        word: 'test word 2',
        image: 'image 2',
        audio: 'audio 2',
        category: 'category 2',
      }) as Word;
      realm.create('Word', {
        _id: new BSON.ObjectID(),
        word: 'test word 3',
        image: 'image 3',
        audio: 'audio 3',
        category: 'category 3',
      }) as Word;
    });
  }, [realm]);

  useEffect(() => {
    if (words.length === 0) {
      addWords();
    }
  }, []);

  return (
    <View>
      <View style={styles.container}>
        {words.length > 0 ? (
          <FlatList
            data={words}
            renderItem={({item}) => <Text>{item.word}</Text>}
          />
        ) : (
          <TouchableOpacity onPress={addWords}>
            <Text>New word</Text>
          </TouchableOpacity>
        )}
      </View>
      <View>
        <AudioPlayer />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(200, 200, 200, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;
