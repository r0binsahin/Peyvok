import React, {useCallback, useEffect} from 'react';

import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Category, RealmContext, Word} from './models/Word';

import {AudioPlayer} from './components/AudioPlayer';
import {BSON} from 'realm';

function App(): React.JSX.Element {
  const {useQuery, useRealm, useObject} = RealmContext;
  const realm = useRealm();
  const words = useQuery(Word) as Realm.Results<Word>;

  useEffect(() => {
    realm.subscriptions.update(mutableSubs => {
      mutableSubs.add(realm.objects(Word));
    });
  }, []);

  const createWord = useCallback(() => {
    realm.write(() => {
      realm.create('Word', {
        _id: new BSON.ObjectID(),
        word: 'zer',
        image:
          'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
        audio:
          'https://drive.google.com/uc?export=media&id=1F5K88Mhmq5x8uXw-ofWXVBXiMl-PPYrh',
        category: 'colors',
      });

      realm.create('Word', {
        _id: new BSON.ObjectID(),
        word: 'sor',
        image:
          'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
        audio:
          'https://drive.google.com/uc?export=media&id=1r1h4_jb4xgx2GChfvNuCbPlKY5TYeB8D',
        category: 'colors',
      });

      realm.create('Word', {
        _id: new BSON.ObjectID(),
        word: 'spî',
        image:
          'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
        audio:
          'https://drive.google.com/uc?export=media&id=1yx2L-5cyy07_H_JFagcboZXeDx2KAloq',
        category: 'colors',
      });

      realm.create('Word', {
        _id: new BSON.ObjectID(),
        word: 'kesk',
        image:
          'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
        audio:
          'https://drive.google.com/uc?export=media&id=1ehSIt-2Hgn5-SVusMmPglqaexywZC7RN',
        category: 'colors',
      });

      realm.create('Word', {
        _id: new BSON.ObjectID(),
        word: 'kûçik',
        image:
          'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
        audio:
          'https://drive.google.com/uc?export=media&id=1-Eq2KG0FuPeoNjAvwZGDjm1u8VdIoWU2',
        category: 'animals',
      });

      realm.create('Word', {
        _id: new BSON.ObjectID(),
        word: 'pisîk',
        image:
          'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
        audio:
          'https://drive.google.com/uc?export=media&id=1vOk1oYlhsbqOH9ojwN8GIeT6wHkqwkTs',
        category: 'animals',
      });

      realm.create('Word', {
        _id: new BSON.ObjectID(),
        word: 'jûjî',
        image:
          'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
        audio:
          'https://drive.google.com/uc?export=media&id=1GpT5mS_Fd9SJzjtH1xGB-N0Q5GpWbf7G',
        category: 'animals',
      });

      realm.create('Word', {
        _id: new BSON.ObjectID(),
        word: 'çivîk',
        image:
          'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
        audio:
          'https://drive.google.com/uc?export=media&id=1GvKrlWzSwGAzbgXhjXotKFgxjrGCypOE',
        category: 'animals',
      });

      realm.create('Word', {
        _id: new BSON.ObjectID(),
        word: 'sêv',
        image:
          'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
        audio:
          'https://drive.google.com/uc?export=media&id=1AoYH584E2-1jivqPIBopESIJZq_EzCU_',
        category: 'fruits',
      });

      realm.create('Word', {
        _id: new BSON.ObjectID(),
        word: 'hirmî',
        image:
          'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
        audio:
          'https://drive.google.com/uc?export=media&id=1VwmoXPD0Mo3JoSpzc_3UY2C-1jcEIj-2',
        category: 'fruits',
      });

      realm.create('Word', {
        _id: new BSON.ObjectID(),
        word: 'mûz',
        image:
          'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
        audio:
          'https://drive.google.com/uc?export=media&id=1So_iT2LOzURJHAml8RCQEQucScjxghYd',
        category: 'fruits',
      });

      realm.create('Word', {
        _id: new BSON.ObjectID(),
        word: 'trî',
        image:
          'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
        audio:
          'https://drive.google.com/uc?export=media&id=1jIZeSmiKlKAGt_sYqNGLfTx_NUm1RhLJ',
        category: 'fruits',
      });

      realm.create('Word', {
        _id: new BSON.ObjectID(),
        word: 'xelek',
        image:
          'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
        audio:
          'https://drive.google.com/uc?export=media&id=1nk0DMtA7t1YEOxq0odwRMJP-I7aNeK9h',
        category: 'shapes',
      });

      realm.create('Word', {
        _id: new BSON.ObjectID(),
        word: 'gilover',
        image:
          'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
        audio:
          'https://drive.google.com/uc?export=media&id=1zyCZXXptuCuYVNP0_Rr_wYnWh2fP5Xsl',
        category: 'shapes',
      });

      realm.create('Word', {
        _id: new BSON.ObjectID(),
        word: 'çargoşe',
        image:
          'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
        audio:
          'https://drive.google.com/uc?export=media&id=1uwMdUYHee9PR9VjQYpRlhY6aSslRJMBG',
        category: 'shapes',
      });

      realm.create('Word', {
        _id: new BSON.ObjectID(),
        word: 'sêgoşe',
        image:
          'https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg',
        audio:
          'https://drive.google.com/uc?export=media&id=1YlhNaIfxq7A9G7FJWY2xdkmDjTA___BS',
        category: 'shapes',
      });
    });
  }, [realm]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity onPress={createWord}>
          <Text>create words</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            realm.write(() => {
              realm.deleteAll();
            });
          }}>
          <Text>delete</Text>
        </TouchableOpacity>

        <AudioPlayer words={words} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    padding: 60,
    paddingBottom: 0,
    height: '100%',
  },
});
export default App;
