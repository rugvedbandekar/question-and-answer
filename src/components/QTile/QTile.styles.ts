import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
    marginVertical: 8,
  },
  body: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  emptyCheckMark: {
    height: 25,
    width: 25,
    borderRadius: 25,
    borderColor: 'grey',
    borderWidth: 1,
    marginEnd: 8,
  },
  checkMark: {height: 25, width: 25, marginEnd: 8},
  verticalLine: {
    width: 2,
    backgroundColor: 'blue',
    height: 16,
    alignSelf: 'center',
  },
  chevronIcon: {height: 25, width: 25, marginEnd: 8},
});
