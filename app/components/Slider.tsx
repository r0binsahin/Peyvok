import React, {useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  View,
  ViewToken,
  FlatList,
} from 'react-native';
import {Word} from '../models/Word';

import SlideItem from './SlideItem';
import Pagination from './Pagination';

interface ISliderProps {
  words: Word[];
  startIndex: number;
}

const {width, height} = Dimensions.get('screen');

const Slider = ({words, startIndex}: ISliderProps) => {
  const [index, setIndex] = useState(startIndex);
  const scrollX = useRef(new Animated.Value(0)).current;

  const handleOnViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: ViewToken[]}) => {
      setIndex(viewableItems[0].index || 0);
    },
  ).current;

  const handleOnScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      },
    )(event);
  };

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  const getItemLayout = (_: any, index: number) => ({
    length: width,
    offset: width * index,
    index,
  });

  return (
    <View>
      <FlatList
        data={words}
        renderItem={({item}) => <SlideItem word={item} />}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
        onViewableItemsChanged={handleOnViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        initialScrollIndex={startIndex}
        getItemLayout={getItemLayout}
      />
      <Pagination data={words} scrollX={scrollX} index={index} />
    </View>
  );
};

export default Slider;
