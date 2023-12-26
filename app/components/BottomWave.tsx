import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Svg, {Defs, LinearGradient, Path, Stop} from 'react-native-svg';

const BottomWave = () => {
  return (
    <Svg
      width={Dimensions.get('screen').width}
      height="122"
      viewBox={`0 0 ${Dimensions.get('screen').width} 122`}
      style={styles.bottomWavy}>
      <Defs>
        <LinearGradient
          id="gradientBottom"
          x1="405.999"
          y1="45"
          x2="405.977"
          y2="118.699"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#F8CAFF" />
          <Stop offset="1" stopColor="#FF9FF5" />
        </LinearGradient>
      </Defs>
      <Path
        d="M291 25.5C182.235 25.5 46.9229 73.238 0 77.5V121.5H1069V0C947.482 0 714.136 70 586 70C457.864 70 426.956 25.5 291 25.5Z"
        fill="url(#gradientBottom)"
      />
    </Svg>
  );
};

export default BottomWave;

const styles = StyleSheet.create({
  bottomWavy: {
    position: 'absolute',
    bottom: 0,
  },
});
