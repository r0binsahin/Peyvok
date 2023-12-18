import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootStackParamList} from '../../utiles/RootStackParams';
import {RealmContext, Word} from '../../models/Word';

import WordView from '../../components/WordView';
import {StyleSheet, View} from 'react-native';
import {index} from 'realm';
import Slider from '../../components/Slider';

type propsType = NativeStackScreenProps<RootStackParamList, 'WordScreen'>;

export const WordScreen = (props: propsType) => {
  const {route} = props;
  const {selectedWord, startIndex, selectedCategory} = route.params;

  const {useQuery} = RealmContext;
  const filteredWords = useQuery(Word, words => {
    return words.filtered(`category == $0`, selectedCategory);
  });

  const words = useQuery(Word);
  const convertedWords: Word[] = Array.from(filteredWords);

  return <Slider startIndex={startIndex} words={convertedWords} />;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
