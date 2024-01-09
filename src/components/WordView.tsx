import React from 'react';

import {StyleSheet, Text, View} from 'react-native';

import FastImage from 'react-native-fast-image';

import {Word} from '../models/Word';
import GlobalStyles from '../utiles/GlobalStyles';

interface IWordViewProps {
  word: Word;
}

const WordView = ({word}: IWordViewProps) => {
  return (
    <View style={styles.container}>
      <FastImage
        style={styles.img}
        source={{
          uri: word.image,
        }}
      />

      <View style={styles.textBox}>
        <Text style={GlobalStyles.wordListTitle}>{word.word}</Text>
      </View>
    </View>
  );
};

export default WordView;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: 164,
    height: 207,
    alignItems: 'center',
    gap: 10,
  },

  img: {
    width: 164,
    height: 162,
    resizeMode: 'cover',
    borderRadius: 20,
  },
  textBox: {
    backgroundColor: '#3B3B3BB2',
    borderRadius: 100,
  },
});
