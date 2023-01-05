import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  Container: {
    backgroundColor: '#058187',
    padding: '6%',
    marginHorizontal: '6%',
    marginTop: '6%',
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  Image: {
    flex: 3,
    resizeMode: 'contain',
    minHeight: 100,
    width: 100,
  },
  Title: {
    flex: 4,
    textAlign: 'center',
    color: '#F4E8B8',
    fontWeight: 'bold',
    fontSize: 24,
  },
});
