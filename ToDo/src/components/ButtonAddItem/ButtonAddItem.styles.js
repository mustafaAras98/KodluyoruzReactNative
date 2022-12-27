import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  Container: {flex: 1},
  Button: {
    backgroundColor: '#f4a261',
    position: 'absolute',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 30,
    borderRadius: 30,
    borderWidth: 1.5,
    borderColor: '#264653',
  },
  ButtonText: {
    color: '#264653',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
