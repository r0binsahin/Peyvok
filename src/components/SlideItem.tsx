import React from 'react';

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FastImage from 'react-native-fast-image';

import GlobalStyles from '../utiles/GlobalStyles';
import {playTrack} from '../utiles/audioFunctions';
import {Word} from '../models/Word';

//MaterialCommunityIcons.loadFont();

interface ISlideItemProps {
  word: Word;
  index: number;
}

const SlideItem = ({word, index}: ISlideItemProps) => {
  return (
    <View style={styles.container} key={index}>
      <TouchableOpacity onPress={() => playTrack(word.audio)}>
        <FastImage source={{uri: word.image}} style={styles.image} />
      </TouchableOpacity>

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
