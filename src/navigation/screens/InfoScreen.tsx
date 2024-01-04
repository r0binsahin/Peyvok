import {View} from 'react-native';
import Background from '../../components/backgroundComponents/Background';
import {RealmContext, Word} from '../../models/Word';
import {Text} from 'react-native-svg';
import React from 'react';
import Skeleton from '../../components/Skeleton';
import Information from '../../components/Information';

export const InfoScreen = () => {
  const {useQuery} = RealmContext;
  const words = useQuery(Word);

  const convertedWords: Word[] = Array.from(words);
  return (
    <View
      style={{
        flex: 1,
      }}>
      <Information />
    </View>
  );
};
