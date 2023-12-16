/**
 * @format
 */

import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';
import {AppWrapper} from './app/components/AppWrapper';
import TrackPlayer from 'react-native-track-player';

TrackPlayer.registerPlaybackService(() => require('./app/utiles/audioService'));
AppRegistry.registerComponent(appName, () => AppWrapper);
