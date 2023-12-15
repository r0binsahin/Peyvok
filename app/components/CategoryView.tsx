import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ICategory} from '../models/ICategory';

interface ICategoryViewProps {
  category: ICategory;
}

const CategoryView = ({category}: ICategoryViewProps) => {
  return (
    <View style={styles.imgContainer}>
      <Image
        style={styles.img}
        source={{
          uri: category.imgURL,
        }}
      />

      <View style={styles.textBox}>
        <Text style={styles.text}>{category.categoryName}</Text>
      </View>
    </View>
  );
};

export default CategoryView;

const styles = StyleSheet.create({
  imgContainer: {
    backgroundColor: '#ff0044',
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },

  img: {
    width: 125,
    height: 125,
    resizeMode: 'cover',
  },
  textBox: {
    display: 'flex',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
    margin: 20,
  },
});
