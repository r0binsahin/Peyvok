import React, {useEffect, useState} from 'react';

import {View, Text, TouchableOpacity, Animated, Easing} from 'react-native';
import {StyleSheet} from 'react-native';

import {useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import FastImage from 'react-native-fast-image';

import {Fonts} from '../utiles/Fonts';
import {playTrack} from '../utiles/audioFunctions';
import {RootStackParamList} from '../utiles/RootStackParams';

export const Header = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const route = useRoute();
  const isHomeScreen = route.name === 'HomeScreen' ? true : false;
  const isInfoScreen = route.name === 'InfoScreen' ? true : false;
  const [translateY, setTranslateY] = useState(new Animated.Value(-100));

  const animateHeader = () => {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 1000,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animateHeader();
  }, []);

  return (
    <View style={styles.container}>
      {isHomeScreen ? (
        <Animated.View
          style={[styles.avatarBox, {transform: [{translateY: translateY}]}]}>
          <TouchableOpacity
            onPress={() =>
              playTrack(
                'https://dl.dropboxusercontent.com/scl/fi/jjjbd01hd57vtfniqp82h/welcometowordrealm.mp3?rlkey=7o8rypa2mq0dm48azpfn3c90s&dl=0',
              )
            }>
            <Text style={styles.text}>Tu bi xêr hatî Peyvokê</Text>
          </TouchableOpacity>
          <FastImage
            style={styles.image}
            source={require('../../assets/avatar/avatar_half.png')}
          />
        </Animated.View>
      ) : (
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons
              name="arrow-left-circle"
              size={40}
              color={'#3B3B3BB2'}
            />
          </TouchableOpacity>
        </View>
      )}

      {!isInfoScreen ? (
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('InfoScreen')}>
            <MaterialCommunityIcons
              name="information-outline"
              size={40}
              color={'#1C1B1F'}
            />
          </TouchableOpacity>
        </View>
      ) : (
        ''
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 50,
    paddingVertical: 20,
  },

  avatarBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 50,
  },

  image: {
    width: 144,
    height: 80,
    resizeMode: 'center',
    position: 'absolute',
    left: 225,
  },

  leftContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  middleContainer: {
    flex: 1,
    alignItems: 'center',
  },

  text: {
    fontSize: 18,
    fontFamily: Fonts.QSBold,
    fontWeight: '700',
    color: '#000',
  },
});
