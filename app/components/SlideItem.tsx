import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  Image,
} from 'react-native';
import React from 'react';
import {Word} from '../models/Word';
import {playTrack} from '../utiles/audioFunctions';

interface ISlideItemProps {
  word: Word;
  index: number;
}

const SlideItem = ({word, index}: ISlideItemProps) => {
  return (
    <View style={styles.container} key={index}>
      <Image source={{uri: word.image}} style={styles.image} />

      <View style={styles.content}>
        <View style={styles.titleBox}>
          <Text style={styles.title}>{word.word}</Text>
        </View>

        <TouchableOpacity onPress={() => playTrack(word.audio)}>
          <View style={styles.iconBox}>
            <Text style={styles.icon}>x</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SlideItem;

const styles = StyleSheet.create({
  container: {
    height: 310,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

    gap: 10,

    margin: 10,
  },
  image: {
    height: 260,
    width: '100%',
    borderRadius: 20,
    resizeMode: 'cover',
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
    backgroundColor: 'grey',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    color: '#fff',
    fontSize: 20,
  },

  iconBox: {
    width: 40,
    height: 40,
    backgroundColor: 'grey',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 15,
    color: '#fff',
  },
});
