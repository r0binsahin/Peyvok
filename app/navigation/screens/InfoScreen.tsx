import Background from '../../components/Background';
import {RealmContext, Word} from '../../models/Word';

export const InfoScreen = () => {
  const {useQuery} = RealmContext;
  const words = useQuery(Word);

  const convertedWords: Word[] = Array.from(words);
  return <Background />;
};
