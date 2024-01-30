import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  ListContainer: {
    flex: 1,
    paddingTop: 20,
  },
  rowContainer: {
    padding: 5,
    margin: 5,
    width: '100%',
    height: 60,
    // backgroundColor: 'gray',
    // backgroundColor: '#0c7ec4',
    borderBottomWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 11,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  btnContainer: {
    alignItems: 'center',
  },
  logoview: {
    alignItems: 'center',
  },
  logoStyle: {
    borderRadius: 9,
  },
  txtContainer: {
    color: '#3a3185',
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: 'Roboto',
    textAlign: 'center',
  },
  headerView: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderColor: 'grey',
    backgroundColor: '#0c7ec4',
    padding: 20,
  },
  ftTxt: {
    color: '#fff',
    fontSize: 22,
    padding: 10,
    paddingLeft: 100,
    textAlign: 'center',
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
  EditText2: {
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  Useridenty: {
    color: '#ddd',
    fontSize: 14,
    paddingLeft: 5,
    paddingVertical: 3,
  },
  imglogoContainer: {
    paddingLeft: 30,
    paddingTop: 20,
    borderRadius: 50,
  },
  userlogoStyle: {
    height: 80,
    width: 80,
    borderRadius: 50,
  },
  profileContainer: {
    // backgroundColor: '#3a3185',
    backgroundColor: '#0c7ec4',
    height: height - 600,
    borderBottomStartRadius: 50,
    borderBottomEndRadius: 50,
    padding: 10,
  },
  BoxContainer: {
    backgroundColor: '#F1C448',
    height: 40,
    width: 40,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
  },
  BoxContainer2: {
    flexDirection: 'row',
    padding: 10,
    alignSelf: 'center',
    borderWidth: 0.4,
    borderColor: '#aba7a4',
    borderRadius: 9,
    marginBottom: 50,
  },
  BoxContainer3: {
    backgroundColor: '#228CE5',
    height: 40,
    width: 40,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
  },
  BoxContainer4: {
    backgroundColor: '#50BA7B',
    height: 40,
    width: 40,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
  },
  BoxContainer5: {
    backgroundColor: '#252B40',
    height: 40,
    width: 40,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
  },
  CameraStyle: {
    paddingRight: 20,
  },
  txttContainer: {
    paddingTop: 20,
  },
  rdxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  flexStyles: {
    flexDirection: 'row',
  },
});

export default Styles;
