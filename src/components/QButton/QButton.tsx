import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './QButton.styles';

export interface QButtonProps {
  title: string;
  onClick: () => void;
}
export default function QButton({title, onClick}: QButtonProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onClick()}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
