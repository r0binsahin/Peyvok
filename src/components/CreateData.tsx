import {BSON} from 'realm';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useCallback, useEffect, useState} from 'react';
import {RealmContext, Word} from '../models/Word';
import categoryData from '../../assets/categoryData.json';
import {ICategory} from '../models/ICategory';
import {Category} from '../models/Category';
import React from 'react';

export const CreateData = () => {
  const [isSureToDelete, setIsSureToDelete] = useState(false);
  const {useRealm, useQuery} = RealmContext;
  const realm = useRealm();
  const words = useQuery(Word);
  const categories: ICategory[] = categoryData.categoryData;

  useEffect(() => {
    realm.subscriptions.update(mutableSubs => {
      mutableSubs.add(realm.objects(Word));
      mutableSubs.add(realm.objects(Category));
    });
  }, []);

  const data = useCallback(() => {
    realm.write(() => {
      realm.create('Word', {
        word: 'zer',
        image:
          'https://drive.google.com/uc?export=download&id=1B0dXYdBdaQyP3dA7QQbVmAmB_ldtJwBl',
        audio:
          'https://drive.google.com/uc?export=download&id=1F5K88Mhmq5x8uXw-ofWXVBXiMl-PPYrh',
        category: 'colors',
      });

      realm.create('Word', {
        word: 'sor',
        image:
          'https://drive.google.com/uc?export=download&id=1azv1KphLu39JIENjCrotEyYGlafHJh1b',
        audio:
          'https://drive.google.com/uc?export=download&id=1r1h4_jb4xgx2GChfvNuCbPlKY5TYeB8D',
        category: 'colors',
      });

      realm.create('Word', {
        word: 'spî',
        image:
          'https://drive.google.com/uc?export=download&id=1XH6Q1-8LUttAzBiai3vRflvvogWkf2J_',
        audio:
          'https://drive.google.com/uc?export=download&id=1yx2L-5cyy07_H_JFagcboZXeDx2KAloq',
        category: 'colors',
      });

      realm.create('Word', {
        word: 'kesk',
        image:
          'https://drive.google.com/uc?export=download&id=1aLCkeCEzCWoTDqEAPVIl_y4Q_0vNvstQ',
        audio:
          'https://drive.google.com/uc?export=download&id=1ehSIt-2Hgn5-SVusMmPglqaexywZC7RN',
        category: 'colors',
      });

      realm.create('Word', {
        word: 'kûçik',
        image:
          'https://drive.google.com/uc?export=download&id=16NeBnPawXQInZmp5RsXrDtKHrLOhCwCJ',
        audio:
          'https://drive.google.com/uc?export=download&id=1-Eq2KG0FuPeoNjAvwZGDjm1u8VdIoWU2',
        category: 'animals',
      });

      realm.create('Word', {
        word: 'pisîk',
        image:
          'https://drive.google.com/uc?export=download&id=1UFYcZe17iOsNQQZ6dy3ijZABCSAjR8ll',
        audio:
          'https://drive.google.com/uc?export=download&id=1vOk1oYlhsbqOH9ojwN8GIeT6wHkqwkTs',
        category: 'animals',
      });

      realm.create('Word', {
        word: 'jûjî',
        image:
          'https://drive.google.com/uc?export=download&id=1HFU_t_iOROAnm9pOYhLCPp5J8_4f6g-L',
        audio:
          'https://drive.google.com/uc?export=download&id=1GpT5mS_Fd9SJzjtH1xGB-N0Q5GpWbf7G',
        category: 'animals',
      });

      realm.create('Word', {
        word: 'çivîk',
        image:
          'https://drive.google.com/uc?export=download&id=1eKwv9zQNPuBKAUMHpt3EOtUB9K_b3iOJ',
        audio:
          'https://drive.google.com/uc?export=download&id=1GvKrlWzSwGAzbgXhjXotKFgxjrGCypOE',
        category: 'animals',
      });

      realm.create('Word', {
        word: 'sêv',
        image:
          'https://drive.google.com/uc?export=download&id=1WBTQfHcGJ4Im6EZ8lOKffyGYVyfASOJA',
        audio:
          'https://drive.google.com/uc?export=download&id=1AoYH584E2-1jivqPIBopESIJZq_EzCU_',
        category: 'fruits',
      });

      realm.create('Word', {
        word: 'hirmî',
        image:
          'https://drive.google.com/uc?export=download&id=1_mQD460K9R9-yQgGrsODddepCxq0IOdu',
        audio:
          'https://drive.google.com/uc?export=download&id=1VwmoXPD0Mo3JoSpzc_3UY2C-1jcEIj-2',
        category: 'fruits',
      });

      realm.create('Word', {
        word: 'mûz',
        image:
          'https://drive.google.com/uc?export=download&id=1M4IWcXrI9sQ5mJU5ncGKe1auKrQ2xLcc',
        audio:
          'https://drive.google.com/uc?export=download&id=1So_iT2LOzURJHAml8RCQEQucScjxghYd',
        category: 'fruits',
      });

      realm.create('Word', {
        word: 'trî',
        image:
          'https://drive.google.com/uc?export=download&id=1Q-4DvUdpmyuyP_oLXAE4Cm4fhjLSW2fy',
        audio:
          'https://drive.google.com/uc?export=download&id=1jIZeSmiKlKAGt_sYqNGLfTx_NUm1RhLJ',
        category: 'fruits',
      });

      realm.create('Word', {
        word: 'xelek',
        image:
          'https://drive.google.com/uc?export=download&id=1tJmdkDi7XDfEtzLDqnOBGigR-QquQTn3',
        audio:
          'https://drive.google.com/uc?export=download&id=1nk0DMtA7t1YEOxq0odwRMJP-I7aNeK9h',
        category: 'shapes',
      });

      realm.create('Word', {
        word: 'gilover',
        image:
          'https://drive.google.com/uc?export=download&id=1zbJsO3HVv1owiJwZaLj7wzoQY2Senr_O',
        audio:
          'https://drive.google.com/uc?export=download&id=1zyCZXXptuCuYVNP0_Rr_wYnWh2fP5Xsl',
        category: 'shapes',
      });

      realm.create('Word', {
        word: 'çargoşe',
        image:
          'https://drive.google.com/uc?export=download&id=1pp17ReWfl6xuF78Po-9BiVBFCRidgpJv',
        audio:
          'https://drive.google.com/uc?export=download&id=1uwMdUYHee9PR9VjQYpRlhY6aSslRJMBG',
        category: 'shapes',
      });

      realm.create('Word', {
        word: 'sêgoşe',
        image:
          'https://drive.google.com/uc?export=download&id=1maQ_-l7dARoOT_NXZHOSg5imYYjmDBmL',
        audio:
          'https://drive.google.com/uc?export=download&id=1YlhNaIfxq7A9G7FJWY2xdkmDjTA___BS',
        category: 'shapes',
      });
    });

    setIsSureToDelete(false);
  }, [realm]);

  const createCategories = useCallback(() => {
    try {
      realm.write(() => {
        categories.map(category => {
          realm.create('Category', {
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
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={data}>
          <Text style={styles.buttonText}>Add new word</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={createCategories}>
          <Text style={styles.buttonText}>Add new category</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        {isSureToDelete ? (
          <View style={styles.doubleButtonContainer}>
            <TouchableOpacity style={styles.approveButton} onPress={deleteData}>
              <Text style={styles.buttonText}>Approve to delete all data</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => setIsSureToDelete(false)}>
              <Text style={styles.cancelText}>Cancel action</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            style={styles.button}
            onPress={() => setIsSureToDelete(true)}>
            <Text style={styles.buttonText}>Delete all words</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginBottom: 20,
  },
  doubleButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  approveButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  cancelButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  cancelText: {
    color: 'white',
    textAlign: 'center',
  },
});
