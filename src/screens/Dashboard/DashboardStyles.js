import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainBody: {
    height: 400,
    backgroundColor: '#0c7ec4',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  inrContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    color: '#D2DDF5',
    fontSize: 18,
  },
  textContainer2: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '500',
    left: -70,
    bottom: 5,
  },
  balancetxt: {
    color: '#D2DDF5',
    fontSize: 14,
  },
  balancetxt2: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
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
  imgBackground: {
    width: '100%',
    height: '50%',
  },

  btnCont2: {
    padding: 10,
  },

  priceTxt2: {
    color: '#fff',
    fontSize: 20,
    paddingLeft: 20,
  },
  btnCont3: {
    alignSelf: 'flex-start',
    padding: 10,
    marginLeft: 10,
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
  btnStyle: {
    width: 150,
    height: 65,
    backgroundColor: '#fff',
    borderRadius: 12,
    alignItems: 'center',
  },
  RequestBtn: {
    padding: 20,
    width: width - 20,
    height: 50,
    backgroundColor: '#A3C1F5',
    borderRadius: 7,
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
    height: 45,
    width: 45,
    borderRadius: 50,
  },
  flatContainer: {
    backgroundColor: '#f5f2f2',
    width: '97%',
    height: 110,
    margin: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    borderColor: 'grey',
    borderRadius: 11,
  },
  flatContainertop: {
    backgroundColor: '#EBEBEE',
    width: width - 50,
    height: 80,
    margin: 1,
    alignSelf: 'center',
    borderColor: 'grey',
    borderRadius: 11,
  },
  flatText3: {
    color: '#687CFE',
    fontSize: 14,
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
  flatText: {
    color: '#A2A5B0',
    fontSize: 14,
    fontWeight: '500',
    paddingTop: 5,
    paddingLeft: 5,
  },
  flatText2: {
    color: '#EF7F18',
    fontSize: 25,
    fontWeight: 'bold',
    paddingLeft: 20,
    top: 5,
  },
  flatText5: {
    color: '#495057',
    fontSize: 15,
    fontWeight: '500',
  },
  flattitle: {
    color: '#EF7F18',
    fontSize: 15,
    fontWeight: 'bold',
  },
  flattitle2: {
    color: '#878A99',
    fontSize: 14,
    fontWeight: 'bold',
  },

  ParentContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: '#777777',
  },
  menuStyle: {
    color: 'white',
    fontSize: 20,
    paddingRight: 70,
  },
  ftTxt: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    bottom: 10,
  },
  Usertxt: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 22,
  },
  EditText: {
    color: '#000',
    // fontWeight: 'bold',
    fontSize: 18,
    paddingRight: 90,
  },
  saveText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  EditContainer: {
    backgroundColor: '#fff',
    height: 30,
    width: 30,
    borderRadius: 50,
    zIndex: 2,
    alignSelf: 'center',
    bottom: 30,
    left: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Useridenty: {
    color: '#ddd',
    fontSize: 14,
    paddingLeft: 5,
    paddingVertical: 3,
  },
  imglogoContainer: {
    alignSelf: 'center',
    borderRadius: 50,
  },
  userlogoStyle: {
    height: 150,
    width: 150,
    alignItems: 'center',
    borderRadius: 50,
  },
  profileContainer: {
    backgroundColor: '#0c7ec4',
    height: height - 500,
    padding: 10,
    paddingTop: 20,
    zIndex: 1,
  },
  CameraStyle: {},

  rdxContainer: {
    // flexDirection: 'row',
    // justifyContent: 'space-evenly',
  },
  InputContainer: {
    height: 45,
    borderColor: 'gray',
    borderWidth: 0.2,
    padding: 10,
    margin: 20,
    borderRadius: 5,
    color: 'black',
  },
  mainInputContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#E3E4EE',
    zIndex: 1,
  },
  boxContainer: {
    borderRadius: 5,
    backgroundColor: '#fff',
    borderColor: 'gray',
    width: width - 20,
    height: 600,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: {
      height: 0.5,
      width: 1,
    },
  },
  SaveContainer: {
    backgroundColor: '#0c7ec4',
    padding: 10,
    width: '50%',
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  lable: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  lable2: {
    color: '#495057',
    fontSize: 22,
    fontWeight: 'bold',
    padding: 10,
    paddingLeft: 20,
  },
  iconCalender: {
    position: 'absolute',
    alignSelf: 'flex-end',
    margin: 10,
    padding: 20,
    right: 5,
  },
  icon: {
    position: 'absolute',
    alignSelf: 'flex-end',
    margin: 10,
    padding: 20,
    right: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 40,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  itemStyle1: {
    flex: 1,
    padding: 5,
    margin: 1,
    paddingTop: 10,
  },
  itemStyle2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 5,
  },
  itemStyle3: {
    height: 30,
    width: 30,
    borderRadius: 50,
  },
  itemStyle4: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 10,
  },
  itemStyle5: {
    paddingTop: 435,
    flexGrow: 1,
    height: '100%',
  },
  itemStyle6: {
    flexDirection: 'row',
    padding: 10,
  },
  itemStyle7: {
    paddingLeft: 20,
  },
  itemStyle8: {
    color: '#878A99',
    fontWeight: 'bold',
    fontSize: 13,
  },
  itemStyle9: {
    flexDirection: 'row',
    zIndex: 3,
    bottom: 55,
    left: -30,
    alignSelf: 'flex-end',
  },
  itemStyle10: {
    top: 2,
    left: -5,
  },
  itemStyle11: {
    top: 5,
    color: '#878A99',
    fontWeight: 'bold',
    fontSize: 13,
  },
  itemStyle12: {
    flexDirection: 'row',
    zIndex: 3,
    bottom: 55,
    left: -40,
    alignSelf: 'flex-end',
  },
  itemStyle13: {
    color: '#878A99',
    fontWeight: 'bold',
    fontSize: 13.5,
    top: 5,
  },
  graphstyles: {
    paddingHorizontal: 10,
  },
});

export default Styles;
