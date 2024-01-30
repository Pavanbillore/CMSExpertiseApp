import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  data: [],
  error: "", // for error message
  loading: false,
  errorMsg: false, // for error
};

const projectionSlice = createSlice({
  name: "projection",
  initialState,
  reducers: {
    apiError(state, action) {
      state.error = action.payload.data;
      state.loading = true;
      state.errorMsg = true;
    },
    createprojection(state, action) {
      state.data.push(action.payload)
      state.loading = false;
      state.errorMsg = false;
    },
    listprojection(state, action) {
      state.data = action.payload
      state.loading = false;
      state.errorMsg = false;
    },
  },
});

export const {
  apiError,
  createprojection,
  listprojection,
  listprojectionSelect,
} = projectionSlice.actions

export default projectionSlice.reducer;