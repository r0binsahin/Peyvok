import React, {useCallback, useEffect} from 'react';

import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RealmContext, Word} from './app/models/Word';
import {BSON} from 'realm';
import {AudioPlayer} from './app/components/AudioPlayer';
import {IWord} from './app/models/IWord';

const {useQuery, useRealm} = RealmContext;

function App(): React.JSX.Element {
  const realm = useRealm();
  const words = useQuery(Word);

  useEffect(() => {
    realm.subscriptions.update(mutableSubs => {
      mutableSubs.add(realm.objects(Word));
    });
  }, []);

  const data = useCallback(() => {
    realm.write(() => {
      realm.create('Word', {
        _id: new BSON.ObjectID(),
        word: 'zer',
        image:
          'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
        audio:
          'https://drive.google.com/uc?export=download&id=1F5K88Mhmq5x8uXw-ofWXVBXiMl-PPYrh',
        category: 'colors',
      }) as Word;
      realm.create('Word', {
        _id: new BSON.ObjectID(),
        word: 'sor',
        image:
          'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
        audio:
          'https://drive.google.com/uc?export=download&id=1r1h4_jb4xgx2GChfvNuCbPlKY5TYeB8D',
        category: 'colors',
      }) as Word;
      realm.create('Word', {
        _id: new BSON.ObjectID(),
        word: 'spî',
        image:
          'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
        audio:
          'https://drive.google.com/uc?export=download&id=1yx2L-5cyy07_H_JFagcboZXeDx2KAloq',
        category: 'colors',
      }) as Word;

      realm.create('Word', {
        _id: new BSON.ObjectID(),
        word: 'kesk',
        image:
          'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
        audio:
          'https://drive.google.com/uc?export=download&id=1ehSIt-2Hgn5-SVusMmPglqaexywZC7RN',
        category: 'colors',
      }) as Word;

      realm.create('Word', {
        _id: new BSON.ObjectID(),
        word: 'kûçik',
        image:
          'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
        audio:
          'https://drive.google.com/uc?export=download&id=1-Eq2KG0FuPeoNjAvwZGDjm1u8VdIoWU2',
        category: 'animals',
      }) as Word;

      realm.create('Word', {
        _id: new BSON.ObjectID(),
        word: 'pisîk',
        image:
          'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
        audio:
          'https://drive.google.com/uc?export=download&id=1vOk1oYlhsbqOH9ojwN8GIeT6wHkqwkTs',
        category: 'animals',
      }) as Word;

      realm.create('Word', {
        _id: new BSON.ObjectID(),
        word: 'jûjî',
        image:
          'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
        audio:
          'https://drive.google.com/uc?export=download&id=1GpT5mS_Fd9SJzjtH1xGB-N0Q5GpWbf7G',
        category: 'animals',
      }) as Word;

      realm.create('Word', {
        _id: new BSON.ObjectID(),
        word: 'çivîk',
        image:
          'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
        audio:
          'https://drive.google.com/uc?export=download&id=1GvKrlWzSwGAzbgXhjXotKFgxjrGCypOE',
        category: 'animals',
      }) as Word;

      realm.create('Word', {
        _id: new BSON.ObjectID(),
        word: 'sêv',
        image:
          'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
        audio:
          'https://drive.google.com/uc?export=download&id=1AoYH584E2-1jivqPIBopESIJZq_EzCU_',
        category: 'fruits',
      }) as Word;

      realm.create('Word', {
        _id: new BSON.ObjectID(),
        word: 'hirmî',
        image:
          'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
        audio:
          'https://drive.google.com/uc?export=download&id=1VwmoXPD0Mo3JoSpzc_3UY2C-1jcEIj-2',
        category: 'fruits',
      }) as Word;

      realm.create('Word', {
        _id: new BSON.ObjectID(),
        word: 'mûz',
        image:
          'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
        audio:
          'https://drive.google.com/uc?export=download&id=1So_iT2LOzURJHAml8RCQEQucScjxghYd',
        category: 'fruits',
      }) as Word;

      realm.create('Word', {
        _id: new BSON.ObjectID(),
        word: 'trî',
        image:
          'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
        audio:
          'https://drive.google.com/uc?export=download&id=1jIZeSmiKlKAGt_sYqNGLfTx_NUm1RhLJ',
        category: 'fruits',
      }) as Word;

      realm.create('Word', {
        _id: new BSON.ObjectID(),
        word: 'xelek',
        image:
          'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
        audio:
          'https://drive.google.com/uc?export=download&id=1nk0DMtA7t1YEOxq0odwRMJP-I7aNeK9h',
        category: 'geometric forms',
      }) as Word;

      realm.create('Word', {
        _id: new BSON.ObjectID(),
        word: 'gilover',
        image:
          'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
        audio:
          'https://drive.google.com/uc?export=download&id=1zyCZXXptuCuYVNP0_Rr_wYnWh2fP5Xsl',
        category: 'geometric forms',
      }) as Word;

      realm.create('Word', {
        _id: new BSON.ObjectID(),
        word: 'çargoşe',
        image:
          'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
        audio:
          'https://drive.google.com/uc?export=download&id=1uwMdUYHee9PR9VjQYpRlhY6aSslRJMBG',
        category: 'geometric forms',
      }) as Word;

      realm.create('Word', {
        _id: new BSON.ObjectID(),
        word: 'sêgoşe',
        image:
          'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
        audio:
          'https://drive.google.com/uc?export=download&id=1YlhNaIfxq7A9G7FJWY2xdkmDjTA___BS',
        category: 'geometric forms',
      }) as Word;
    });
  }, [realm]);

  useEffect(() => {
    if (words.length === 0) {
      data();
    }
  }, []);

  return (
    <View>
      <View style={styles.container}>
        {words.length > 0 ? (
          <FlatList
            data={words}
            renderItem={({item}) => (
              <View>
                {/*           <Image source={{uri: item.image}} style={styles.img} /> */}
                <Text>{item.word}</Text>
              </View>
            )}
          />
        ) : (
          <TouchableOpacity>
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

  img: {
    width: 50,
    height: 50,
  },
});
export default App;
