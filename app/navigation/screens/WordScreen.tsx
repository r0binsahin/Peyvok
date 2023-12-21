import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootStackParamList} from '../../utiles/RootStackParams';
import {RealmContext, Word} from '../../models/Word';

import Slider from '../../components/Slider';
import {StyleSheet} from 'react-native';

type propsType = NativeStackScreenProps<RootStackParamList, 'WordScreen'>;

export const WordScreen = (props: propsType) => {
  const {route} = props;
  const {selectedCategory, startIndex, clickedWord} = route.params;

  const {useQuery} = RealmContext;
  const filteredWords = useQuery(Word, words => {
    return words.filtered(`category == $0`, selectedCategory);
  });

  const reorderedWords = [
    clickedWord,
    ...filteredWords.filter(word => word !== clickedWord),
  ];
  const convertedWords: Word[] = Array.from(reorderedWords);

  return <Slider words={convertedWords} startIndex={startIndex} />;
};

const styles = StyleSheet.create({});
