import {StyleSheet} from 'react-native';

export const header = StyleSheet.create({
  container: {
    backgroundColor: '#1c335e',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 600,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: 'white',
    color: 'white',
    width: '100%',
  },
});
