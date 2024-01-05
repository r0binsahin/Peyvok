import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';

import {ICategory} from '../models/ICategory';

import {playTrack, setupTrackPlayer} from '../utiles/audioFunctions';

import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../utiles/RootStackParams';
import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import React from 'react';
import GlobalStyles from '../utiles/GlobalStyles';
import Skeleton from './Skeleton';
import {Category} from '../models/Category';

interface ICategoryViewProps {
  category: Category;
  loading: boolean;
}

const CategoryView = ({category, loading}: ICategoryViewProps) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const colors = ['#7571E6', '#8481EE'];
  const cardWidth = [210, 215];

  return (
    <View style={styles.container}>
      {colors.map((color, index) => (
        <View
          key={index}
          style={[
            styles.card,
            {
              backgroundColor: color,
              top: (index + 2) * 12,
              width: cardWidth[index],
            },
          ]}
        />
      ))}

      <View style={[styles.imgCard]}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('CategoryScreen', {
              selectedCategory: category.categoryName,
              selectedCategoryKu: category.categoryNameKU,
            })
          }>
          <FastImage
            style={styles.img}
            source={{
              uri: category.imgURL,
            }}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => playTrack(category.categoryAudio)}>
        <View style={styles.titleBox}>
          <Text style={[GlobalStyles.categoryTitle]}>
            {category.categoryNameKU}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryView;

const styles = StyleSheet.create({
  container: {
    width: 225,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 50,
    gap: 10,
    marginHorizontal: 50,
    top: -25,
  },
  card: {
    width: 225,
    height: 148,
    borderRadius: 20,
    position: 'absolute',

    textAlign: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  imgCard: {
    width: 225,
    height: 148,
  },

  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 20,
  },

  titleBox: {
    backgroundColor: '#3B3B3BB2',
    borderRadius: 100,
  },
});
