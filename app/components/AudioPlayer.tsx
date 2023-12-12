import {useQuery} from '@realm/react';
import {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import TrackPlayer from 'react-native-track-player';
import {Word} from '../models/Word';
import {IWord} from '../models/IWord';

interface IAudioPayerProps {
  words: IWord[];
}

export const AudioPlayer = () => {
  let isPlayerInitialized = false;
  const tracks = [
    {
      url: require('../assets/tracks/ajel.mp3'),
    },
  ];

  const setupTrackPlayer = async () => {
    try {
      await TrackPlayer.setupPlayer();
      await TrackPlayer.add(tracks);
      isPlayerInitialized = true;
    } catch (error) {
      console.log(error);
    }
  };

  const playTrack = async () => {
    await TrackPlayer.stop();

    await TrackPlayer.play();
  };

  useEffect(() => {
    if (!isPlayerInitialized) {
      setupTrackPlayer();
      console.log(tracks);
    }
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity style={styles.btn} onPress={playTrack}>
          <Text style={styles.text}>Play</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  btn: {
    backgroundColor: '#ff0044',
    padding: 15,
    borderRadius: 10,
    margin: 10,
    width: 160,
  },
  text: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 20,
  },
});
