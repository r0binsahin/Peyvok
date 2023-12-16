import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';

import {ICategory} from '../models/ICategory';

import {playTrack, setupTrackPlayer} from '../audioFunctions/audioFunctions';

import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/pages/RootStackParams';
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

  return (
    <View style={styles.imgContainer}>
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

      <View style={styles.textBox}>
        <TouchableOpacity onPress={() => playTrack(category.categoryAudio)}>
          <Text style={styles.text}>Listen</Text>
        </TouchableOpacity>

        <Text style={styles.text}>{category.categoryNameKU}</Text>
      </View>
    </View>
  );
};

export default CategoryView;

const styles = StyleSheet.create({
  imgContainer: {
    width: '40%',
    height: 250,
    backgroundColor: '#ff0044',
    padding: 10,
    borderRadius: 10,
    margin: 10,
    display: 'flex',

    alignItems: 'center',
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
    fontSize: 15,
    margin: 10,
  },
});
