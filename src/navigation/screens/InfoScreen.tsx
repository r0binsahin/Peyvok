import {View} from 'react-native';
import Background from '../../components/backgroundComponents/Background';
import {RealmContext, Word} from '../../models/Word';
import {Text} from 'react-native-svg';
import React from 'react';
import Skeleton from '../../components/Skeleton';

export const InfoScreen = () => {
  const {useQuery} = RealmContext;
  const words = useQuery(Word);

  const convertedWords: Word[] = Array.from(words);
  return (
    <View
      style={{
        flex: 1,
      }}>
      <Skeleton borderRadius={20} width={200} height={200} />
    </View>
  );
};
