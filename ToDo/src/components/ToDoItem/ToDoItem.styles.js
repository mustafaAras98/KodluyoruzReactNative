import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  Container: {
    borderRadius: 10,
    borderWidth: 0.8,
    margin: 10,
  },
  TextContainer: {
    backgroundColor: '#e76f51',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 10,
  },
  ButtonContainer: {
    backgroundColor: '#f4a261',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  CheckedText: {
    color: '#eae2b7',
    marginVertical: 5,
    fontStyle: 'italic',
    textDecorationLine: 'line-through',
  },
  NotCheckedText: {
    color: '#eae2b7',
    marginVertical: 5,
  },
  BoldText: {
    color: '#003049',
    fontWeight: 'bold',
  },
  Text: {
    color: '#eae2b7',
  },
  RemoveButton: {
    borderRadius: 10,
    backgroundColor: '#c33149',
    marginHorizontal: 5,
    padding: 20,
  },
  CheckButton: {
    borderRadius: 10,
    backgroundColor: '#a8c256',
    marginHorizontal: 5,
    padding: 20,
  },
  DisplayNone: {
    display: 'none',
  },
});
