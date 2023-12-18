import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootStackParamList} from '../../utiles/RootStackParams';
import {RealmContext, Word} from '../../models/Word';

import WordView from '../../components/WordView';
import {StyleSheet, View} from 'react-native';
import {index} from 'realm';

type propsType = NativeStackScreenProps<RootStackParamList, 'WordScreen'>;

export const WordScreen = (props: propsType) => {
  const {route} = props;
  const {selectedWord} = route.params;

  const {useQuery} = RealmContext;
  const filteredWords = useQuery(Word, words => {
    return words.filtered(`word == $0`, selectedWord);
  });

  return filteredWords.map((word, index) => (
    <View key={index} style={styles.container}>
      <WordView word={word} />
    </View>
  ));
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
