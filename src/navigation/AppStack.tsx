import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Landing from '../screens/Landing/Landing';
import DeepLink from '../screens/DeepLink/DeepLink';

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  Landing: undefined;
  DeepLink: {
    url: string;
  };
};

export default function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="DeepLink" component={DeepLink} />
    </Stack.Navigator>
  );
}
