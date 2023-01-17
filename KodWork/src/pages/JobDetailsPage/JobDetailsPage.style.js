import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#EAEAEA',
  },
  Title: {padding: 10, flex: 1.5},
  TitleText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#36251B',
    marginBottom: 10,
  },
  LocationText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#36251B',
  },
  LevelText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#36251B',
  },
  Html: {
    flex: 6,
    padding: 5,
    margin: 10,
    borderWidth: 1,
    borderColor: '#36251B',
    backgroundColor: '#EADDDD',
  },
  HtmlTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#36251B',
    width: '100%',
    borderBottomWidth: 2,
  },
  Footer: {
    flex: 1.5,
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 10,
  },
  Button: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    borderRadius: 20,
    width: '40%',
    backgroundColor: '#FFAAAA',
  },
  ButtonText: {
    color: '#36251B',
    fontWeight: 'bold',
  },
});

export default styles;
