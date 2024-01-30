import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  data: [],
  Summery: [],
  singlecash: {},
  error: "", // for error message
  loading: false,
  errorMsg: false, // for error
};

const cashSlice = createSlice({
  name: "cash",
  initialState,
  reducers: {
    apiError(state, action) {
      state.error = action.payload.data;
      state.loading = true;
      state.errorMsg = true;
    },
    createcash(state, action) {
      state.data = action.payload
      state.loading = false;
      state.errorMsg = false;
    },
    listcash(state, action) {
      state.data = action.payload
      state.loading = false;
      state.errorMsg = false;
    },
    listcashSummery(state, action) {
      state.Summery = action.payload
      state.loading = false;
      state.errorMsg = false;
    },
    listcashSelect(state, action) {
      state.singlecash = action.payload
      state.loading = false;
      state.errorMsg = false;
    },
  },
});

export const {
  apiError,
  createcash,
  listcash,
  listcashSelect,
  listcashSummery
} = cashSlice.actions

export default cashSlice.reducer;