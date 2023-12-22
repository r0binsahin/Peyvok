export type RootStackParamList = {
  Home: undefined;
  HomeScreen: undefined;
  CategoryScreen: {selectedCategory: string};
  Info: undefined;
  WordScreen: {
    selectedCategory: string;
    clickedWordId: string;
  };
};
