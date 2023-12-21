export type RootStackParamList = {
  HomeScreen: undefined;
  CategoryScreen: {selectedCategory: string};
  InfoScreen: undefined;
  WordScreen: {
    selectedCategory: string;
    clickedWordId: string;
  };
};
