export type RootStackParamList = {
  HomeScreen: undefined;
  CategoryScreen: {selectedCategory: string; selectedCategoryKu: string};
  InfoScreen: undefined;
  WordScreen: {
    selectedCategory: string;
    selectedCategoryKu: string;
    clickedWordId: string;
  };
};
