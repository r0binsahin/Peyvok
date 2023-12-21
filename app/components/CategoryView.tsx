import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';

import {ICategory} from '../models/ICategory';

import {playTrack, setupTrackPlayer} from '../utiles/audioFunctions';

import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../utiles/RootStackParams';
import {useNavigation} from '@react-navigation/native';

interface ICategoryViewProps {
  category: ICategory;
}

const CategoryView = ({category}: ICategoryViewProps) => {
  let isPlayerInitialized = false;
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const setPlayer = async () => {
    if (!isPlayerInitialized) {
      await setupTrackPlayer(isPlayerInitialized);
    }
  };

  useEffect(() => {
    setPlayer();
  }, []);

  const colors = ['#3F6150', '#456E5D'];
  const cardWidth = [209, 215];

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
            })
          }>
          <Image
            style={styles.img}
            source={{
              uri: category.imgURL,
            }}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => playTrack(category.categoryAudio)}>
        <View style={styles.titleBox}>
          <Text style={styles.title}>{category.categoryNameKU}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryView;

const styles = StyleSheet.create({
  container: {
    width: 225,
    height: 119,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 50,
    gap: 10,
  },
  card: {
    width: 225,
    height: 119,
    borderRadius: 20,
    position: 'absolute',

    paddingTop: 20,
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
    height: 119,
    backgroundColor: 'white',
  },

  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 20,
  },

  titleBox: {
    width: 48,
    height: 26,
    backgroundColor: 'grey',
    borderRadius: 100,
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },

  title: {
    fontSize: 20,
    color: 'white',
  },
});
