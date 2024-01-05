import TrackPlayer, {Capability} from 'react-native-track-player';

export const setupTrackPlayer = async () => {
  try {
    await TrackPlayer.setupPlayer();

    await TrackPlayer.updateOptions({
      stoppingAppPausesPlayback: true,
      capabilities: [Capability.Play],
      compactCapabilities: [Capability.Play],
    });
    console.log('player setup');
  } catch (error) {
    console.log(error);
  }
};

export const playTrack = async (audio: string) => {
  try {
    await TrackPlayer.stop();
    console.log('1');
    await TrackPlayer.reset();
    console.log('2');
    await TrackPlayer.add({url: audio});
    console.log('3');
    await TrackPlayer.getPlaybackState();
    console.log('4');
    await TrackPlayer.play();
    console.log('5');
    await TrackPlayer.getPlaybackState();
    console.log('6');
  } catch (error) {
    console.log(error);
  }
};
