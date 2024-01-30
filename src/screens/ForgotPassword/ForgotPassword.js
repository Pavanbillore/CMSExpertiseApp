import React, {createRef, useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  SafeAreaView,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from 'react-native';
import Back from 'react-native-vector-icons/AntDesign';
import Styles from './ForgotPasswordStyles';
import Toast from 'react-native-simple-toast';
const ForgotPassword = ({navigation}) => {
  const logo = require('../../assets/images/logo.png');
  // const img2 = require('../assets/images/lockers.png');
  // const img3 = require('../assets/images/reportcard.png');
  const [name, setName] = React.useState('');
  const [userEmail, setUserEmail] = useState('');
  const [emailerror, setEmailerror] = useState('');
  const submitForm = () => {
    const strongRegex = new RegExp(
      '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$',
    );
    var done = true;
    if (!strongRegex.test(userEmail) == true) {
      setEmailerror('please enter your correct email');
      return false;
      if (userEmail == '') {
        setEmailerror('please enter your email');
        done = false;
      } else {
        null;
      }
    }
    if (done) {
      navigation.navigate('home');
      Toast.showWithGravity(
        'password forgot successfully',
        Toast.LONG,
        Toast.TOP,
      );
    } else {
      Toast.showWithGravity(
        'please enter email required',
        Toast.LONG,
        Toast.CENTER,
      );
    }
    Keyboard.dismiss();
  };

  return (
    <SafeAreaView style={Styles.mainBody}>
      <View style={Styles.headerView}>
        <TouchableOpacity
          style={Styles.btnContainer}
          onPress={() => {
            navigation.goBack();
          }}>
          <Back name="arrowleft" size={30} color="#000" />
        </TouchableOpacity>
        <Text style={Styles.ftTxt}>Forgot Password</Text>
      </View>

      <View style={Styles.mainView}>
        <View style={Styles.txtCont}>
          <Text style={Styles.worryTxt}>
            Please, enter your email address. You will recieve a link to create
            a new password via email.
          </Text>
        </View>
        <View style={Styles.SectionStyle}>
          <TextInput
            style={Styles.inputStyle}
            //   onChangeText={() => setUserEmail(userEmail)}
            onChangeText={UserEmail => {
              setUserEmail(UserEmail);
              if (UserEmail && UserEmail != '') {
                setEmailerror(null);
              }
            }}
            placeholder="Enter Email Address" //12345
            placeholderTextColor="#8b9cb5"
            keyboardType="default"
            blurOnSubmit={false}
            underlineColorAndroid="#f000"
            returnKeyType="next"
          />
        </View>
        <Text
          style={{
            color: 'red',
            paddingLeft: 45,
            bottom: 10,
            display: emailerror ? 'flex' : 'none',
          }}>
          {emailerror}
        </Text>
        <TouchableOpacity
          style={Styles.buttonStyle}
          activeOpacity={0.5}
          onPress={() => submitForm()}>
          <Text style={Styles.buttonTextStyle}>SEND</Text>
        </TouchableOpacity>
        <View style={Styles.btnView}>
          <Text
            style={Styles.registerTextStyle}
            onPress={() => navigation.navigate('sign-up')}>
            Don't have an account ?
          </Text>
          <Text
            style={Styles.registerTextStyle2}
            onPress={() => navigation.navigate('sign-in')}>
            Sign Up
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;
