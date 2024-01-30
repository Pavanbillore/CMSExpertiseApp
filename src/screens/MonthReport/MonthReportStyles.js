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
    borderBottomWidth: 0.3,
    borderBottomColor: 'grey',
  },
  wallettxt: {
    color: '#F37F1A',
    fontSize: 18,
  },
  walletConatainer: {
    // backgroundColor: "#3a3185",
    // borderRadius: 11,
  },
  imgConatainer: {
    paddingRight: 10,
  },
  imgstyle: {
    height: 35,
    width: 35,
  },
  monthContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 10,
  },
  monthTxt: {
    color: '#000',
  },
});

export default Styles;
