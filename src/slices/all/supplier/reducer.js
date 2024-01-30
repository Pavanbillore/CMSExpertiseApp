import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  PO: [],
  PR: [],
  PRSummery: [],
  SupplierPayment: [],
  SuppliersPaymentLineItem: [],
  error: "", // for error message
  loading: false,
  errorMsg: false, // for error
};

const SupplierPOSlice = createSlice({
  name: "supplier",
  initialState,
  reducers: {
    apiError(state, action) {
      state.error = action.payload.data;
      state.loading = true;
      state.errorMsg = true;
    },
    getSupplierPO(state, action) {
      state.PO = action.payload
      state.loading = false;
      state.errorMsg = false;
    },
    getSupplierPaymentRequestSummery(state, action) {
      state.PRSummery = action.payload
      state.loading = false;
      state.errorMsg = false;
    },
    getSupplierPaymentRequest(state, action) {
      state.PR = action.payload
      state.loading = false;
      state.errorMsg = false;
    },
    getSupplierPayment(state, action) {
      state.SupplierPayment = action.payload
      state.loading = false;
      state.errorMsg = false;
    },
    getSuppliersPaymentLineItem(state, action) {
      state.SuppliersPaymentLineItem = action.payload
      state.loading = false;
      state.errorMsg = false;
    }
  },
});

export const {
  apiError,
  getSupplierPO,
  getSupplierPaymentRequest,
  getSupplierPayment,
  getSupplierPaymentRequestSummery,
  getSuppliersPaymentLineItem
} = SupplierPOSlice.actions

export default SupplierPOSlice.reducer;