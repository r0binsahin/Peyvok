import {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {Word} from '../models/Word';
import {playTrack, setupTrackPlayer} from '../audioFunctions/audioFunctions';

interface IAudioPayerProps {
  words: Realm.Results<Word>;
}

export const AudioPlayer = ({words}: IAudioPayerProps) => {
  let isPlayerInitialized = false;

  const setPlayer = async () => {
    if (!isPlayerInitialized) {
      await setupTrackPlayer(isPlayerInitialized);
    }
  };

  useEffect(() => {
    setPlayer();
  }, []);

  return (
    <View style={styles.container}>
      {words.map(word => (
        <View style={styles.row} key={word.audio}>
          <TouchableOpacity style={styles.btn} onPress={() => playTrack(word)}>
            <Text style={styles.text}>{word.word}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: '100%',

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  btn: {
    backgroundColor: '#ff0044',
    padding: 10,
    borderRadius: 10,
    margin: 10,
    width: 60,
  },
  text: {
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
  },
});
