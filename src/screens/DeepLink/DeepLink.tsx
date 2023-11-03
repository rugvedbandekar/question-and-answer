import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/AppStack';
import {WebView} from 'react-native-webview';

type Props = NativeStackScreenProps<RootStackParamList, 'DeepLink'>;

const DeepLink = ({route}: Props) => {
  return (
    <WebView source={{uri: `https://www.treebo.com/${route.params.url}`}} />
  );
};

export default DeepLink;
