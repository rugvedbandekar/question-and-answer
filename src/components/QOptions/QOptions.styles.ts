import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    width: '100%',
    backgroundColor: 'blue',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 1,
    marginVertical: 8,
  },
  title: {
    color: 'white',
  },
  selected: {backgroundColor: 'green'},
  unSelected: {backgroundColor: 'white'},
  selectedText: {color: 'white'},
  unselectedText: {color: 'blue'},
});
