import React from 'react';

import Svg, {Defs, LinearGradient, Path, Stop} from 'react-native-svg';

const Cloud = () => {
  return (
    <Svg width="128" height="71" viewBox="0 0 128 71" fill="none">
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

export default Cloud;
