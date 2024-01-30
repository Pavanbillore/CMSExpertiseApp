//Include Both Helper File with needed methods
import {
  createcashApi,
  getcashs,
  getcashsSelect,
  updatecashApi,
  createCashStatementApi
} from "../../../helpers/fakebackend_helper";

import { createcash, listcash, listcashSummery, listcashSelect, apiError } from './reducer';

// const fireBaseBackend = getFirebaseBackend();

export const createcashFun = (postdata, history) => async (dispatch) => {
  try {
    let response;
    response = createcashApi(postdata);

    var data = await response;
    console.log(data);
    if (data && data.id) {
      dispatch(createcash(data));
      alert('Added Successfully');
    }else{
      dispatch(apiError(data.error));
      alert('Something went wrong, please try again later');
    }
  } catch (error) {
    dispatch(apiError(error));
    alert('Something went wrong, please try again later');
  }
};

export const updatecashFun = (postdata, id, history) => async (dispatch) => {
  try {
    let response;
    response = updatecashApi(postdata, id);

    var data = await response;
    if (data && data.id) {
      dispatch(getcashFun());
      alert('Updated Successfully');
    }else{
      dispatch(apiError(data.error));
      alert('Something went wrong, please try again later');
    }
  } catch (error) {
    dispatch(apiError(error));
    alert('Something went wrong, please try again later');
  }
};

export const getcashFun = (id = '') => async (dispatch) => {
  try {
    let response;
    response = getcashs(id);

    var data = await response;

    if (data && data.length > 0) {
        dispatch(listcash(data));
    }else{
      dispatch(listcash([]));
      dispatch(apiError(data));
    }
  } catch (error) {
    dispatch(apiError(error));
  }
};

export const getcashSummeryFun = (id = '') => async (dispatch) => {
  try {
    let response;
    response = getcashs(id);

    var data = await response;

    if (data && data.length > 0) {
        dispatch(listcashSummery(data));
    }else{
      dispatch(listcashSummery([]));
      dispatch(apiError(data));
    }
  } catch (error) {
    dispatch(apiError(error));
  }
};

export const getcashSelectFun = (id) => async (dispatch) => {
  try {
    let response;
    response = getcashsSelect(id);

    var data = await response;

    if (data && data.id) {
        dispatch(listcashSelect(data));
    }else{
      dispatch(apiError(data));
    }
  } catch (error) {
    dispatch(apiError(error));
  }
};

export const createCashExpenseFun = (endpoint, employee = null, postdata, history) => async (dispatch) => {
  try {
    let response;
    response = createCashStatementApi(postdata, endpoint);

    var data = await response;
    console.log(data);
    if (data && data.id) {
      if(employee){
        dispatch(getcashFun('/emp/'+employee));
        dispatch(getcashSummeryFun('emp/summery/'+employee));
        alert('Added Successfully');
      }else{
        dispatch(getcashFun());
      }
    }else{
      dispatch(apiError(data.error));
      alert('Something went wrong, please try again later');
    }
  } catch (error) {
    dispatch(apiError(error));
    alert('Something went wrong, please try again later');
  }
};

