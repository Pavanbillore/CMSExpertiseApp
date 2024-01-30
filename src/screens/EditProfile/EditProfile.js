import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TextInput,
  TextInputProps,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Calls from 'react-native-vector-icons/Feather';
import UserIcon from 'react-native-vector-icons/FontAwesome5';
import Right from 'react-native-vector-icons/Entypo';
import Address from 'react-native-vector-icons/Ionicons';
import Status from 'react-native-vector-icons/FontAwesome';
import Logout from 'react-native-vector-icons/Entypo';
import Styles from './EditProfileStyles';
import Invite from 'react-native-vector-icons/FontAwesome';
import Location from 'react-native-vector-icons/Entypo';
import Mail from 'react-native-vector-icons/MaterialCommunityIcons';
import Call from 'react-native-vector-icons/Ionicons';
import Edit from 'react-native-vector-icons/Ionicons';
const EditProfile = ({navigation}) => {
  const userLogo = require('../../assets/images/userlogo.png');
  const [userName, setuserName] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const onUserNameChange = () => {};
  const onPasswordChange = () => {};

  return (
    <SafeAreaView style={Styles.mainContainer}>
      {/* <View style={Styles.headerView}>
        <TouchableOpacity
          style={Styles.btnContainer}
          onPress={() => {
            navigation.goBack();
          }}>
          <Back name="arrowleft" size={30} color="#fff" />
        </TouchableOpacity>
        <Text style={Styles.ftTxt}>Profile</Text>
      </View>*/}
      <View style={Styles.profileContainer}>
        <View style={Styles.imglogoContainer}>
          <Image source={userLogo} style={Styles.userlogoStyle} />
        </View>
        <TouchableOpacity style={Styles.EditContainer}>
          <Edit
            name="camera"
            size={20}
            color="#000"
            style={styles.CameraStyle}
          />
        </TouchableOpacity>
        <Text style={Styles.ftTxt}>Pavan Kumar</Text>
      </View>
      <SafeAreaView style={Styles.mainInputContainer}>
        <View style={Styles.boxContainer}>
          <Text style={Styles.lable}>User Profile</Text>
          <View style={{padding: 10}}>
            <View>
              <Icon style={Styles.icon} name="user" color={'#000'} size={20} />
              <TextInput
                placeholder="Enter User Name"
                placeholderTextColor={'gray'}
                value={userName}
                onChangeText={text => setuserName(text)}
                // keyboardType="email-address"
                style={Styles.InputContainer}
              />
            </View>
            <View>
              <Icon style={Styles.icon} name="mail" color={'#000'} size={20} />
              <TextInput
                placeholder="Enter Email Address"
                placeholderTextColor={'gray'}
                value={email}
                onChangeText={text => setEmail(text)}
                keyboardType="email-address"
                style={Styles.InputContainer}
              />
            </View>
            <View>
              <Calls
                style={Styles.icon}
                name="phone"
                color={'#000'}
                size={20}
              />
              <TextInput
                placeholder="Enter Phone Number"
                placeholderTextColor={'gray'}
                value={phone}
                onChangeText={text => setPhone(text)}
                keyboardType="phone-pad"
                style={Styles.InputContainer}
              />
            </View>
            <View>
              <Address
                style={Styles.icon}
                name="location-outline"
                color={'#000'}
                size={20}
              />
              <TextInput
                placeholder="Enter Address"
                placeholderTextColor={'gray'}
                value={address}
                onChangeText={text => setAddress(text)}
                style={Styles.InputContainer}
              />
            </View>
          </View>
          <TouchableOpacity style={Styles.SaveContainer}>
            <Text style={Styles.saveText}>Save</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default EditProfile;
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({});
