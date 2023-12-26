import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Svg, {Defs, LinearGradient, Path, Stop} from 'react-native-svg';

const BottomWave = () => {
  return (
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
  );
};

export default BottomWave;

const styles = StyleSheet.create({
  bottomWavy: {
    position: 'absolute',
    bottom: 0,
  },
});
