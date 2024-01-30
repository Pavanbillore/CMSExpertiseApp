import React, {createRef, useState, useEffect} from 'react';
import {
  ActivityIndicator,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
  Keyboard,
  ToastAndroid,
} from 'react-native';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import Google from 'react-native-vector-icons/AntDesign';
import SignOut from 'react-native-vector-icons/FontAwesome';
import Toast from 'react-native-simple-toast';
import {API} from '../../utils/api';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {loginUser} from '../../slices/thunks';
import Styles from './SignInStyles';
const SignIn = ({navigation}) => {
  const logo = require('../../assets/images/logo.png');
  const [emailerror, setEmailerror] = useState('');
  const [passworderror, setPassworderror] = useState('');
  const [userEmail, setuserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const [errortext, setErrortext] = useState('');
  const [userInfo, setuserInfo] = useState(null);
  const passwordInputRef = createRef();
  const dispatch = useDispatch();
  const login = async () => {
    setLoading(false);
    // Alert.alert();
    var data = {
      phone: userEmail,
      password: userPassword,
    };
    dispatch(loginUser(data, navigation.navigate));
  };

  const submitForm = () => {
    setLoading(true);
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
    // if (!passwordRegExp.test(userPassword) == true) {
    //   setPassworderror('please enter strong password');
    //   return false;
    // }
    if (!strongRegex.test(userEmail) == true) {
      setEmailerror('please enter your correct email');
      return false;
    }
    if (done) {
      login();
      // navigation.navigate('home');
      Toast.showWithGravity(
        'sign-in successfully done',
        Toast.LONG,
        Toast.BOTTOM,
      );
    } else {
    }
    // Keyboard.dismiss();
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
          padding: 0,
          marginBottom: 30,
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
            <Text style={[Styles.txtWelcome]}>Welcome Experties</Text>
            <View style={Styles.SectionStyle}>
              <TextInput
                style={Styles.inputStyle}
                onChangeText={userEmail => {
                  setuserEmail(userEmail);
                  if (userEmail && userEmail != '') {
                    setEmailerror(null);
                  }
                }}
                value={userEmail}
                // onChangeText={userEmail => setuserEmail(userEmail)}
                placeholder="Enter Email"
                placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() =>
                  passwordInputRef.current && passwordInputRef.current
                }
                underlineColorAndroid="#f000"
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
                value={userPassword}
                placeholder="Enter Password" //12345
                placeholderTextColor="#8b9cb5"
                keyboardType="default"
                ref={passwordInputRef}
                onSubmitEditing={Keyboard.dismiss}
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
                display: passworderror ? 'flex' : 'none',
              }}>
              {passworderror}
            </Text>
            <Text
              style={Styles.forgotTextStyle}
              onPress={() => navigation.navigate('forgot-password')}>
              Forgot password
            </Text>
            {/*<LinearGradient
              colors={['#000', '#3b5998', '#000']}
            style={Styles.linearGradient}>*/}
            {loading ? (
              <View style={{marginTop: 20}}>
                <ActivityIndicator size={'large'} color={'orange'} />
              </View>
            ) : (
              <TouchableOpacity
                style={Styles.buttonStyle}
                activeOpacity={0.5}
                onPress={() => {
                  submitForm();
                }}>
                <Text style={Styles.buttonTextStyle}>SIGN IN</Text>
              </TouchableOpacity>
            )}
            {/*<  </LinearGradient>*/}
          </KeyboardAvoidingView>
          <Text
            style={Styles.registerTextStyle}
            onPress={() => navigation.navigate('sign-up')}>
            New Here ? Register
          </Text>
        </View>

        {/*  {loading ? (
          <View style={{marginTop: 20}}>
            <ActivityIndicator size={'large'} color={'orange'} />
          </View>
        ) : (
          <TouchableOpacity
            style={Styles.googlebtn}
            onPress={() =>
              signIn().then(() => console.log('Sign-in Successfull'))
            }>
            <Google
              name="googleplus"
              size={27}
              color={'white'}
              style={{paddingLeft: 30}}
            />
            <Text style={Styles.googlebtnTxt}>Sign-in with google</Text>
          </TouchableOpacity>
          )} */}
      </ScrollView>
    </View>
  );
};

export default SignIn;
