import React from 'react';

import {Dimensions} from 'react-native';

import Svg, {Defs, LinearGradient, Path, Stop} from 'react-native-svg';

const TopWave = () => {
  return (
    <Svg
      width={Dimensions.get('screen').width}
      height="420"
      viewBox={`0 0 ${Dimensions.get('screen').width} 358`}>
      <Defs>
        <LinearGradient
          id="gradientTop"
          x1="337.5"
          y1="0"
          x2="336.709"
          y2="526.236"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#CCCAFF" />
          <Stop offset="1" stopColor="#C99BFF" />
        </LinearGradient>
      </Defs>
      <Path
        d="M30.5329 -20C-98.9879 -20 -243.123 43.1775 -299 74.7662V358H974V-20C829.292 -20 634.438 74.7662 481.85 74.7662C329.262 74.7662 192.434 -20 30.5329 -20Z"
        fill="url(#gradientTop)"
      />
    </Svg>
  );
};

export default TopWave;
