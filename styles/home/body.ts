import {StyleSheet} from 'react-native';

export const body = StyleSheet.create({
  container: {
    height: '85%',
    backgroundColor: '#1c335e',
  },
  item: {
    borderColor: 'white',
    borderWidth: 1,
    backgroundColor: '#325ca8',
    borderRadius: 5,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  image: {
    width: 75,
    height: 50,
  },
  title: {
    color: 'white',
    fontSize: 21,
    width: 150,
  },
});
