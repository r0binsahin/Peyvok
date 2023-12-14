import TrackPlayer, {Capability} from 'react-native-track-player';
import {Word} from '../models/Word';

export const setupTrackPlayer = async (isPlayerInitialized: boolean) => {
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

export const playTrack = async (word: Word) => {
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
