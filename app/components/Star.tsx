import {StyleSheet} from 'react-native';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface IStarProps {
  color: string;
}

const Star = ({color}: IStarProps) => {
  return (
    <Svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <Path
        d="M5 0L6.35045 3.64955L10 5L6.35045 6.35045L5 10L3.64955 6.35045L0 5L3.64955 3.64955L5 0Z"
        fill={color}
      />
    </Svg>
  );
};

export default Star;

const styles = StyleSheet.create({});
