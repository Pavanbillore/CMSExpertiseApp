import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#E6E6E6',
    alignItems: 'center',
    paddingTop: 20,
  },
  childContainer: {
    height: 200,
    width: width - 20,
    backgroundColor: '#C6D3E1',
    borderRadius: 11,
    padding: 5,
  },
  mainFlatContainer: {
    paddingTop: 20,
  },
  flatContainer: {
    margin: 5,
    padding: 5,
    height: 50,
    width: width - 20,
    borderWidth: 1,
    borderColor: '#E9E9E9',
    borderRadius: 11,
  },
  dirContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  imgStyle: {
    height: 40,
    width: 40,
  },
  titleStyle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '500',
  },
  userTextStyle: {
    color: '#4B525A',
    fontSize: 18,
    fontWeight: '500',
  },
  AvatarStyle: {
    height: 80,
    width: 80,
    borderRadius: 50,
  },
  padStyles: {paddingHorizontal: 20},
  boxContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  box2Container: {
    flexDirection: 'row',
    padding: 5,
    paddingHorizontal: 20,
    top: -20,
  },
  IconsStylesContainer: {
    flexDirection: 'row',
    padding: 5,
  },
  adminTextStyle: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  TxtStyles: {
    color: '#37394A',
    fontSize: 14,
    fontWeight: '500',
    paddingHorizontal: 5,
  },
  mobileTxt: {
    color: '#37394A',
    fontSize: 15,
  },
  dateTxt: {color: '#272A3A', fontSize: 14},
  adminStyle: {
    backgroundColor: '#F1656E',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  starStyles: {
    paddingHorizontal: 5,
  },
  l1: {
    backgroundColor: '#EFB778',
    margin: 5,
    padding: 5,
    height: 45,
    width: width - 20,
    borderRadius: 11,
    justifyContent: 'center',
  },
  l2: {
    backgroundColor: '#4888CF',
    margin: 5,
    padding: 5,
    height: 50,
    width: width - 20,
    borderRadius: 11,
    justifyContent: 'center',
  },
  l3: {
    backgroundColor: '#49AA6F',
    margin: 5,
    padding: 5,
    height: 50,
    width: width - 20,
    borderRadius: 11,
    justifyContent: 'center',
  },
  l4: {
    backgroundColor: '#8597F0',
    margin: 5,
    padding: 5,
    height: 50,
    width: width - 20,
    justifyContent: 'center',
    borderRadius: 11,
  },
});

export default Styles;
