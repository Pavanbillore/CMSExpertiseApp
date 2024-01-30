import React, {createRef, useEffect, useState} from 'react';
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
} from 'react-native';
import Back from 'react-native-vector-icons/AntDesign';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import Clipboard from '@react-native-community/clipboard';
import Styles from './OtpStyles';
const Otp = ({navigation}) => {
  const logo = require('../../assets/images/logo.png');
  // const img2 = require('../assets/images/lockers.png');
  // const img3 = require('../assets/images/reportcard.png');
  const [name, setName] = React.useState('');
  const [userEmail, setUserEmail] = useState('');
  // clearText = () => {
  //     this.otpInput.clear();
  // }

  // setText = () => {
  //     this.otpInput.setValue("1234");
  // }
  const [timerCount, setTimer] = useState(60);
  useEffect(() => {
    let interval = setInterval(() => {
      setTimer(lastTimerCount => {
        lastTimerCount <= 1 && clearInterval(interval);
        return lastTimerCount - 1;
      });
    }, 1000); //each count lasts for a second
    //cleanup the interval on complete
    return () => clearInterval(interval);
  }, []);
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
        <Text style={Styles.ftTxt}>Verify OTP</Text>
      </View>

      <View style={Styles.mainView}>
        <View style={Styles.txtCont}>
          <Text style={Styles.worryTxt}>
            Do not worry, choose the method you want to retrieve your password.
          </Text>
        </View>
        <View style={Styles.SectionStyle}>
          <OTPInputView
            style={Styles.otpStyles}
            pinCount={4}
            codeInputFieldStyle={Styles.underlineStyleBase}
            codeInputHighlightStyle={Styles.underlineStyleHighLighted}
            onCodeFilled={code => {
              console.log(`Code is ${code}, you are good to go!`);
            }}
            autoFocusOnLoad
            editable={true}
            keyboardType={'number-pad'}
          />
        </View>
        <Text style={Styles.timeTxt}>
          00 : {timerCount ? timerCount : '00'}
        </Text>
        <TouchableOpacity
          style={Styles.buttonStyle}
          activeOpacity={0.5}
          // onPress={handleSubmitPress}
        >
          <Text style={Styles.buttonTextStyle}>SUBMIT</Text>
        </TouchableOpacity>
        <View style={Styles.btnView}>
          <Text
            style={Styles.registerTextStyle2}
            onPress={() => navigation.navigate('sign-up')}>
            Resend
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Otp;
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({});
