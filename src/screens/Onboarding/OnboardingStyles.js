import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  btnContainer: {
    alignItems: 'flex-end',
    paddingRight: 10,
    margin: 10,
  },
  btnContainer2: {
    backgroundColor: '#fff',
    height: 50,
    width: '90%',
    justifyContent: 'center',
    borderRadius: 7,
    alignSelf: 'center',
    marginTop: 110,
  },
  txtContainer: {
    color: '#3a3185',
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: 'Roboto',
  },
  imgContainer: {
    height: 300,
    width: 300,
  },
  imgViewContainer: {
    padding: 10,
    paddingTop: 50,
    alignItems: 'center',
  },
  flatimg: {
    width: 300,
    height: 300,
    right: '1%',
    alignSelf: 'center',
    borderColor: 'rgba(0, 0, 0, 0.18)',
  },
  modalContainer: {
    height: '50%',
    width: width - 1,
    margin: 0.5,
    padding: 10,
    backgroundColor: '#3a3185',
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
    alignSelf: 'center',
  },
  wallettxt: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
    paddingTop: 20,
  },
  wallettxt2: {
    color: '#fff',
    fontSize: 16,
    paddingTop: 50,
    textAlign: 'center',
    lineHeight: 25,
  },
  Gettxt: {
    color: '#3a3185',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'sans-serif',
  },
});

export default Styles;
