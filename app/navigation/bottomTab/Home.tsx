import {StyleSheet, Text, View} from 'react-native';
import {AudioPlayer} from '../../components/AudioPlayer';
import {RealmContext, Word} from '../../models/Word';
import {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabScreen from './TabScreen';

export const Home = () => {
  const {RealmProvider} = RealmContext;
  const {useQuery, useRealm} = RealmContext;
  const realm = useRealm();
  const words = useQuery(Word) as Realm.Results<Word>;
  useEffect(() => {
    realm.subscriptions.update(mutableSubs => {
      mutableSubs.add(realm.objects(Word));
    });
  }, []);
  useEffect(() => {
    console.log(words);
  });

  return (
    <View style={styles.container}>
      <AudioPlayer words={words} />
      <Text>Hej</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(200, 200, 200, 0.5)',

    width: '100%',
    height: '100%',
  },

  img: {
    width: 50,
    height: 50,
  },
});
