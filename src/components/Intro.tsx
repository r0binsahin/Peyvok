import React from 'react';

import {Animated, StyleSheet, Text, View} from 'react-native';

import FastImage from 'react-native-fast-image';

import GlobalStyles from '../utiles/GlobalStyles';

interface IIntroProps {
  bounceValue: Animated.Value;
}

const Intro = ({bounceValue}: IIntroProps) => {
  return (
    <View style={styles.container}>
      <Text style={GlobalStyles.startWelcomeText}>Tu bi xêr hatî Peyvokê!</Text>
      <Animated.View
        style={[styles.animatedContainer, {transform: [{scale: bounceValue}]}]}>
        <FastImage
          style={styles.img}
          source={require('../../assets/avatar/avatar.png')}
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
