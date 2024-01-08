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
    await TrackPlayer.reset();
    await TrackPlayer.add({url: audio});
    const playBackstate1 = await TrackPlayer.getPlaybackState();
    console.log(playBackstate1);
    await TrackPlayer.play();
    const playBackstate2 = await TrackPlayer.getPlaybackState();
    console.log(playBackstate2);
    console.log('audio played');
  } catch (error) {
    console.log(error);
  }
};
