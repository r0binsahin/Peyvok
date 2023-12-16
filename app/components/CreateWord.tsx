import {BSON} from 'realm';
import {Text, TouchableOpacity, View} from 'react-native';
import {useCallback, useState} from 'react';
import {RealmContext, Word} from '../models/Word';
import categoryData from '../assets/categoryData.json';
import {ICategory} from '../models/ICategory';

export const CreateWords = () => {
  const [isSureToDelete, setIsSureToDelete] = useState(false);
  const {RealmProvider} = RealmContext;
  const {useRealm, useQuery} = RealmContext;
  const realm = useRealm();
  const words = useQuery(Word);
  const categories: ICategory[] = categoryData.categoryData;

  const data = useCallback(() => {
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

  const createCategories = useCallback(() => {
    try {
      realm.write(() => {
        categories.map(category => {
          realm.create('Category', {
            _id: new BSON.ObjectID(),
            imgURL: category.imgURL,
            categoryName: category.categoryName,
            categoryNameKU: category.categoryNameKU,
            categoryAudio: category.categoryAudio,
          });
          console.log('called');
        });
      });
    } catch (error) {
      console.error('An error occurred during the write transaction:', error);
    }
  }, [realm]);

  const deleteData = () => {
    realm.write(() => {
      realm.delete(words);
    });
  };

  return (
    <RealmProvider>
      <View>
        <View>
          <TouchableOpacity onPress={data}>
            <Text>Add new word</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={createCategories}>
            <Text>Add new category</Text>
          </TouchableOpacity>
        </View>
        <View>
          {isSureToDelete ? (
            <TouchableOpacity onPress={deleteData}>
              <Text>Approve to delete all data</Text>
              <TouchableOpacity onPress={() => setIsSureToDelete(false)}>
                <Text>Cancel action</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => setIsSureToDelete(true)}>
              <Text>Delete all words</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </RealmProvider>
  );
};
