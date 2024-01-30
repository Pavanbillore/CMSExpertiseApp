//Include Both Helper File with needed methods
import {
  createEmployeeApi,
  getEmployess,
  getEmployessSelect,
  createdepartmentApi,
  getdepartment,
  createdevisionApi,
  getdevision,
  createpositionApi,
  getposition,
  postSocialLogin,
  updateEmployeeApi,
  getdashboardfunctionApi,
  createprocessApi,
  getprocess,
  getdatafunctionApi,
  updateprocessApi,
  createprocessaddApi,
  updateprocessaddApi,
  createprocessreplyApi,
  getrole,
  createroleApi,
  updatepermissionApi,
} from '../../../helpers/fakebackend_helper';

import {
  createEmployee,
  listEmployee,
  listEmployeeSelect,
  apiError,
  reset_login_flag,
  createdepartment,
  listdepartment,
  createdevision,
  listdevision,
  createposition,
  listposition,
  listprocess,
  createprocess,
  listrole,
} from './reducer';

// const fireBaseBackend = getFirebaseBackend();

export const updateprocessFun = (postdata, id) => async dispatch => {
  try {
    let response;
    response = updateprocessApi(postdata, id);

    var data = await response;

    if (data && data.id) {
      dispatch(getprocessFun('modules'));
    } else {
      dispatch(apiError(data.error));
    }
  } catch (error) {
    dispatch(apiError(error));
  }
};

export const updatepermissionFun = postdata => async dispatch => {
  try {
    let response;
    response = updatepermissionApi(postdata);
    var data = await response;

    if (data) {
      dispatch(getroleFun());
    } else {
      dispatch(apiError(data.error));
    }
  } catch (error) {
    dispatch(apiError(error));
  }
};

export const createprocessFun = (postdata, history) => async dispatch => {
  try {
    let response;
    response = createprocessApi(postdata);

    var data = await response;

    if (data && data.id) {
      dispatch(getprocessFun('modules'));
    } else {
      dispatch(apiError(data.error));
    }
  } catch (error) {
    dispatch(apiError(error));
  }
};

export const getprocessFun = id => async dispatch => {
  try {
    let response;
    response = getprocess(id);

    var data = await response;

    if (data && data.length > 0) {
      dispatch(listprocess(data));
    } else {
      dispatch(apiError(data));
    }
  } catch (error) {
    dispatch(apiError(error));
  }
};

export const createpositionFun = (postdata, history) => async dispatch => {
  try {
    let response;
    response = createpositionApi(postdata);

    var data = await response;

    if (data && data.id) {
      dispatch(createposition(data));
    } else {
      dispatch(apiError(data.error));
    }
  } catch (error) {
    dispatch(apiError(error));
  }
};

export const createroleFun = (postdata, history) => async dispatch => {
  try {
    let response;
    response = createroleApi(postdata);

    var data = await response;

    if (data && data.id) {
      dispatch(getroleFun(data));
    } else {
      dispatch(apiError(data.error));
    }
  } catch (error) {
    dispatch(apiError(error));
  }
};

export const getpositionFun = () => async dispatch => {
  try {
    let response;
    response = getposition();

    var data = await response;

    if (data && data.length > 0) {
      dispatch(listposition(data));
    } else {
      dispatch(apiError(data));
    }
  } catch (error) {
    dispatch(apiError(error));
  }
};

export const getroleFun = () => async dispatch => {
  try {
    let response;
    response = getrole();

    var data = await response;

    if (data && data.length > 0) {
      dispatch(listrole(data));
    } else {
      dispatch(apiError(data));
    }
  } catch (error) {
    dispatch(apiError(error));
  }
};
export const createdepartmentFun = (postdata, history) => async dispatch => {
  try {
    let response;
    response = createdepartmentApi(postdata);

    var data = await response;

    if (data && data.id) {
      var finallogin = JSON.stringify(data);
      finallogin = JSON.parse(finallogin);
      dispatch(createdepartment(data));
    } else {
      dispatch(apiError(data.error));
    }
  } catch (error) {
    dispatch(apiError(error));
  }
};

export const getdepartmentFun = () => async dispatch => {
  try {
    let response;
    response = getdepartment();

    var data = await response;

    if (data && data.length > 0) {
      dispatch(listdepartment(data));
    } else {
      dispatch(apiError(data));
    }
  } catch (error) {
    dispatch(apiError(error));
  }
};

export const createdevisionFun = (postdata, history) => async dispatch => {
  try {
    let response;
    response = createdevisionApi(postdata);

    var data = await response;

    if (data && data.id) {
      var finallogin = JSON.stringify(data);
      finallogin = JSON.parse(finallogin);
      dispatch(createdevision(data));
    } else {
      dispatch(apiError(data.error));
    }
  } catch (error) {
    dispatch(apiError(error));
  }
};

export const getdevisionFun = () => async dispatch => {
  try {
    let response;
    response = getdevision();

    var data = await response;

    if (data && data.length > 0) {
      dispatch(listdevision(data));
    } else {
      dispatch(apiError(data));
    }
  } catch (error) {
    dispatch(apiError(error));
  }
};

export const createEmployeeFun = (postdata, history) => async dispatch => {
  try {
    let response;
    response = createEmployeeApi(postdata);

    var data = await response;

    if (data && data.id) {
      var finallogin = JSON.stringify(data);
      finallogin = JSON.parse(finallogin);
      dispatch(createEmployee(data));
      history('/list-employee');
    } else {
      dispatch(apiError(data.error));
      alert('Error in employee creation');
    }
  } catch (error) {
    dispatch(apiError(error));
    alert('Error in employee creation');
  }
};

export const updateEmployeeFun = (postdata, history) => async dispatch => {
  try {
    let response;
    response = updateEmployeeApi(postdata);
    var data = await response;

    if (data && data.id) {
      var finallogin = JSON.stringify(data);
      finallogin = JSON.parse(finallogin);
      history('/list-employee');
    } else {
      dispatch(apiError(data.error));
      alert('Error please try again later');
    }
  } catch (error) {
    dispatch(apiError(error));
    alert('Error please try again later');
  }
};

export const getEmployeeFun = () => async dispatch => {
  try {
    let response;
    response = getEmployess();

    var data = await response;

    if (data && data.length > 0) {
      dispatch(listEmployee(data));
    } else {
      dispatch(apiError(data));
    }
  } catch (error) {
    dispatch(apiError(error));
  }
};

export const getEmployeeSelectFun = id => async dispatch => {
  try {
    let response;
    response = getEmployessSelect(id);

    var data = await response;

    if (data && data.id) {
      dispatch(listEmployeeSelect(data));
    } else {
      dispatch(apiError(data));
    }
  } catch (error) {
    dispatch(apiError(error));
  }
};

export const getEmployeeSelectedFun = async id => {
  try {
    let response;
    response = getEmployessSelect(id);

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

export const getdashboardfunction = async id => {
  try {
    let response;
    response = getdashboardfunctionApi(id);

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

export const getdatafunction = async id => {
  try {
    let response;
    response = getdatafunctionApi(id);

    var data = await response;

    if (data) {
      return data;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};

export const createprocessaddFun = async (postdata, history) => {
  try {
    let response;
    response = createprocessaddApi(postdata);

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
export const createprocessreplyFun = async (postdata, history) => {
  try {
    let response;
    response = createprocessreplyApi(postdata);

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
export const updateprocessaddFun = async (id, postdata, history) => {
  try {
    let response;
    response = updateprocessaddApi(postdata, id);

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
