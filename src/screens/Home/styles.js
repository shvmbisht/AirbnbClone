import {StyleSheet, Dimensions} from 'react-native';
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontSize: 80,
    color: 'white',
    fontWeight: 'bold',
    width: '70  %',
    marginLeft: 25,
    textAlign: 'left',
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: 200,
    marginLeft: 25,
    marginTop: 25,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  searchButton: {
    backgroundColor: '#fff',
    borderRadius: 30,
    width: Dimensions.get('screen').width - 20,
    padding: '0px 10px',
    marginHorizontal: 10,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 30,
    zIndex: 10,
  },
  searchButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
