//Include Both Helper File with needed methods
import {
  postFakeLogin,
  postJwtLogin,
  postSocialLogin,
} from '../../../helpers/fakebackend_helper';

import {
  loginSuccess,
  logoutUserSuccess,
  apiError,
  reset_login_flag,
} from './reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-simple-toast';
import {Alert} from 'react-native';
// const fireBaseBackend = getFirebaseBackend();

export const loginUser = (user, history) => async dispatch => {
  try {
    let response;
    response = postFakeLogin({
      email: user.email,
      password: user.password,
    });

    var data = await response;

    if (data && data.status && data.status == '200') {
      // console.log(data);
      await AsyncStorage.setItem('authUser', JSON.stringify(data));
      await AsyncStorage.setItem('token', data.token);
      Toast.showWithGravity('login suceess', Toast.LONG, Toast.TOP);
      dispatch(loginSuccess(data));
      history('home');
    } else {
      Toast.showWithGravity('something went wrong resp', Toast.LONG, Toast.TOP);
      dispatch(apiError(data.error));
    }
  } catch (error) {
    Toast.showWithGravity('something went wrong resp', Toast.LONG, Toast.TOP);
    dispatch(apiError(error));
  }
};

export const updateUser = history => async dispatch => {
  try {
    var u = await AsyncStorage.getItem('authUser');
    if (u) {
      var obj = await AsyncStorage.getItem('authUser');
      dispatch(loginSuccess(JSON.parse(obj)));
    }
  } catch (error) {
    console.log('error');
    dispatch(apiError(error));
  }
};

export const logoutUser = history => async dispatch => {
  try {
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('authUser');
    // let fireBaseBackend = getFirebaseBackend();
    // if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
    //   const response = fireBaseBackend.logout;
    //   dispatch(logoutUserSuccess(response));
    // } else {
    dispatch(logoutUserSuccess(true));
    history('/login');
    // }
  } catch (error) {
    dispatch(apiError(error));
  }
};
