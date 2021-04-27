import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    marginHorizontal: 20,
  },
  title: {
    fontWeight: 'bold',
  },
  ageDescription: {
    color: '#8d8d8d',
  },
  guestNumber: {
    marginHorizontal: 20,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#474747',
  },
  button: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#676767',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
