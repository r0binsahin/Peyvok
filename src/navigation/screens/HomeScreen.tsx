import {View, Dimensions, Animated, Text, Easing} from 'react-native';

import CategoryView from '../../components/CategoryView';
import {ICategory} from '../../models/ICategory';
import categoryData from '../../../assets/categoryData.json';

import Carousel from 'react-native-snap-carousel';
import {useEffect, useRef, useState} from 'react';
import {Image} from 'react-native';
import React from 'react';
import GlobalStyles from '../../utiles/GlobalStyles';

export const HomeScreen = () => {
  const categories: ICategory[] = categoryData.categoryData;
  const carouselRef = useRef(null);
  const [isAvatar, setIsAvatar] = useState(true);
  const carouselTranslateY = new Animated.Value(Dimensions.get('screen').width);
  const [loading, setLoading] = useState(true);

  /*   useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, []); */

  const bounceValue = new Animated.Value(0.8);

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
    Animated.timing(carouselTranslateY, {
      toValue: 1,
      duration: 700,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    startBounceAnimation();
  });

  useEffect(() => {
    if (!isAvatar) {
      startCarouselAnimation();
    }
  }, [isAvatar]);

  return (
    <View
      style={{
        flex: 1,
      }}>
      {isAvatar ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={GlobalStyles.startWelcomeText}>
            Tu bi xêr hatî Peyvokê!
          </Text>
          <Animated.View
            style={{
              width: 300,
              height: '70%',
              justifyContent: 'center',
              alignItems: 'center',
              transform: [{scale: bounceValue}],
            }}
            onTouchStart={startBounceAnimation}>
            <Image
              style={{width: 190, height: 208}}
              source={{
                uri: 'https://drive.google.com/uc?export=download&id=1jMzIo1ql9FNPUAd-5pZqijvlN_M2ZSWi',
              }}
            />
          </Animated.View>
        </View>
      ) : (
        <Animated.View
          style={{
            flex: 1,
            transform: [{translateY: carouselTranslateY}],
          }}>
          <Carousel
            ref={carouselRef}
            layoutCardOffset={3}
            data={categories}
            //@ts-ignore
            renderItem={({item}) => (
              <CategoryView category={item} loading={loading} />
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
