import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import {Word} from '../models/Word';
import {playTrack} from '../utiles/audioFunctions';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import GlobalStyles from '../utiles/GlobalStyles';
import {load} from 'react-native-track-player/lib/trackPlayer';
import Skeleton from './Skeleton';
import FastImage from 'react-native-fast-image';
MaterialCommunityIcons.loadFont();

interface ISlideItemProps {
  word: Word;
  index: number;
  loading: boolean;
}

const SlideItem = ({word, index, loading}: ISlideItemProps) => {
  return (
    <View style={styles.container} key={index}>
      <FastImage source={{uri: word.image}} style={styles.image} />

      <View style={styles.content}>
        <View style={styles.titleBox}>
          <Text style={GlobalStyles.sliderWordTitle}>{word.word}</Text>
        </View>

        <TouchableOpacity onPress={() => playTrack(word.audio)}>
          <View style={styles.iconBox}>
            <MaterialCommunityIcons
              name="volume-high"
              size={24}
              color={'#fff'}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SlideItem;

const styles = StyleSheet.create({
  container: {
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 10,
  },
  image: {
    height: 225,
    width: '100%',
    borderRadius: 20,
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleBox: {
    width: 202,
    height: 40,
    backgroundColor: '#3B3B3BB2',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconBox: {
    width: 40,
    height: 40,
    backgroundColor: '#3B3B3BB2',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
