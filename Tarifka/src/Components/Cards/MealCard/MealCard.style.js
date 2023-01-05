import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  Container: {
    marginHorizontal: '6%',
    marginTop: '6%',
  },
  TitleContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    padding: 10,
    width: '100%',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: '#05818790',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Image: {flex: 1, width: '100%', minHeight: 200, borderRadius: 10},
  Title: {
    color: '#F4E8B8',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
