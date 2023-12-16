import {ICategory} from '../../models/ICategory';

export type RootStackParamList = {
  HomeScreen: undefined;
  CategoryScreen: {selectedCategory: string};
  InfoScreen: undefined;
  WordScreen: undefined;
};
