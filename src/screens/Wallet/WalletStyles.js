import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainBody: {
    height: 400,
    // backgroundColor: '#2D9AF5',
    backgroundColor: '#0c7ec4',
    borderBottomStartRadius: 50,
    borderBottomEndRadius: 50,
  },
  txtContainer: {
    color: '#000',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    margin: 10,
  },
  imgConatainer: {
    paddingRight: 10,
  },
  imgstyle: {
    height: 35,
    width: 35,
  },
  imgStyles: {
    height: 80,
    width: 80,
    borderRadius: 17,
  },
  monthContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 10,
  },
  topupTxt: {
    color: '#EE811F',
    fontSize: 16,
  },
  cardTxt: {
    color: '#fff',
    fontSize: 20,
  },
  balanceTxt: {
    color: '#000',
    fontSize: 20,
  },
  inrTxt: {
    color: '#3a3185',
    fontSize: 14,
  },
  inrTxt2: {
    // color: '#EE811F',
    color: '#3a3185',
    fontSize: 14,
  },
  hdTxt: {
    color: '#EE811F',
    fontSize: 18,
    fontWeight: 'bold',
  },
  rtTxt: {
    color: '#45A581',
    fontSize: 16,
  },
  priceTxt: {
    color: '#fff',
    fontSize: 24,
    paddingLeft: 10,
    fontWeight: 'bold',
  },
  priceTxt2: {
    color: '#fff',
    fontSize: 20,
    paddingLeft: 20,
  },
  topupBody: {
    backgroundColor: '#fff',
    borderRadius: 11,
    height: 50,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 10,
  },

  cardBody: {
    backgroundColor: '#fff',
    borderRadius: 9,
    height: 25,
    width: 35,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 20,
  },
  priceConatiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  TransBody: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  allBody: {
    backgroundColor: '#fff',
    borderRadius: 11,
    height: 60,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mouseIconStyle: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginHorizontal: 10,
  },
  flatContainer: {
    backgroundColor: '#f5f2f2',
    flexDirection: 'row',
    width: '90%',
    height: 70,
    margin: 1,
    alignSelf: 'center',
    alignItems: 'center',
    borderColor: 'grey',
    borderRadius: 11,
  },
  flatText: {
    color: '#EE811F',
    fontSize: 16,
    fontWeight: 'bold',
  },
  flatText2: {
    color: 'gray',
    fontSize: 14,
    bottom: 30,
  },
  ParentContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: '#777777',
  },
  mainviewStyles: {
    padding: 10,
    margin: 10,
    paddingTop: 30,
  },
  loadStyles: {
    flex: 1,
    justifyContent: 'center',
  },
  turnStyles: {
    height: '100%',
    zIndex: 1,
    bottom: 80,
  },
  contStyles: {
    flex: 1,
    padding: 5,
    margin: 1,
  },
  loaddStyles: {
    flexDirection: 'row',
    paddingTop: 25,
  },
  padStyles: {
    paddingLeft: 70,
  },
});

export default Styles;
