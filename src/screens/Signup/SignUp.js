import React, {createRef, useEffect, useState} from 'react';
import {
  View,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
  Text,
  SafeAreaView,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from 'react-native';
import Toast from 'react-native-simple-toast';
import {API} from '../../utils/api';
import Styles from './SignupStyles';
const SignUp = ({navigation}) => {
  const logo = require('../../assets/images/logo.png');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [repassword, setrepassword] = useState('');
  const [repassworderror, setrepassworderror] = useState('');
  const [emailerror, setEmailerror] = useState('');
  const [passworderror, setPassworderror] = useState('');
  const submitForm = () => {
    const strongRegex = new RegExp(
      '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$',
    );
    const passwordRegExp = new RegExp(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&\.\+\*\{\]\{\[\-,;`<>':"=^#_|\/\\])(?=.*?[A-Za-z\d@$!%*+?&\.\+\*\{\]\{\[\-,;`<>':"=^#_|\/\\]).{8,}/,
    );
    var done = true;
    if (userPassword == '') {
      setPassworderror('please enter correct password');
      done = false;
    }
    if (repassword == '') {
      setrepassworderror('please re-enter password');
      done = false;
    }
    if (!strongRegex.test(userEmail) == true) {
      setEmailerror('please enter your correct email');
      return false;
    }

    if (done) {
      navigation.navigate('home');
      Toast.showWithGravity(
        'sign-in successfully done',
        Toast.LONG,
        Toast.BOTTOM,
      );
    } else {
      Toast.show(
        'please enter email and password required',
        Toast.LONG,
        Toast.BOTTOM,
        {
          backgroundColor: 'blue',
        },
      );
    }
    Keyboard.dismiss();
  };
  const SignIn = async () => {
    const data = new FormData();
    data.append('phone', userPhone);
    data.append('password', userPassword);
    data.append('confirm-password', repassword);
    try {
      const res = await fetch(API.LOG_IN, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'content-Type': 'application/json',
        },
        // body: JSON.stringify({phone: userPhone, password: userPassword}),
        body: JSON.stringify(data),
      });
      const resData = await res.json();
      console.log('res errror', resData);
      if (resData.message == 'worked') {
        await AsyncStorage.setItem('token', resData.token);
        console.log('e1', resData);
      }
    } catch (error) {
      console.log('e3', error);
    }
  };

  return (
    <View style={Styles.mainBody}>
      {/* <TouchableOpacity style={Styles.btnContainer}>
                <Text style={[Styles.txtContainer, { fontFamily: 'sans-serif' }]}>Skip</Text>
            </TouchableOpacity> */}
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
          paddingBottom: 40,
        }}>
        <View>
          <KeyboardAvoidingView enabled>
            <View style={{alignItems: 'center'}}>
              <Image
                source={logo}
                style={{
                  width: '50%',
                  height: 100,
                  resizeMode: 'contain',
                }}
              />
            </View>
            <Text style={[Styles.txtWelcome]}>Create account</Text>
            <View style={Styles.SectionStyle}>
              <TextInput
                style={Styles.inputStyle}
                // onChangeText={UserEmail => setUserEmail(UserEmail)}
                onChangeText={UserEmail => {
                  setUserEmail(UserEmail);
                  if (UserEmail && UserEmail != '') {
                    setEmailerror(null);
                  }
                }}
                placeholder="Enter Username or Email" //dummy@abc.com
                placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() =>
                  passwordInputRef.current && passwordInputRef.current
                }
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
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
            <View style={Styles.SectionStyle}>
              <TextInput
                style={Styles.inputStyle}
                // onChangeText={UserPassword => setUserPassword(UserPassword)}
                onChangeText={UserPassword => {
                  setUserPassword(UserPassword);
                  if (UserPassword && UserPassword != '') {
                    setPassworderror(null);
                  }
                }}
                placeholder="Enter Password" //12345
                placeholderTextColor="#8b9cb5"
                keyboardType="default"
                // ref={passwordInputRef}
                // onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                // secureTextEntry={true}
                underlineColorAndroid="#f000"
                returnKeyType="next"
              />
            </View>
            <Text
              style={{
                color: 'red',
                paddingLeft: 45,
                bottom: 10,
                display: passworderror ? 'flex' : 'none',
              }}>
              {passworderror}
            </Text>
            <View style={Styles.SectionStyle}>
              <TextInput
                style={Styles.inputStyle}
                onChangeText={repassword => {
                  setrepassword(repassword);
                  if (repassword && repassword != '') {
                    setrepassworderror(null);
                  }
                }}
                placeholder="Re-enter Password" //12345
                placeholderTextColor="#8b9cb5"
                keyboardType="default"
                // ref={passwordInputRef}
                // onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                // secureTextEntry={true}
                underlineColorAndroid="#f000"
                returnKeyType="next"
              />
            </View>
            <Text
              style={{
                color: 'red',
                paddingLeft: 45,
                bottom: 10,
                display: repassworderror ? 'flex' : 'none',
              }}>
              {repassworderror}
            </Text>
            <TouchableOpacity
              style={Styles.buttonStyle}
              activeOpacity={0.5}
              onPress={() => submitForm()}>
              <Text style={Styles.buttonTextStyle}>SIGN UP</Text>
            </TouchableOpacity>
            <Text
              style={Styles.registerTextStyle}
              onPress={() => navigation.navigate('sign-in')}>
              Have an account ? Sign In
            </Text>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUp;
