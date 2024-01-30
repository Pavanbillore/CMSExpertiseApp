//Include Both Helper File with needed methods
import {
  postFakeProfile,
  postJwtProfile,
  getFakeProfile,
} from '../../../helpers/fakebackend_helper';

// action
import {profileSuccess, profileError, resetProfileFlagChange} from './reducer';

export const editProfile = user => async dispatch => {
  try {
    let response;

    // if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
    //     response = fireBaseBackend.editProfileAPI(
    //         user.username,
    //         user.idx
    //     );

    // } else if (process.env.REACT_APP_DEFAULTAUTH === "jwt") {

    //     response = postJwtProfile(
    //         {
    //             username: user.username,
    //             idx: user.idx,
    //         }
    //     );

    // } else if (process.env.REACT_APP_DEFAULTAUTH === "fake") {
    // }

    response = postFakeProfile(user);
    const data = await response;

    if (data) {
      dispatch(profileSuccess(data));
    }
  } catch (error) {
    dispatch(profileError(error));
  }
};

export const getProfile = user => async dispatch => {
  try {
    let response;
    response = getFakeProfile(user);
    const data = await response;

    if (data) {
      var d = {status: 'success', data: data};
      dispatch(profileSuccess(d));
    }
  } catch (error) {
    dispatch(profileError(error));
  }
};

export const resetProfileFlag = () => {
  try {
    const response = resetProfileFlagChange();
    return response;
  } catch (error) {
    return error;
  }
};
