import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
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
    fontSize: 20,
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
    height: 40,
    borderColor: 'gray',
    borderWidth: 0.2,
    padding: 10,
    margin: 10,
    borderRadius: 30,
    paddingHorizontal: 40,
  },
  mainInputContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#E3E4EE',
    zIndex: 1,
  },
  boxContainer: {
    marginBottom: 100,
    borderRadius: 5,
    backgroundColor: '#fff',
    borderColor: 'gray',
    width: '90%',
    height: height - 320,
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
    padding: 5,
    margin: 15,
    borderRadius: 30,
    marginTop: 50,
  },
  lableOne: {
    color: '#000',
    fontSize: 16,
    padding: 10,
    margin: 10,
  },
  lable: {
    textAlign: 'center',
    color: '#000',
    fontSize: 20,
    padding: 10,
    fontWeight: 'bold',
  },
  icon: {
    position: 'absolute',
    margin: 10,
    padding: 10,
  },
});

export default Styles;
