import {View, Dimensions, Animated} from 'react-native';

import CategoryView from '../../components/CategoryView';
import {ICategory} from '../../models/ICategory';
import categoryData from '../../assets/categoryData.json';

import Carousel from 'react-native-snap-carousel';
import {useRef} from 'react';

export const HomeScreen = () => {
  const categories: ICategory[] = categoryData.categoryData;
  const carouselRef = useRef(null);

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

  return (
    <View
      style={{
        flex: 1,
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
    </View>
  );
};
