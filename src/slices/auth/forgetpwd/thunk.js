import {userForgetPasswordSuccess, userForgetPasswordError} from './reducer';

//Include Both Helper File with needed methods

import {
  postFakeForgetPwd,
  postJwtForgetPwd,
} from '../../../helpers/fakebackend_helper';

export const userForgetPassword = (user, history) => async dispatch => {
  try {
    let response;

    response = postFakeForgetPwd(user.email);

    const data = await response;

    if (data) {
      dispatch(
        userForgetPasswordSuccess(
          'Reset link are sended to your mailbox, check there first',
        ),
      );
    }
  } catch (forgetError) {
    dispatch(userForgetPasswordError(forgetError));
  }
};
