export type RootStackParamList = {
  HomeScreen: undefined;
  CategoryScreen: {selectedCategory: string};
  InfoScreen: undefined;
  WordScreen: {
    startIndex: number;
    selectedCategory: string;
  };
};
