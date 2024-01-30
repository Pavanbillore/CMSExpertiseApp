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
    color: '#fff',
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    paddingLeft: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 0.3,
    borderBottomColor: 'grey',
    backgroundColor: '#0c7ec4',
  },
  wallettxt: {
    color: '#F2C703',
    fontSize: 18,
    fontWeight: '500',
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
  indiStyles: {
    backgroundColor: 'white',
    height: 3,
  },
  titleStyless: {
    fontSize: 12,
  },
  contStyles: {
    backgroundColor: '#0c7ec4',
  },
  tabStyles: {
    backgroundColor: '#E5D3CA',
    width: '100%',
  },
  tabStyles2: {
    backgroundColor: 'blue',
    width: '100%',
  },
  tabStyles3: {
    backgroundColor: 'green',
    width: '100%',
  },
  conttabStyles: {
    backgroundColor: '#0c7ec4',
  },
});

export default Styles;
