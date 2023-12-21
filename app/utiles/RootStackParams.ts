import {Word} from '../models/Word';

export type RootStackParamList = {
  HomeScreen: undefined;
  CategoryScreen: {selectedCategory: string};
  InfoScreen: undefined;
  WordScreen: {
    selectedCategory: string;
    clickedWord: Word;
  };
};
