import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RealmContext, Word} from '../../models/Word';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from './RootStackParams';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {playTrack} from '../../audioFunctions/audioFunctions';
import {useEffect} from 'react';
type propsType = NativeStackScreenProps<RootStackParamList, 'CategoryScreen'>;

export const CategoryScreen = (props: propsType) => {
  const {route} = props;
  const {selectedCategory} = route.params;

  const {useQuery} = RealmContext;

  const filteredWords = useQuery(Word, words => {
    return words.filtered(`category == $0`, selectedCategory);
  });
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  useEffect(() => {});

  return (
    <View style={styles.wrapper}>
      {filteredWords.map((word, index) => (
        <View key={index} style={styles.imgContainer}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('WordScreen', {
                selectedWord: word.word,
              })
            }>
            <Image
              style={styles.img}
              source={{
                uri: word.image,
              }}
            />
          </TouchableOpacity>

          <View style={styles.textBox}>
            <TouchableOpacity onPress={() => playTrack(word.audio)}>
              <Text style={styles.text}>Listen</Text>
            </TouchableOpacity>

            <Text style={styles.text}>{word.word}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',

    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imgContainer: {
    width: '40%',
    height: 250,
    backgroundColor: '#ff0044',
    padding: 10,
    borderRadius: 10,
    margin: 10,
    display: 'flex',

    alignItems: 'center',
  },

  img: {
    width: 125,
    height: 125,
    resizeMode: 'cover',
  },
  textBox: {
    display: 'flex',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 15,
    margin: 10,
  },
});
