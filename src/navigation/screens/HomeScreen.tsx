import React from 'react';
import {useEffect, useRef, useState} from 'react';

import {View, Dimensions, Animated, Text, Easing} from 'react-native';

import CategoryView from '../../components/CategoryView';

import Carousel from 'react-native-snap-carousel';

import {RealmContext} from '../../models/Word';
import {Category} from '../../models/Category';
import Intro from '../../components/Intro';
import {playTrack} from '../../utiles/audioFunctions';

export const HomeScreen = () => {
  const {useQuery} = RealmContext;
  const categories = useQuery(Category);

  const carouselRef = useRef(null);
  const bounceValue = new Animated.Value(0.8);

  const [isAvatar, setIsAvatar] = useState(true);

  const carouselTranslateX = new Animated.Value(
    Dimensions.get('screen').height,
  );

  const startBounceAnimation = () => {
    Animated.spring(bounceValue, {
      toValue: 1.2,
      friction: 0.5,
      tension: 20,

      useNativeDriver: true,
    }).start(() => {
      bounceValue.setValue(0.8);

      Animated.timing(bounceValue, {
        toValue: 0,
        duration: 600,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }).start(() => {
        setIsAvatar(false);
        startCarouselAnimation();
      });
    });
  };

  const animatedStyle = (index: number, animatedValue: Animated.Value) => {
    const scale = animatedValue.interpolate({
      inputRange: [-1, 0, 1],
      outputRange: [1, 1, 1],
      extrapolate: 'clamp',
    });

    return {
      transform: [{scale}, {translateX: index * 30}],
    };
  };

  const startCarouselAnimation = () => {
    Animated.timing(carouselTranslateX, {
      toValue: 1,
      duration: 1000,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    startBounceAnimation();
  }, []);

  useEffect(() => {
    if (!isAvatar) {
      startCarouselAnimation();
      playTrack(require('../../../assets/intro/bell.wav'));
    }
  }, [isAvatar]);

  return (
    <View
      style={{
        flex: 1,
      }}>
      {isAvatar ? (
        <Intro bounceValue={bounceValue} />
      ) : (
        <Animated.View
          style={{
            flex: 1,
            transform: [{translateX: carouselTranslateX}],
          }}>
          <Carousel
            ref={carouselRef}
            layoutCardOffset={3}
            //@ts-ignore
            data={categories}
            renderItem={({item}) => (
              //@ts-ignore
              <CategoryView category={item} />
            )}
            sliderWidth={Dimensions.get('screen').width}
            itemWidth={225}
            slideStyle={{justifyContent: 'center'}}
            inactiveSlideShift={0}
            useScrollView={true}
            slideInterpolatedStyle={(index, animatedValue) =>
              animatedStyle(index, animatedValue)
            }
            activeSlideAlignment={'start'}
            vertical={false}
          />
        </Animated.View>
      )}
    </View>
  );
};
