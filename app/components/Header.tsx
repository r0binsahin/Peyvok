import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {StyleSheet} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../utiles/RootStackParams';

export const Header = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const route = useRoute();
  const imageURL = require('../assets/avatar/avatar.png');

  const isHomeScreen = route.name === 'HomeScreen' ? true : false;
  return (
    <View style={styles.container}>
      {isHomeScreen ? (
        <View style={styles.avatarBox}>
          <View>
            <Text>TU BI XÊR HATÎ PEYVOKÊ</Text>
          </View>
          <View style={styles.imageBox}>
            <Image
              style={styles.image}
              source={require('../assets/avatar/avatar.png')}
            />
          </View>
        </View>
      ) : (
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text>BACK</Text>
          </TouchableOpacity>
        </View>
      )}

      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Info')}>
          <Text>INFO</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },

  avatarBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 50,
  },

  imageBox: {
    width: 144,
    height: 80,
  },

  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'center',
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
});
