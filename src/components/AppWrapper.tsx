import React from 'react';
import {AppProvider, UserProvider} from '@realm/react';

import {RealmWrapper} from './RealmWrapper';

import {APP_ID} from '@env';

export const AppWrapper = () => {
  return (
    <AppProvider id={APP_ID}>
      <UserProvider fallback={RealmWrapper}>
        <RealmWrapper />
      </UserProvider>
    </AppProvider>
  );
};
