/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

/* import {name as appName} from './app.json'; */
import {AppWrapper} from './src/components/AppWrapper';
import TrackPlayer from 'react-native-track-player';

TrackPlayer.registerPlaybackService(() => require('./src/utiles/audioService'));
AppRegistry.registerComponent(appName, () => AppWrapper);
