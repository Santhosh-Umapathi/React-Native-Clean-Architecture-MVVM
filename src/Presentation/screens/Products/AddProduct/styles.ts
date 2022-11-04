import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {flex: 1},
  input: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginTop: 20,
    marginHorizontal: 20,
    color: 'black',
  },
  image: {
    width: '100%',
    height: 160,
    marginRight: 10,
  },
  saveIcon: {width: 25, height: 25},
  iconContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    flexDirection: 'row',
  },
  imageContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  deleteButton: {marginLeft: 50},
});

export default styles;
