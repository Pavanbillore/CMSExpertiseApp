//Include Both Helper File with needed methods
import {
  createCardApi,
  getCards,
  getCardsSelect,
  postSocialLogin,
  createEmployeeCardApi,
  updateCardApi,
  updateEmployeeCardApi,
  getEmployeeCards,
  getdatafunctionApi,
  createCardStatementApi,
  updateCardStatementApi,
} from '../../../helpers/fakebackend_helper';

import {
  createCard,
  listCard,
  listCardSelect,
  apiError,
  createEmployeeCard,
  getEmployeeCard,
  listcardstatement,
} from './reducer';

// const fireBaseBackend = getFirebaseBackend();

export const createCardFun = (postdata, history) => async dispatch => {
  try {
    let response;
    response = createCardApi(postdata);

    var data = await response;
    console.log(data);
    if (data && data.id) {
      dispatch(createCard(data));
      history('/list-request');
    } else {
      dispatch(apiError(data.error));
      alert('Something went wrong, please try again later');
    }
  } catch (error) {
    dispatch(apiError(error));
    alert('Something went wrong, please try again later');
  }
};
export const updateCardFun = (id, postdata, history) => async dispatch => {
  try {
    let response;
    response = updateCardApi(id, postdata);
    var data = await response;
    if (data && data.id) {
      history('/list-request');
    } else {
      dispatch(apiError(data.error));
      alert('Something went wrong, please try again later');
    }
  } catch (error) {
    dispatch(apiError(error));
    alert('Something went wrong, please try again later');
  }
};
export const createEmployeeCardFun = (postdata, history) => async dispatch => {
  try {
    let response;
    response = createEmployeeCardApi(postdata);

    var data = await response;
    console.log(data);
    if (data && data.id) {
      dispatch(createEmployeeCard(data));
    } else {
      dispatch(apiError(data.error));
      alert('Something went wrong, please try again later');
    }
  } catch (error) {
    dispatch(apiError(error));
    alert('Something went wrong, please try again later');
  }
};
export const updateEmployeeCardFun =
  (postdata, id, history) => async dispatch => {
    try {
      let response;
      response = updateEmployeeCardApi(postdata, id);

      var data = await response;
      console.log(data);
      if (data && data.id) {
        dispatch(getEmployeeCardFun());
      } else {
        dispatch(apiError(data.error));
        alert('Something went wrong, please try again later');
      }
    } catch (error) {
      dispatch(apiError(error));
      alert('Something went wrong, please try again later');
    }
  };

export const getEmployeeCardFun = () => async dispatch => {
  try {
    let response;
    response = getEmployeeCards();

    var data = await response;

    if (data && data.length > 0) {
      dispatch(getEmployeeCard(data));
    } else {
      dispatch(apiError(data));
    }
  } catch (error) {
    dispatch(apiError(error));
  }
};

export const getCardFun =
  (id = '') =>
  async dispatch => {
    try {
      let response;
      response = getCards(id);

      var data = await response;

      if (data && data.length > 0) {
        dispatch(listCard(data));
      } else {
        dispatch(listCard([]));
        dispatch(apiError(data));
      }
    } catch (error) {
      dispatch(apiError(error));
    }
  };

export const getCardSelectFun = id => async dispatch => {
  try {
    let response;
    response = getCardsSelect(id);

    var data = await response;

    if (data && data.id) {
      dispatch(listCardSelect(data));
    } else {
      dispatch(apiError(data));
    }
  } catch (error) {
    dispatch(apiError(error));
  }
};

export const getCardStatementFun = id => async dispatch => {
  try {
    let response;
    response = getdatafunctionApi(id);

    var data = await response;

    if (data && data.id) {
      dispatch(listcardstatement(data));
    } else {
      dispatch(apiError(data));
    }
  } catch (error) {
    dispatch(apiError(error));
  }
};
export const createCardExpenseFun =
  (endpoint, postdata, history) => async dispatch => {
    try {
      let response;
      response = createCardStatementApi(postdata, endpoint);

      var data = await response;
      console.log(data);
      if (data && data.id) {
        alert('Added Successfully');
        dispatch(getCardStatementFun('/card/statement/' + data.CardId));
      } else {
        dispatch(apiError(data.error));
        alert('Something went wrong, please try again later');
      }
    } catch (error) {
      dispatch(apiError(error));
      alert('Something went wrong, please try again later');
    }
  };

export const updateCardExpenseFun =
  (id, postdata, history) => async dispatch => {
    try {
      let response;
      response = updateCardStatementApi(postdata, '/expense/' + id);

      var data = await response;
      console.log(data);
      if (data && data.id) {
        alert('Updated Successfully');
        dispatch(getCardStatementFun('/card/statement/' + data.CardId));
      } else {
        dispatch(apiError(data.error));
        alert('Something went wrong, please try again later');
      }
    } catch (error) {
      dispatch(apiError(error));
      alert('Something went wrong, please try again later');
    }
  };

export const createCardStatementFun =
  (id, postdata, history) => async dispatch => {
    try {
      let response;
      response = createCardStatementApi(postdata, '/statement/' + id);

      var data = await response;
      console.log(data);
      if (data && data.id) {
        alert('Added Successfully');
        dispatch(getCardStatementFun('/card/statement/' + id));
      } else {
        dispatch(apiError(data.error));
        alert('Something went wrong, please try again later');
      }
    } catch (error) {
      dispatch(apiError(error));
      alert('Something went wrong, please try again later');
    }
  };

export const getCardSelectedFun = async id => {
  try {
    let response;
    response = getCardsSelect(id);

    var data = await response;

    if (data && data.id) {
      return data;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};
