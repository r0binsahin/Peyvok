import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../utiles/RootStackParams';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export const Header = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const route = useRoute();

  const isHomeScreen = route.name === 'HomeScreen' ? true : false;
  return (
    <View style={styles.container}>
      {isHomeScreen ? (
        <View>
          <Text>TU BI XÊR HATÎ PEYVOKÊ</Text>
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
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: 'white',
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
