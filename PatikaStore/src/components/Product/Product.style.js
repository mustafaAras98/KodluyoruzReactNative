import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e5e5',
    margin: 10,
    padding: 5,
    borderRadius: 10,
  },
  image_container: { flex: 4 },
  inner_container: {
    flex: 1,
    backgroundColor: '#e5e5e5',
  },
  image: {
    width: '100%',
    height: Dimensions.get('window').height / 4,
    resizeMode: 'cover',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#4c4c4c',
  },
  price: {
    marginTop: 3,
    color: '#4c4c4c',
  },
  inStock: {
    fontStyle: 'italic',
    textAlign: 'right',
    color: '#ef476f',
  },
});
