import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  Container: {
    margin: 10,
    padding: 10,
    borderRadius: 4,
    backgroundColor: '#EADDDD',
  },
  NameText: {
    fontWeight: 'bold',
    color: '#36251B',
    fontSize: 18,
  },
  CategoryText: {
    color: '#36251B',
    fontSize: 16,
  },
  LocationText: {color: '#36251B', fontSize: 16},
  LevelText: {alignSelf: 'flex-end', color: '#36251B', fontSize: 16},
  RemoveButton: {
    backgroundColor: '#FFAAAA',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    padding: 10,
    marginVertical: 10,
    width: '40%',
    borderRadius: 5,
  },
  ButtonText: {
    color: '#36251B',
    fontWeight: 'bold',
  },
});
