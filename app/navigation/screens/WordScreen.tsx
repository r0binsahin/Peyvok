import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootStackParamList} from '../../utiles/RootStackParams';
import {RealmContext, Word} from '../../models/Word';

import {playTrack} from '../../utiles/audioFunctions';

type propsType = NativeStackScreenProps<RootStackParamList, 'WordScreen'>;

export const WordScreen = (props: propsType) => {
  const {route} = props;
  const {selectedWord} = route.params;

  const {useQuery} = RealmContext;
  const filteredWords = useQuery(Word, words => {
    return words.filtered(`word == $0`, selectedWord);
  });

  return (
    <View style={styles.imgContainer}>
      <TouchableOpacity>
        <Image
          style={styles.img}
          source={{
            uri: filteredWords[0].image,
          }}
        />
      </TouchableOpacity>

      <View style={styles.textBox}>
        <TouchableOpacity onPress={() => playTrack(filteredWords[0].audio)}>
          <Text style={styles.text}>Listen</Text>
        </TouchableOpacity>

        <Text style={styles.text}>{filteredWords[0].word}</Text>
      </View>
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
