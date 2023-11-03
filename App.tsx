/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './src/navigation/AppStack';
import {NativeModules} from 'react-native';
import {requestPermissions} from './src/utils/utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  DEEPLINK_PREFIX,
  PERMISSION_STATUS,
  permissions_key,
} from './src/utils/constants';

function App(): JSX.Element {
  useEffect(() => {
    NativeModules.SegmentAnalytics.initializeSegmentClient();
    NativeModules.SegmentAnalytics.identifySegmentCall();

    checkAndRequestPermission();
  }, []);

  const checkAndRequestPermission = async () => {
    AsyncStorage.removeItem(permissions_key);
    if (
      !(
        (await AsyncStorage.getItem(permissions_key)) ===
        PERMISSION_STATUS.GRANTED
      )
    ) {
      const res = await requestPermissions();
      if (res) {
        AsyncStorage.setItem(permissions_key, PERMISSION_STATUS.GRANTED);
      }
    }
  };

  const linking = {
    prefixes: [DEEPLINK_PREFIX],
    config: {
      screens: {
        DeepLink: '/:url',
      },
    },
  };

  return (
    <NavigationContainer linking={linking}>
      <AppStack />
    </NavigationContainer>
  );
}

export default App;
