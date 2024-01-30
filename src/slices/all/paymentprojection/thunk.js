//Include Both Helper File with needed methods
import {
  createprojectionApi,
  getprojections,
  updateprojectionApi,
} from '../../../helpers/fakebackend_helper';

import {createprojection, listprojection, apiError} from './reducer';

// const fireBaseBackend = getFirebaseBackend();

export const createprojectionFun = (postdata, history) => async dispatch => {
  try {
    let response;
    response = createprojectionApi(postdata);

    var data = await response;
    console.log(data);
    if (data && data.id) {
      dispatch(createprojection(data));
    } else {
      dispatch(apiError(data.error));
    }
  } catch (error) {
    dispatch(apiError(error));
  }
};

export const updateprojectionFun =
  (postdata, id, history) => async dispatch => {
    try {
      let response;
      response = updateprojectionApi(postdata, id);

      var data = await response;
      if (data && data.id) {
        dispatch(getprojectionFun());
      } else {
        dispatch(apiError(data.error));
      }
    } catch (error) {
      dispatch(apiError(error));
    }
  };

export const getprojectionFun = () => async dispatch => {
  try {
    let response;
    response = getprojections();

    var data = await response;

    if (data && data.length > 0) {
      dispatch(listprojection(data));
    } else {
      dispatch(apiError(data));
    }
  } catch (error) {
    dispatch(apiError(error));
  }
};
