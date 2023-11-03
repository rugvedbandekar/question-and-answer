import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './QOptions.styles';

export interface QOptionsProps {
  title: string;
  onClick: () => void;
  isSelected: boolean;
}

const QOptions = ({title, onClick, isSelected = false}: QOptionsProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        isSelected ? styles.selected : styles.unSelected,
      ]}
      onPress={onClick}>
      <Text
        style={[
          styles.title,
          isSelected ? styles.selectedText : styles.unselectedText,
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default QOptions;
