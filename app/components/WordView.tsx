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
        <TouchableOpacity onPress={() => playTrack(word.audio)}>
          <Text style={styles.text}>Listen</Text>
        </TouchableOpacity>

        <Text style={styles.text}>{word.word}</Text>
      </View>
    </View>
  );
};

export default WordView;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ff0044',
    padding: 10,
    borderRadius: 10,
    display: 'flex',

    marginBottom: 10,
    marginTop: 10,

    alignItems: 'center',
  },

  img: {
    width: 125,
    height: 125,
    resizeMode: 'cover',
  },
  textBox: {
    width: '100%',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 15,
    margin: 10,
  },
});
