import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/FontAwesome5';
const DrawerScreen = ({navigation}) => {
  return (
    <View style={style.container}>
      <StatusBar backgroundColor={'#7DB8D8'} />
      <View>
        <ImageBackground
          style={style.img}
          source={require('../../assets/images/avatar.jpg')}>
          <Text style={style.backTxt}>Expertise_CMS</Text>
          <View style={style.icons}>
            <Icon name="mail" size={26} color={'#3a3185'} />
            <Icon name="facebook-square" size={26} color={'#3a3185'} />
            <Icon name="google" size={26} color={'#3a3185'} />
            {/*  <Icon name="youtube" size={26} color={'#3a3185'} />
  <Icon name="twitter" size={26} color={'#3a3185'} /> */}
          </View>
        </ImageBackground>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('wallet');
          }}>
          <View style={style.setting}>
            <Icons name="wallet" size={20} color="black" />
            <Text style={style.settingTxt}>Wallet</Text>
            <Icon style={style.right} name="right" size={20} color="grey" />
          </View>
        </TouchableOpacity>

        {/*<TouchableOpacity>
          <View style={style.setting}>
            <Icon name="infocirlce" size={20} color="black" />
            <Text style={style.settingTxt}>About US</Text>
            <Icon style={style.right} name="right" size={20} color="grey" />
          </View>
        </TouchableOpacity>
        */}
        <TouchableOpacity>
          <View style={style.setting}>
            <Icon name="questioncircleo" size={20} color="black" />
            <Text style={style.settingTxt}>FAQs</Text>
            <Icon style={style.right} name="right" size={20} color="grey" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={style.setting}>
            <Icon name="mail" size={20} color="black" />
            <Text style={style.settingTxt}>Contact US</Text>
            <Icon style={style.right} name="right" size={20} color="grey" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default DrawerScreen;
const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    height: 250,
    width: 'auto',
  },
  backTxt: {
    fontSize: 26,
    color: '#fff',
    textAlign: 'center',
    paddingTop: 100,
    fontWeight: 'bold',
    fontFamily: 'serif',
  },
  icons: {
    flexDirection: 'row',
    marginTop: 60,
    padding: 10,
    justifyContent: 'space-around',
  },
  setting: {
    height: 80,
    paddingLeft: 20,
    marginRight: 20,
    borderBottomWidth: 1,
    borderColor: 'grey',
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingTxt: {
    color: 'black',
    marginLeft: 20,
    fontSize: 16,
  },
  right: {
    marginLeft: 'auto',
  },
});
