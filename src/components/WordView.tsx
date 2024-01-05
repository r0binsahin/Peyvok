import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Word} from '../models/Word';
import {playTrack} from '../utiles/audioFunctions';
import GlobalStyles from '../utiles/GlobalStyles';
import Skeleton from './Skeleton';
import FastImage from 'react-native-fast-image';

interface IWordViewProps {
  word: Word;
  loading: boolean;
}

const WordView = ({word, loading}: IWordViewProps) => {
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
