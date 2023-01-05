import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  Container: {
    marginHorizontal: '6%',
    marginVertical: '6%',
    borderRadius: 10,
  },
  TextContainer: {
    backgroundColor: '#058187',
    padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  Image: {
    width: '100%',
    minHeight: 300,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    resizeMode: 'cover',
  },
  Title: {
    marginVertical: 5,
    color: '#E6AA30',
    fontWeight: 'bold',
    fontSize: 18,
  },
  BoldText: {fontWeight: 'bold', color: '#E6AA30'},
  NormalText: {color: '#F4E8B8'},
  Button: {
    padding: 20,
    width: '70%',
    marginVertical: '5%',
    borderRadius: 30,
    backgroundColor: '#C24F1A',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
