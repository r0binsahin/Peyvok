import React, {useEffect, useState} from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Animated,
  Easing,
} from 'react-native';
import {StyleSheet} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../utiles/RootStackParams';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import GlobalStyles from '../utiles/GlobalStyles';
import FastImage from 'react-native-fast-image';
import {Fonts} from '../utiles/Fonts';

interface IHeaderProps {
  isHeaderShown: boolean;
}

export const Header = ({isHeaderShown}: IHeaderProps) => {
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
    if (isHeaderShown) {
      animateHeader();
    }
  }, [isHeaderShown]);

  return (
    <Animated.View
      style={[styles.container, {transform: [{translateY: translateY}]}]}>
      {isHomeScreen ? (
        <View style={styles.avatarBox}>
          <View>
            <Text style={styles.text}>Tu bi xêr hatî Peyvokê</Text>
          </View>
          <FastImage
            style={styles.image}
            source={require('../../assets/avatar/avatar_half.png')}
          />
        </View>
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
    </Animated.View>
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
    color: '#000',
  },
});
