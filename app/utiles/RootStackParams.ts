export type RootStackParamList = {
  HomeScreen: undefined;
  CategoryScreen: {selectedCategory: string};
  Info: undefined;
  WordScreen: {
    selectedCategory: string;
    clickedWordId: string;
  };
};
