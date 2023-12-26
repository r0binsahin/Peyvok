import React from 'react';
import {Dimensions, PixelRatio, StyleSheet, View} from 'react-native';
import TopWave from './TopWave';
import Cloud from './Cloud';
import BottomWave from './BottomWave';
import Star from './Star';

interface IBackgroundProps {
  children: React.ReactNode;
}

const Background = ({children}: IBackgroundProps) => {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const percentageToPixels = (percentage: string, dimension: number) => {
    const elemDimension = parseFloat(percentage);
    return PixelRatio.roundToNearestPixel((dimension * elemDimension) / 100);
  };

  const stars = [
    {top: 35, left: 40, color: '#A8A6FF'},
    {top: 15, left: percentageToPixels('70%', screenWidth), color: '#FABFFD'},
    {top: 25, left: percentageToPixels('30%', screenWidth), color: '#FABFFD'},
    {top: 80, left: percentageToPixels('50%', screenWidth), color: '#A8A6FF'},
    {top: 20, left: percentageToPixels('51%', screenWidth), color: '#A8A6FF'},
    {top: 150, left: percentageToPixels('40%', screenWidth), color: '#FABFFD'},
    {top: percentageToPixels('50%', screenHeight), left: 50, color: '#FABFFD'},
    {
      bottom: percentageToPixels('30%', screenHeight),
      left: percentageToPixels('45%', screenWidth),
      color: '#A8A6FF',
    },
    {
      bottom: percentageToPixels('60%', screenHeight),
      left: percentageToPixels('75%', screenWidth),
      color: '#FABFFD',
    },
    {
      top: percentageToPixels('35%', screenHeight),
      right: percentageToPixels('10%', screenWidth),
      color: '#A8A6FF',
    },
    {
      top: percentageToPixels('60%', screenHeight),
      right: percentageToPixels('5%', screenWidth),
      color: '#FABFFD',
    },
  ];

  return (
    <View style={styles.container}>
      {stars.map((star, index) => (
        <View
          style={{
            position: 'absolute',
            zIndex: 1,
            ...star,
          }}
          key={index}>
          <Star color={star.color} />
        </View>
      ))}

      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          zIndex: 1,
        }}>
        {children}
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
    zIndex: 0,
  },
  top: {
    width: '100%',
    height: '100%',
  },
  box: {
    bottom: 0,
  },
  bottom: {
    width: '100%',
    bottom: 0,
  },
});
