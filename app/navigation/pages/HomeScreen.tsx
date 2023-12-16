import {StyleSheet, Text, View} from 'react-native';
import {AudioPlayer} from '../../components/AudioPlayer';
import {RealmContext, Word} from '../../models/Word';
import {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabScreen from './TabScreen';
import {ScrollView} from 'react-native-gesture-handler';
import {ICategory} from '../../models/ICategory';
import categoryData from '../../assets/categoryData.json';
import CategoryView from '../../components/CategoryView';

export const HomeScreen = () => {
  const {RealmProvider} = RealmContext;
  const {useQuery, useRealm} = RealmContext;
  const realm = useRealm();
  const words = useQuery(Word) as Realm.Results<Word>;
  const categories: ICategory[] = categoryData.categoryData;

  useEffect(() => {
    console.log('hej');
  });

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Home page</Text>
        <View style={styles.categoryContainer}>
          {categories.map((category, index) => (
            <CategoryView key={index} category={category} word={words[index]} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',

    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
