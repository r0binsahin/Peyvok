import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Svg, {Defs, LinearGradient, Path, Stop} from 'react-native-svg';
import TopWave from './TopWave';
import Cloud from './Cloud';
import BottomWave from './BottomWave';
import Star from './Star';

const Background = () => {
  const pink = '#FABFFD';
  const purple = '#A8A6FF';
  return (
    <View style={styles.container}>
      <View style={{position: 'absolute', top: 35, left: 40, zIndex: 1}}>
        <Star color={purple} />
      </View>
      <View style={{position: 'absolute', top: 15, left: '70%', zIndex: 1}}>
        <Star color={pink} />
      </View>
      <View style={{position: 'absolute', top: 25, left: '30%', zIndex: 1}}>
        <Star color={pink} />
      </View>
      <View style={{position: 'absolute', top: 70, left: '50%', zIndex: 1}}>
        <Star color={purple} />
      </View>
      <View style={{position: 'absolute', top: 20, left: '51%', zIndex: 1}}>
        <Star color={purple} />
      </View>
      <View style={{position: 'absolute', top: 150, left: '40%', zIndex: 1}}>
        <Star color={pink} />
      </View>
      <View style={{position: 'absolute', top: '50%', left: 50, zIndex: 1}}>
        <Star color={pink} />
      </View>
      <View
        style={{position: 'absolute', bottom: '30%', left: '50%', zIndex: 1}}>
        <Star color={purple} />
      </View>
      <View
        style={{position: 'absolute', bottom: '60%', left: '75%', zIndex: 1}}>
        <Star color={pink} />
      </View>
      <View style={{position: 'absolute', top: '35%', right: '10%', zIndex: 1}}>
        <Star color={purple} />
      </View>
      <View style={{position: 'absolute', top: '60%', right: '5%', zIndex: 1}}>
        <Star color={pink} />
      </View>

      <View style={styles.top}>
        <View style={styles.box}>
          <TopWave />
          <View style={{position: 'absolute', top: 50, left: -25}}>
            <Cloud />
          </View>
          <View style={{position: 'absolute', bottom: 70, left: '60%'}}>
            <Cloud />
          </View>
          <View style={{position: 'absolute', top: 40, left: '80%'}}>
            <Cloud />
          </View>
        </View>
      </View>
      <View style={styles.bottom}>
        <View style={styles.box}>
          <BottomWave />
        </View>
      </View>
    </View>
  );
};

export default Background;

const styles = StyleSheet.create({
  container: {
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
