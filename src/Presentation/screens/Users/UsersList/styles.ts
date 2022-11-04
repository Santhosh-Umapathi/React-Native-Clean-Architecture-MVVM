import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {flex: 1, paddingTop: 20},
  userCard: {
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 5,
    backgroundColor: 'white',
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userText: {color: 'black', marginBottom: 5, fontSize: 18},
  image: {
    width: 100,
    height: 100,
    backgroundColor: 'salmon',
    borderRadius: 100 / 2,
    marginRight: 10,
  },
  textContainer: {flexDirection: 'column'},
  card: {backgroundColor: 'white'},
  addIcon: {width: 25, height: 25},
});

export default styles;
