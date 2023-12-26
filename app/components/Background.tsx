import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Svg, {Defs, LinearGradient, Path, Stop} from 'react-native-svg';

const Background = () => {
  const topWave = () => {
    return (
      <View style={styles.top}>
        <View style={styles.box}>
          <Svg
            width={Dimensions.get('screen').width}
            height="358"
            viewBox={`0 0 ${Dimensions.get('screen').width} 358`}
            style={styles.topWavy}>
            <Defs>
              <LinearGradient
                id="gradientTop"
                x1="337.5"
                y1="-20"
                x2="336.709"
                y2="526.236"
                gradientUnits="userSpaceOnUse">
                <Stop stopColor="#CCCAFF" />
                <Stop offset="1" stopColor="#C99FFF" />
              </LinearGradient>
            </Defs>
            <Path
              d="M30.5329 -20C-98.9879 -20 -243.123 43.1775 -299 74.7662V358H974V-20C829.292 -20 634.438 74.7662 481.85 74.7662C329.262 74.7662 192.434 -20 30.5329 -20Z"
              fill="url(#gradientTop)"
            />
          </Svg>
          <Svg
            width="128"
            height="71"
            viewBox="0 0 128 71"
            fill="none"
            style={{position: 'absolute', top: 50, left: -40}}>
            <Defs>
              <LinearGradient
                id="cloud1"
                x1="63.8948"
                y1="0"
                x2="63.8948"
                y2="70.9641"
                gradientUnits="userSpaceOnUse">
                <Stop stopColor="#FED7FF" />
                <Stop offset="1" stopColor="#FEBEFF" />
              </LinearGradient>
            </Defs>
            <Path
              d="M18.5 35.0114C5.7 34.6114 0 40.504 0 52.5114C0 77.7173 127.5 76.5054 127.5 52.5114C129.9 42.1162 117 32.5054 103 40.0054C105.4 24.0054 90.5 11.0054 71 21.004C59 -11.396 12 -5.99457 18.5 35.0114Z"
              fill="url(#cloud1)"
            />
          </Svg>
        </View>
      </View>
    );
  };

  const bottomWave = () => {
    return (
      <View style={styles.bottom}>
        <View style={styles.box}>
          <Svg
            width={Dimensions.get('screen').width}
            height="71"
            viewBox={`0 0 ${Dimensions.get('screen').width} 71`}
            style={styles.bottomWavy}>
            <Defs>
              <LinearGradient
                id="gradientBottom"
                x1="415.25"
                y1="3.72949e-08"
                x2="415"
                y2="256.5"
                gradientUnits="userSpaceOnUse">
                <Stop stopColor="#F8CAFF" />
                <Stop offset="1" stopColor="#FF9FF5" />
              </LinearGradient>
            </Defs>
            <Path
              d="M201 0C110.6 0 10 29.6667 -29 44.5V177.5H859.5V0C758.5 0 622.5 44.5 516 44.5C409.5 44.5 314 0 201 0Z"
              fill="url(#gradientBottom)"
            />
          </Svg>
        </View>
      </View>
    );
  };

  const cloud = () => {
    return (
      <Svg
        width="128"
        height="71"
        viewBox="0 0 128 71"
        fill="none"
        style={{position: 'absolute', top: 50, left: -40}}>
        <Defs>
          <LinearGradient
            id="cloud1"
            x1="63.8948"
            y1="0"
            x2="63.8948"
            y2="70.9641"
            gradientUnits="userSpaceOnUse">
            <Stop stopColor="#FED7FF" />
            <Stop offset="1" stopColor="#FEBEFF" />
          </LinearGradient>
        </Defs>
        <Path
          d="M18.5 35.0114C5.7 34.6114 0 40.504 0 52.5114C0 77.7173 127.5 76.5054 127.5 52.5114C129.9 42.1162 117 32.5054 103 40.0054C105.4 24.0054 90.5 11.0054 71 21.004C59 -11.396 12 -5.99457 18.5 35.0114Z"
          fill="url(#cloud1)"
        />
      </Svg>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.box}>
          <Svg
            width={Dimensions.get('screen').width}
            height="358"
            viewBox={`0 0 ${Dimensions.get('screen').width} 358`}
            style={styles.topWavy}>
            <Defs>
              <LinearGradient
                id="gradientTop"
                x1="337.5"
                y1="-20"
                x2="336.709"
                y2="526.236"
                gradientUnits="userSpaceOnUse">
                <Stop stopColor="#CCCAFF" />
                <Stop offset="1" stopColor="#C99FFF" />
              </LinearGradient>
            </Defs>
            <Path
              d="M30.5329 -20C-98.9879 -20 -243.123 43.1775 -299 74.7662V358H974V-20C829.292 -20 634.438 74.7662 481.85 74.7662C329.262 74.7662 192.434 -20 30.5329 -20Z"
              fill="url(#gradientTop)"
            />
          </Svg>
          <Svg
            width="128"
            height="71"
            viewBox="0 0 128 71"
            fill="none"
            style={{position: 'absolute', top: 50, left: -40}}>
            <Defs>
              <LinearGradient
                id="cloud1"
                x1="63.8948"
                y1="0"
                x2="63.8948"
                y2="70.9641"
                gradientUnits="userSpaceOnUse">
                <Stop stopColor="#FED7FF" />
                <Stop offset="1" stopColor="#FEBEFF" />
              </LinearGradient>
            </Defs>
            <Path
              d="M18.5 35.0114C5.7 34.6114 0 40.504 0 52.5114C0 77.7173 127.5 76.5054 127.5 52.5114C129.9 42.1162 117 32.5054 103 40.0054C105.4 24.0054 90.5 11.0054 71 21.004C59 -11.396 12 -5.99457 18.5 35.0114Z"
              fill="url(#cloud1)"
            />
          </Svg>
        </View>
      </View>
      <View style={styles.bottom}>
        <View style={styles.box}>
          <Svg
            width={Dimensions.get('screen').width}
            height="71"
            viewBox={`0 0 ${Dimensions.get('screen').width} 71`}
            style={styles.bottomWavy}>
            <Defs>
              <LinearGradient
                id="gradientBottom"
                x1="415.25"
                y1="3.72949e-08"
                x2="415"
                y2="256.5"
                gradientUnits="userSpaceOnUse">
                <Stop stopColor="#F8CAFF" />
                <Stop offset="1" stopColor="#FF9FF5" />
              </LinearGradient>
            </Defs>
            <Path
              d="M201 0C110.6 0 10 29.6667 -29 44.5V177.5H859.5V0C758.5 0 622.5 44.5 516 44.5C409.5 44.5 314 0 201 0Z"
              fill="url(#gradientBottom)"
            />
          </Svg>
        </View>
      </View>
    </View>
  );
};

export default Background;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B9B7FF',
    padding: 0,
  },
  top: {
    width: '100%',
    height: '100%',
  },
  topWavy: {},
  box: {
    bottom: 0,
  },
  bottom: {
    position: 'absolute',
    width: Dimensions.get('screen').width,
    bottom: 0,
  },
  bottomWavy: {
    position: 'absolute',
    bottom: 0,
  },
});
