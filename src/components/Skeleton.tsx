import {Animated, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef} from 'react';

interface ISkeletonProps {
  width: number;
  height: number;
}

const Skeleton = ({width, height}: ISkeletonProps) => {
  const opacity = useRef(new Animated.Value(0.3));

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity.current, {
          toValue: 1,
          useNativeDriver: true,
          duration: 500,
        }),
        Animated.timing(opacity.current, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 800,
        }),
      ]),
    ).start();
  }, [opacity]);
  return (
    <Animated.View
      style={[{opacity: opacity.current, height, width}, styles.skeleton]}
    />
  );
};

export default Skeleton;

const styles = StyleSheet.create({
  skeleton: {
    backgroundColor: '#3B3B3BB2',
    borderRadius: 20,
  },
});
