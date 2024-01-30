import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },

  imgConatainer: {
    paddingRight: 10,
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
    width: '95%',
    height: 70,
    margin: 1,
    alignSelf: 'center',
    alignItems: 'center',
    borderColor: 'grey',
    borderRadius: 11,
  },
  flatlist: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
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
  example: {
    color: 'black',
    fontSize: 14,
  },
  floatContainer: {
    position: 'absolute',
    bottom: 100,
    right: 0,
    padding: 5,
    margin: 5,
  },
  floatBtnContainer: {
    position: 'absolute',
    bottom: 40,
    right: 10,
  },
  plusContainer: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: 30,
    right: 10,
    backgroundColor: '#0c7ec4',
    borderRadius: 100,
  },
  v9: {
    backgroundColor: '#0c7ec4',
    margin: 5,
    padding: 10,
    width: 180,
    alignItems: 'center',
    borderRadius: 30,
    marginBottom: 10,
  },
  v10: {
    backgroundColor: '#0c7ec4',
    margin: 5,
    padding: 10,
    width: 180,
    borderRadius: 30,
    alignItems: 'center',
  },
  padLeftStyles: {
    paddingLeft: 70,
  },
  vtStyles: {
    flexDirection: 'row',
    paddingTop: 25,
  },
  vvStyles: {
    margin: -5,
    paddingTop: 30,
  },
  tabStyles: {
    backgroundColor: 'white',
    width: '100%',
    alignSelf: 'center',
    height: '100%',
    marginBottom: 40,
  },
  pStyles: {
    margin: -5,
    paddingTop: 30,
  },
  cStyles: {
    flexDirection: 'row',
    paddingTop: 25,
  },
  tabviewStyles: {
    backgroundColor: 'white',
    width: '100%',
    alignSelf: 'center',
    height: '100%',
    marginBottom: 40,
  },
  titleStyles: {
    fontSize: 14,
    color: 'white',
  },
  conStyles: {
    backgroundColor: '#0c7ec4',
  },
  ccStyles1: {
    backgroundColor: '#E97550',
    height: 3,
  },
  vtStyless: {
    paddingTop: 30,
    backgroundColor: '#0c7ec4',
  },
});

export default Styles;
