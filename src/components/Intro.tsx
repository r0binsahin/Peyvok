import {Animated, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import GlobalStyles from '../utiles/GlobalStyles';
import FastImage from 'react-native-fast-image';

interface IIntroProps {
  bounceValue: Animated.Value;
  startBounceAnimation: () => void;
}

const Intro = ({bounceValue, startBounceAnimation}: IIntroProps) => {
  return (
    <View style={styles.container}>
      <Text style={GlobalStyles.startWelcomeText}>Tu bi xêr hatî Peyvokê!</Text>
      <Animated.View
        style={[styles.animatedContainer, {transform: [{scale: bounceValue}]}]}
        onTouchStart={startBounceAnimation}>
        <FastImage
          style={styles.img}
          source={{
            uri: 'https://drive.google.com/uc?export=download&id=1jMzIo1ql9FNPUAd-5pZqijvlN_M2ZSWi',
          }}
        />
      </Animated.View>
    </View>
  );
};

export default Intro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  animatedContainer: {
    width: 300,
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  img: {
    width: 190,
    height: 208,
  },
});
