import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {useEffect} from 'react';

import {RealmContext, Word} from '../../models/Word';
import CategoryView from '../../components/CategoryView';

import {ICategory} from '../../models/ICategory';
import categoryData from '../../assets/categoryData.json';

export const HomeScreen = () => {
  const {useQuery, useRealm} = RealmContext;
  const realm = useRealm();
  const words = useQuery(Word) as Realm.Results<Word>;
  const categories: ICategory[] = categoryData.categoryData;

  useEffect(() => {});

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Home page</Text>
        <View style={styles.categoryContainer}>
          {categories.map((category, index) => (
            <CategoryView key={index} category={category} />
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
