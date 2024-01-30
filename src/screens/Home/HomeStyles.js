import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignContent: 'center',
  },
  menuStyle: {
    paddingLeft: 10,
  },
  headertxt: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingLeft: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#0c7ec4',
    borderBottomWidth: 0.3,
    borderBottomColor: 'grey',
  },
  wallettxt: {
    color: '#F37F1A',
    fontSize: 22,
  },
  imgContainer: {
    // backgroundColor: "#fff",
    borderRadius: 17,
  },
  imgConatainer: {
    paddingRight: 10,
  },
  imgstyle: {
    height: 35,
    width: 35,
  },
  imgstyle1: {
    height: 35,
    width: 120,
  },
  imgStyles: {
    height: 80,
    width: 80,
    borderRadius: 17,
  },
  GraphStyles: {
    height: 130,
    width: 150,
  },
  monthContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 10,
  },
  monthTxt: {
    color: '#000',
  },
  flatContainer: {
    margin: 8,
    backgroundColor: '#0c7ec4',
    borderRadius: 12,
    height: 125,
    width: 155,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    color: '#bbf2fa',
    paddingTop: 10,
  },
  graphStyle: {
    padding: 10,
    borderRadius: 11,
  },
});

export default Styles;
