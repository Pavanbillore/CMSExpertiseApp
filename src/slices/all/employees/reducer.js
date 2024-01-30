import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  roles: [],
  data: [],
  employee: {},
  department: [],
  devision: [],
  position: [],
  process: [],
  error: "", // for error message
  loading: false,
  errorMsg: false, // for error
};

const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    apiError(state, action) {
      state.error = action.payload.data;
      state.loading = true;
      state.errorMsg = true;
    },
    createdepartment(state, action) {
      state.department.push(action.payload)
      state.loading = false;
      state.errorMsg = false;
    },
    listdepartment(state, action) {
      state.department = action.payload
      state.loading = false;
      state.errorMsg = false;
    },
    createdevision(state, action) {
      state.devision.push(action.payload)
      state.loading = false;
      state.errorMsg = false;
    },
    listdevision(state, action) {
      state.devision = action.payload
      state.loading = false;
      state.errorMsg = false;
    },
    createposition(state, action) {
      state.position.push(action.payload)
      state.loading = false;
      state.errorMsg = false;
    },
    listposition(state, action) {
      state.position = action.payload
      state.loading = false;
      state.errorMsg = false;
    },
    listrole(state, action) {
      state.roles = action.payload
      state.loading = false;
      state.errorMsg = false;
    },


    createprocess(state, action) {
      state.process.push(action.payload)
      state.loading = false;
      state.errorMsg = false;
    },
    listprocess(state, action) {
      state.process = action.payload
      state.loading = false;
      state.errorMsg = false;
    },


    createEmployee(state, action) {
      state.data.push(action.payload)
      state.loading = false;
      state.errorMsg = false;
    },
    listEmployee(state, action) {
      state.data = action.payload
      state.loading = false;
      state.errorMsg = false;
    },
    listEmployeeSelect(state, action) {
      state.employee = action.payload
      state.loading = false;
      state.errorMsg = false;
    },
    reset_login_flag(state) {
      state.error = null
      state.loading = false;
      state.errorMsg = false;
    }
  },
});

export const {
  apiError,
  createEmployee,
  listEmployee,
  listEmployeeSelect,
  reset_login_flag,
  createdepartment,
  listdepartment,
  createdevision,
  listdevision,
  createposition,
  listposition,
  createprocess,
  listprocess,
  listrole
} = employeeSlice.actions

export default employeeSlice.reducer;