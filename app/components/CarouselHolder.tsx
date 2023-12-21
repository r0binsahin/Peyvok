import {
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {RealmContext, Word} from '../models/Word';
import {playTrack} from '../utiles/audioFunctions';
import Carousel from 'react-native-snap-carousel';

export const {width} = Dimensions.get('window');

const Items = ({item, index}: {item: Word; index: number}) => {
  return (
    <View style={styles.container} key={index}>
      <Image source={{uri: item.image}} style={styles.image} />

      <View style={styles.content}>
        <View style={styles.titleBox}>
          <Text style={styles.title}>{item.word}</Text>
        </View>

        <TouchableOpacity onPress={() => playTrack(item.audio)}>
          <View style={styles.iconBox}>
            <Text style={styles.icon}>x</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    /*     width: 268, */
    height: 279,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    gap: 10,

    margin: 10,

    shadowOpacity: 0.29,
    shadowRadius: 5,
  },
  image: {
    height: 219,
    width: '100%',
    borderRadius: 20,
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleBox: {
    width: 202,
    height: 40,
    backgroundColor: 'grey',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    color: '#fff',
    fontSize: 20,
  },

  iconBox: {
    width: 40,
    height: 40,
    backgroundColor: 'grey',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 15,
    color: '#fff',
  },
});

const CarouselHolder = () => {
  const isCarousel = React.useRef(null);
  const {useQuery} = RealmContext;
  const words = Array.from(useQuery(Word));
  const width = Dimensions.get('window').width;

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
        layoutCardOffset={3}
        ref={isCarousel}
        data={words}
        //@ts-ignore
        renderItem={Items}
        sliderWidth={width}
        itemWidth={268}
        inactiveSlideShift={0}
        useScrollView={true}
        slideInterpolatedStyle={(index, animatedValue) =>
          animatedStyle(index, animatedValue)
        }
      />
    </View>
  );
};

export default CarouselHolder;
