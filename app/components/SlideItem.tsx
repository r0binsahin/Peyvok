import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
} from 'react-native';
import React from 'react';
import {Word} from '../models/Word';
import {playTrack} from '../utiles/audioFunctions';

const {width, height} = Dimensions.get('screen');

interface ISlideItemProps {
  word: Word;
}

const SlideItem = ({word}: ISlideItemProps) => {
  const translateYImage = new Animated.Value(0);
  return (
    <View style={styles.container}>
      <Animated.Image
        source={{uri: word.image}}
        style={[
          styles.image,
          {
            transform: [
              {
                translateY: translateYImage,
              },
            ],
          },
        ]}
      />

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
    width: 268,
    height: 279,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 10,

    margin: 10,
  },
  image: {
    height: 219,
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
