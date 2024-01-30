//Include Both Helper File with needed methods
import {
  createSupplierPOApi,
  getEmployeeSupplierPOs,
  createSuppliersPaymentRequestApi,
  getSuppliersPaymentRequestApi,
  createSuppliersPaymentApi,
  getSuppliersPaymentApi,
  createSuppliersPaymentLineItemApi,
  getSuppliersPaymentLineItemApi,
  createExpenseApi,
} from '../../../helpers/fakebackend_helper';

import {
  getSupplierPO,
  apiError,
  getSupplierPaymentRequest,
  getSupplierPayment,
  getSuppliersPaymentLineItem,
  getSupplierPaymentRequestSummery,
} from './reducer';

// const fireBaseBackend = getFirebaseBackend();

export const createSupplierPOFun = (postdata, history) => async dispatch => {
  try {
    let response;
    response = createSupplierPOApi(postdata);

    var data = await response;
    console.log(data);
    if (data && data.status) {
      dispatch(getEmployeeSupplierPOFun(data));
    } else {
      dispatch(apiError(data.error));
    }
  } catch (error) {
    dispatch(apiError(error));
  }
};

export const createSuppliersPaymentRequestFun =
  (postdata, history) => async dispatch => {
    try {
      let response;
      response = createSuppliersPaymentRequestApi(postdata);

      var data = await response;
      console.log(data);
      if (data && data.id) {
        history('/request-list');
      } else {
        dispatch(apiError(data.error));
      }
    } catch (error) {
      dispatch(apiError(error));
    }
  };

export const createSuppliersPaymentFun =
  (postdata, history) => async dispatch => {
    try {
      let response;
      response = createSuppliersPaymentApi(postdata);

      var data = await response;
      console.log(data);
      if (data && data.id) {
        history('/list-Payments');
      } else {
        dispatch(apiError(data.error));
      }
    } catch (error) {
      dispatch(apiError(error));
    }
  };

export const getSuppliersPaymentFun = () => async dispatch => {
  try {
    let response;
    response = getSuppliersPaymentApi();

    var data = await response;

    if (data && data.length > 0) {
      dispatch(getSupplierPayment(data));
    } else {
      dispatch(apiError(data));
    }
  } catch (error) {
    dispatch(apiError(error));
  }
};
export const getSuppliersPaymentRequestFun =
  (id = '', summery = null) =>
  async dispatch => {
    try {
      let response;
      response = getSuppliersPaymentRequestApi(id);

      var data = await response;

      if (data && data.length > 0) {
        if (summery) {
          dispatch(getSupplierPaymentRequestSummery(data));
        } else {
          dispatch(getSupplierPaymentRequest(data));
        }
      } else {
        dispatch(apiError(data));
      }
    } catch (error) {
      dispatch(apiError(error));
    }
  };
export const createSuppliersPaymentLineItemFun =
  (postdata, history) => async dispatch => {
    try {
      let response;
      response = createSuppliersPaymentLineItemApi(postdata);

      var data = await response;
      console.log(data);
      if (data && data.id) {
        dispatch(getSuppliersPaymentLineItemFun());
      } else {
        dispatch(apiError(data.error));
      }
    } catch (error) {
      dispatch(apiError(error));
    }
  };

export const getSuppliersPaymentLineItemFun = () => async dispatch => {
  try {
    let response;
    response = getSuppliersPaymentLineItemApi();

    var data = await response;

    if (data && data.length > 0) {
      dispatch(getSuppliersPaymentLineItem(data));
    } else {
      dispatch(apiError(data));
    }
  } catch (error) {
    dispatch(apiError(error));
  }
};

export const getEmployeeSupplierPOFun = () => async dispatch => {
  try {
    let response;
    response = getEmployeeSupplierPOs();

    var data = await response;

    if (data && data.length > 0) {
      dispatch(getSupplierPO(data));
    } else {
      dispatch(apiError(data));
    }
  } catch (error) {
    dispatch(apiError(error));
  }
};
export const getSupplierPOFun = async () => {
  try {
    let response;
    response = getEmployeeSupplierPOs();

    var data = await response;

    if (data && data.length > 0) {
      return data;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};

export const createExpenseFun = async (endpoint, postdata, history) => {
  try {
    let response;
    response = createExpenseApi(postdata, endpoint);

    var data = await response;
    console.log(data);
    if (data && data.id) {
      return data;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};
