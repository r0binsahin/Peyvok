import {useApp, useRealm} from '@realm/react';
import {ActivityIndicator, SafeAreaView, Text} from 'react-native';
import {OpenRealmBehaviorType} from 'realm';
import Realm from 'realm';

import {useEffect, useState} from 'react';
import App from '../App';
import {RealmContext} from '../models/Word';

const {RealmProvider} = RealmContext;

export const RealmWrapper = () => {
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
    <SafeAreaView>
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
          }}>
          <App />
        </RealmProvider>
      ) : (
        <ActivityIndicator size={'large'} />
      )}
    </SafeAreaView>
  );
};
