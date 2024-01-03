import {AppProvider, UserProvider} from '@realm/react';
import {RealmWrapper} from './RealmWrapper';
import {APP_ID} from '@env';
import Background from './backgroundComponents/Background';
import React from 'react';

export const AppWrapper = () => {
  return (
    <AppProvider id={APP_ID}>
      <UserProvider fallback={RealmWrapper}>
        <Background>
          <RealmWrapper />
        </Background>
      </UserProvider>
    </AppProvider>
  );
};
