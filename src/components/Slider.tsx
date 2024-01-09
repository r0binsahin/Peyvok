import React, {useRef} from 'react';

import {Animated, Dimensions, View} from 'react-native';

import Carousel from 'react-native-snap-carousel';

import {Word} from '../models/Word';
import SlideItem from './SlideItem';

interface ISliderProps {
  words: Word[];
}

const {width} = Dimensions.get('screen');

const Slider = ({words}: ISliderProps) => {
  const carouselRef = useRef(null);

  const animatedStyle = (index: number, animatedValue: Animated.Value) => {
    const scale = animatedValue.interpolate({
      inputRange: [-1, 0, 1],
      outputRange: [1, 0.5, 1],
      extrapolate: 'clamp',
    });

    return {
      transform: [{scale}],
    };
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Carousel
        ref={carouselRef}
        layoutCardOffset={3}
        data={words}
        //@ts-ignore
        renderItem={({item, index}) => <SlideItem word={item} index={index} />}
        sliderWidth={width}
        itemWidth={225}
        inactiveSlideShift={0}
        useScrollView={true}
        slideInterpolatedStyle={(index, animatedValue) =>
          animatedStyle(index, animatedValue)
        }
        vertical={false}
      />
    </View>
  );
};

export default Slider;
