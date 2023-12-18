import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {RealmContext, Word} from '../../models/Word';

import {playTrack} from '../../utiles/audioFunctions';
import {RootStackParamList} from '../../utiles/RootStackParams';
import WordView from '../../components/WordView';

type propsType = NativeStackScreenProps<RootStackParamList, 'CategoryScreen'>;

export const CategoryScreen = (props: propsType) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const {route} = props;
  const {selectedCategory} = route.params;
  const {useQuery} = RealmContext;

  const filteredWords = useQuery(Word, words => {
    return words.filtered(`category == $0`, selectedCategory);
  });

  return (
    <View style={styles.wrapper}>
      {filteredWords.map(word => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('WordScreen', {
              selectedWord: word.word,
            })
          }>
          <WordView word={word} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',

    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
