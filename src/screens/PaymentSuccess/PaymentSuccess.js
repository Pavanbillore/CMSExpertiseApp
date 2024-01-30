import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Keyboard,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Menu from 'react-native-vector-icons/AntDesign';
import Noti from 'react-native-vector-icons/Ionicons';
import Back from 'react-native-vector-icons/AntDesign';
import Verify from 'react-native-vector-icons/MaterialIcons';
import Styles from './PaymentSuccessStyles';
import Toast from 'react-native-simple-toast';
import {Calendar, LocaleConfig} from 'react-native-calendars';
const PaymentSuccess = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <SafeAreaView>
      <View style={Styles.mainContainer}>
        <View style={Styles.mainBody}>
          <View style={Styles.headerContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Menu name="arrowleft" color={'#fff'} size={26} />
            </TouchableOpacity>
            <View>
              <Text style={Styles.lable}>My Cash</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Noti name="notifications" color={'#fff'} size={26} />
            </TouchableOpacity>
          </View>
        </View>

        <SafeAreaView style={Styles.mainInputContainer}>
          <View style={Styles.boxContainer}>
            <Image
              style={Styles.imgBackground}
              resizeMode="contain"
              source={require('../../assets/images/verifyPay.jpg')}
            />
            <View style={Styles.mainContStyles}>
              <Text style={Styles.tStyles}>Cash Amount</Text>
            </View>
            <View style={Styles.vStyles}>
              <View style={Styles.inrContainer}>
                <Text style={Styles.textContainer}>INR</Text>
              </View>
              <Text style={Styles.contStyles}>240.000</Text>
            </View>
            <Verify
              name="verified"
              color={'green'}
              size={70}
              style={Styles.alignStyles}
            />
            <TouchableOpacity style={Styles.SaveContainer}>
              <Back
                name="arrowleft"
                color={'white'}
                size={26}
                style={Styles.alignStyles}
              />
              <Text style={Styles.saveText}>RETURN HOME</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    </SafeAreaView>
  );
};

export default PaymentSuccess;
const {width, height} = Dimensions.get('window');
