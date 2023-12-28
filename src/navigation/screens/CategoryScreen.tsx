import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  Dimensions,
  Text,
} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {RealmContext, Word} from '../../models/Word';

import {RootStackParamList} from '../../utiles/RootStackParams';
import WordView from '../../components/WordView';
import React from 'react';
import GlobalStyles from '../../utiles/GlobalStyles';

type propsType = NativeStackScreenProps<RootStackParamList, 'CategoryScreen'>;

export const CategoryScreen = (props: propsType) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const {route} = props;
  const {selectedCategory, selectedCategoryKu} = route.params;
  const {useQuery} = RealmContext;
  const words = useQuery(Word);

  const filteredWords = useQuery(Word, words => {
    return words.filtered(`category == $0`, selectedCategory);
  });

  const handleWordPress = (selectedCategory: string, word: Word) => {
    navigation.navigate('WordScreen', {
      selectedCategory: selectedCategory,
      clickedWordId: word._id.toHexString(),
    });
  };

  return (
    <ScrollView>
      <View style={styles.wrapper}>
        <View style={styles.categoryTitle}>
          <Text style={GlobalStyles.categoryHead}>{selectedCategoryKu}</Text>
        </View>
        <View style={styles.container}>
          {filteredWords.map((word, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleWordPress(word.category, word)}>
              <WordView word={word} />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
    justifyContent: 'center',
  },
  categoryTitle: {
    position: 'absolute',
    zIndex: 2,
    top: 0,
  },
});
