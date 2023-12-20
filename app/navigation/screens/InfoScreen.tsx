import {Text, View} from 'react-native';
import Slider from '../../components/Slider';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {RealmContext, Word} from '../../models/Word';

export const InfoScreen = () => {
  const {useQuery} = RealmContext;
  const words = useQuery(Word);

  const convertedWords: Word[] = Array.from(words);
  return (
    <GestureHandlerRootView>
      <Slider startIndex={0} words={convertedWords} />
    </GestureHandlerRootView>
  );
};
