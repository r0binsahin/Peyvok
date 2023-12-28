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

interface IWordViewProps {
  word: Word;
}

const WordView = ({word}: IWordViewProps) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: word.image,
        }}
      />

      <View style={styles.textBox}>
        <Text style={styles.text}>{word.word}</Text>
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
    width: 107,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#B9B9B9',
    borderRadius: 100,
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
});
