import {Text, View} from 'react-native';
import {RealmContext, Word} from '../../models/Word';

export const CategoryScreen = () => {
  const {useQuery} = RealmContext;
  const filteredWords = useQuery(Word);

  return (
    <View>
      <Text>Category</Text>
    </View>
  );
};
