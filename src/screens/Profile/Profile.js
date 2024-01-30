import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  ToastAndroid,
} from 'react-native';
import React, {createRef, useState, useEffect} from 'react';
import Back from 'react-native-vector-icons/AntDesign';
import UserIcon from 'react-native-vector-icons/FontAwesome5';
import Right from 'react-native-vector-icons/Entypo';
import Setting from 'react-native-vector-icons/AntDesign';
import Status from 'react-native-vector-icons/FontAwesome';
import Logout from 'react-native-vector-icons/Entypo';
import Toast from 'react-native-simple-toast';
import Styles from './ProfileStyles';
import Location from 'react-native-vector-icons/Entypo';
import Mail from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Call from 'react-native-vector-icons/Feather';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
const Profile = ({navigation}) => {
  const userLogo = require('../../assets/images/userlogo.png');
  const [userInfo, setuserInfo] = useState(null);
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(false);
  const logOut = e => {
    setLoading(true);
    if (true) {
      AsyncStorage.clear();
      navigation.navigate('sign-in');
      setLoading(false);
      Toast.showWithGravity('sign-out successfull', Toast.LONG, Toast.TOP);
    } else {
      Toast.showWithGravity('sign-out failed', Toast.LONG, Toast.TOP);
      setLoading(false);
    }
  };

  // const signOut = async () => {
  //   setLoading(true);
  //   try {
  //     await GoogleSignin.signOut();
  //     setuserInfo({usrInfo: null});
  //     setLoading(false);
  //     console.log('sign-out successfull');
  //     navigation.navigate('sign-in');
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // useEffect(() => {
  //   GoogleSignin.configure({
  //     webClientId:
  //       '624658607353-fdkf6lis84tc45bgr5i8tq7oslmffnka.apps.googleusercontent.com',
  //   });
  // signIn();
  // }, []);
  return (
    <SafeAreaView style={Styles.mainContainer}>
      <View style={Styles.headerView}>
        <TouchableOpacity
          style={Styles.btnContainer}
          onPress={() => {
            navigation.goBack();
          }}>
          <Back name="arrowleft" size={26} color="#fff" />
        </TouchableOpacity>
        {/* <Text style={Styles.ftTxt}>Profile</Text>*/}
      </View>
      <View style={Styles.profileContainer}>
        <View style={Styles.rdxContainer}>
          <View style={Styles.imglogoContainer}>
            <Image source={userLogo} style={Styles.userlogoStyle} />
          </View>
          <View style={Styles.txttContainer}>
            <Text style={Styles.Usertxt}>Alison Danish</Text>
            <View style={Styles.flexStyles}>
              <Location name="location" size={20} color="#fff" />
              <Text style={Styles.Useridenty}>Indore, MP</Text>
            </View>
            <View style={Styles.flexStyles}>
              <Mail name="mail" size={18} color="#fff" />
              <Text style={Styles.Useridenty}>abc@gmail.com</Text>
            </View>
            <View style={Styles.flexStyles}>
              <Call name="phone-call" size={18} color="#fff" />
              <Text style={Styles.Useridenty}>+91 9685458625</Text>
            </View>
          </View>
        </View>
        {/* <TouchableOpacity style={Styles.EditContainer}>
          <Edit
            name="camera"
            size={20}
            color="#fff"
            style={Styles.CameraStyle}
          />
        </TouchableOpacity>*/}
      </View>
      <View style={Styles.ListContainer}>
        <View style={{margin: 5}}>
          <View style={Styles.rowContainer}>
            <View style={Styles.BoxContainer}>
              <UserIcon
                name="user-edit"
                size={24}
                color="#fff"
                style={{paddingLeft: 5}}
              />
            </View>
            <Text style={Styles.EditText}>Edit Profile</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('EditProfile')}>
              <Right
                name="chevron-right"
                size={30}
                color="gray"
                style={Styles.CameraStyle}
              />
            </TouchableOpacity>
          </View>
          {/* <View style={Styles.rowContainer}>
            <View style={Styles.BoxContainer4}>
              <Status
                name="line-chart"
                size={25}
                color="#fff"
                // style={Styles.CameraStyle}
              />
            </View>
            <Text style={Styles.EditText}>My Status</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('MyStatus');
              }}>
              <Right
                name="chevron-right"
                size={30}
                color="gray"
                style={styles.CameraStyle}
              />
            </TouchableOpacity>
          </View>*/}

          {/*  <View style={Styles.rowContainer}>
            <View style={Styles.BoxContainer3}>
              <Invite
                name="share-alt"
                size={25}
                color="#fff"
                // style={Styles.CameraStyle}
              />
            </View>
            <Text style={Styles.EditText}>Invite a friend</Text>
            <TouchableOpacity>
              <Right
                name="chevron-right"
                size={30}
                color="gray"
                style={styles.CameraStyle}
              />
            </TouchableOpacity>
        </View> */}
          <View style={Styles.rowContainer}>
            <View style={Styles.BoxContainer5}>
              <Setting
                name="setting"
                size={25}
                color="#fff"
                // style={Styles.CameraStyle}
              />
            </View>
            <View style={{alignItems: 'flex-start'}}>
              <Text style={Styles.EditText}>Settings</Text>
            </View>

            <TouchableOpacity>
              <Right
                name="chevron-right"
                size={30}
                color="gray"
                style={Styles.CameraStyle}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {loading ? (
        <View>
          <ActivityIndicator size={'large'} color={'orange'} />
        </View>
      ) : (
        <TouchableOpacity style={Styles.BoxContainer2} onPress={() => logOut()}>
          <Logout name="log-out" size={25} color="gray" />
          <Text style={Styles.EditText2}>Log Out</Text>
        </TouchableOpacity>
      )}
      {/*{userInfo !== null && (
        <Text style={Styles.Useridenty}>{userInfo.user.name}</Text>
      )}*/}
    </SafeAreaView>
  );
};

export default Profile;
const {width, height} = Dimensions.get('window');
