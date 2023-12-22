import {useApp} from '@realm/react';

import {ActivityIndicator, SafeAreaView} from 'react-native';
import {useEffect, useState} from 'react';

import {OpenRealmBehaviorType} from 'realm';
import Realm from 'realm';

import App from '../App';
import {RealmContext, Word} from '../models/Word';
import {Category} from '../models/Category';

export const RealmWrapper = () => {
  const {RealmProvider} = RealmContext;
  const app = useApp();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = async () => {
    const credentials = Realm.Credentials.anonymous();
    await app.logIn(credentials);
    setIsLoggedIn(true);
  };

  useEffect(() => {
    const authenticate = async () => {
      try {
        await login();
      } catch (error) {
        console.log('An error occurred during authentication:', error);
      }
    };

    authenticate();
  }, [app]);

  return (
    <SafeAreaView style={{flex: 1}}>
      {isLoggedIn ? (
        <RealmProvider
          sync={{
            flexible: true,
            newRealmFileBehavior: {
              type: OpenRealmBehaviorType.DownloadBeforeOpen,
            },
            existingRealmFileBehavior: {
              type: OpenRealmBehaviorType.OpenImmediately,
            },
          }}
          schema={[Word, Category]}>
          <App />
        </RealmProvider>
      ) : (
        <ActivityIndicator size={'large'} />
      )}
    </SafeAreaView>
  );
};
