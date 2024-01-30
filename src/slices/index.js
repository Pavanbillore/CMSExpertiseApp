import {combineReducers} from 'redux';

// Authentication
import cardSlice from './all/cards/reducer';
import cashSlice from './all/cash/reducer';
import employeeSlice from './all/employees/reducer';
import LoginReducer from './auth/login/reducer';
import AccountReducer from './auth/register/reducer';
import ForgetPasswordReducer from './auth/forgetpwd/reducer';
import ProfileReducer from './auth/profile/reducer';
import projectionSlice from './all/paymentprojection/reducer';
import SupplierPOSlice from './all/supplier/reducer';
// API Key
import APIKeyReducer from './apiKey/reducer';

const rootReducer = combineReducers({
  Projection: projectionSlice,
  SupplierPO: SupplierPOSlice,
  Cash: cashSlice,
  Employees: employeeSlice,
  Cards: cardSlice,
  Login: LoginReducer,
  Account: AccountReducer,
  ForgetPassword: ForgetPasswordReducer,
  Profile: ProfileReducer,
  APIKey: APIKeyReducer,
});

export default rootReducer;
