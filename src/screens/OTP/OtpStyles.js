import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const Styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  btnView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  headerView: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderColor: 'grey',
  },
  registerTextStyle: {
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
  },
  registerTextStyle2: {
    color: '#3a3185',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    paddingLeft: 10,
  },
  ftTxt: {
    color: '#000',
    fontSize: 24,
    padding: 10,
    paddingLeft: 70,
  },
  worryTxt: {
    color: 'grey',
    fontSize: 18,
    padding: 10,
  },
  timeTxt: {
    color: 'grey',
    fontSize: 16,
    padding: 10,
    textAlign: 'center',
    paddingTop: 20,
  },
  txtCont: {
    padding: 20,
    alignItems: 'center',
    paddingTop: 80,
  },
  btnContainer: {
    alignItems: 'flex-start',
    paddingRight: 10,
    margin: 10,
  },
  txtContainer: {
    color: '#3a3185',
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: 'Roboto',
  },
  SectionStyle: {
    alignItems: 'center',
    paddingTop: 30,
  },
  inputStyle: {
    flex: 1,
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
  },
  buttonStyle: {
    backgroundColor: '#rgb(238,129,31)',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 100,
    margin: 25,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  mainView: {
    flex: 1,
  },
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: '#03DAC6',
  },

  underlineStyleBase: {
    width: 40,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: '#03DAC6',
  },
  otpStyles: {
    width: '80%',
    height: 100,
  },
});

export default Styles;
