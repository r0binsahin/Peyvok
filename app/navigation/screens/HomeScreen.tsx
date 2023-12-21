import {StyleSheet, View, ScrollView} from 'react-native';

import CategoryView from '../../components/CategoryView';
import {ICategory} from '../../models/ICategory';
import categoryData from '../../assets/categoryData.json';
import CarouselHolder from '../../components/CarouselHolder';

export const HomeScreen = () => {
  const categories: ICategory[] = categoryData.categoryData;

  return (
    <ScrollView>
      <View style={styles.container}>
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
