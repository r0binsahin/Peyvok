export type RootStackParamList = {
  HomeScreen: undefined;
  CategoryScreen: {selectedCategory: string; selectedCategoryKu: string};
  Info: undefined;
  WordScreen: {
    selectedCategory: string;
    selectedCategoryKu: string;
    clickedWordId: string;
  };
};
