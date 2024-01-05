import TrackPlayer, {Capability} from 'react-native-track-player';

export const setupTrackPlayer = async () => {
  try {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.updateOptions({
      stoppingAppPausesPlayback: true,
      capabilities: [Capability.Play],
      compactCapabilities: [Capability.Play],
    });
  } catch (error) {
    console.log(error);
  }
};

export const playTrack = async (audio: string) => {
  try {
    await TrackPlayer.stop();
    await TrackPlayer.reset();
    await TrackPlayer.add({url: audio});
    await TrackPlayer.getPlaybackState();
    await TrackPlayer.play();
    await TrackPlayer.getPlaybackState();
  } catch (error) {}
};
