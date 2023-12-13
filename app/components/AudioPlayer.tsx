import {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import TrackPlayer, {Capability} from 'react-native-track-player';
import {Word} from '../models/Word';

interface IAudioPayerProps {
  words: Realm.Results<Word>;
}

export const AudioPlayer = ({words}: IAudioPayerProps) => {
  let isPlayerInitialized = false;

  const setupTrackPlayer = async () => {
    try {
      await TrackPlayer.setupPlayer();
      await TrackPlayer.updateOptions({
        stoppingAppPausesPlayback: true,
        capabilities: [Capability.Play],
        compactCapabilities: [Capability.Play],
      });
      isPlayerInitialized = true;
    } catch (error) {
      console.log(error);
    }
  };

  const playTrack = async (word: Word) => {
    try {
      await TrackPlayer.stop();
      await TrackPlayer.reset();
      await TrackPlayer.add({url: word.audio});
      console.log('Track added successfully');
      const stateBeforePlay = await TrackPlayer.getPlaybackState();
      console.log('Player state before play:', stateBeforePlay);
      await TrackPlayer.play();
      console.log('Track playing...');
      const stateAfterPlay = await TrackPlayer.getPlaybackState();
      console.log('Player state after play:', stateAfterPlay);
    } catch (error) {
      console.log('Error playing track:', error);
    }
  };

  const setPlayer = async () => {
    if (!isPlayerInitialized) {
      await setupTrackPlayer();
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
