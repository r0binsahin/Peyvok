import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {RealmContext, Word} from '../../models/Word';

import {RootStackParamList} from '../../utiles/RootStackParams';
import WordView from '../../components/WordView';

type propsType = NativeStackScreenProps<RootStackParamList, 'CategoryScreen'>;
const {width, height} = Dimensions.get('screen');

export const CategoryScreen = (props: propsType) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const {route} = props;
  const {selectedCategory} = route.params;
  const {useQuery} = RealmContext;

  const filteredWords = useQuery(Word, words => {
    return words.filtered(`category == $0`, selectedCategory);
  });

  return (
    <ScrollView>
      <View style={styles.container}>
        {filteredWords.map((word, index) => (
          <TouchableOpacity
            key={index}
            onPress={() =>
              navigation.navigate('WordScreen', {
                selectedWord: word.word,
              })
            }>
            <WordView word={word} />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    height,

    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',

    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
