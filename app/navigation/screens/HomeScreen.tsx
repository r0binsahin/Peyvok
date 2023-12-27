import {View, Dimensions, Animated, Text, Easing} from 'react-native';

import CategoryView from '../../components/CategoryView';
import {ICategory} from '../../models/ICategory';
import categoryData from '../../assets/categoryData.json';

import Carousel from 'react-native-snap-carousel';
import {useEffect, useRef, useState} from 'react';
import {Image} from 'react-native';

export const HomeScreen = () => {
  const categories: ICategory[] = categoryData.categoryData;
  const carouselRef = useRef(null);
  const [isAvatar, setIsAvatar] = useState(true);
  const carouselTranslateX = new Animated.Value(Dimensions.get('screen').width);

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
    Animated.timing(carouselTranslateX, {
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
          <Text>TU BI XÊR HATÎ PEYVOKÊ</Text>
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
              style={{width: 250, height: 250}}
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
            transform: [{translateY: carouselTranslateX}],
          }}>
          <Carousel
            ref={carouselRef}
            layoutCardOffset={3}
            data={categories}
            //@ts-ignore
            renderItem={({item}) => <CategoryView category={item} />}
            sliderWidth={Dimensions.get('screen').width}
            itemWidth={225}
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
