import {createSlice} from '@reduxjs/toolkit';

export const initialState = {
  data: [],
  card: [],
  cardstatement: [],
  singlecard: {},
  error: '',
  loading: false,
  errorMsg: false,
};

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    apiError(state, action) {
      state.error = action.payload.data;
      state.loading = true;
      state.errorMsg = true;
    },
    createCard(state, action) {
      state.data.push(action.payload);
      state.loading = false;
      state.errorMsg = false;
    },
    createEmployeeCard(state, action) {
      state.singlecard = action.payload;
      state.loading = false;
      state.errorMsg = false;
    },
    getEmployeeCard(state, action) {
      state.card = action.payload;
      state.loading = false;
      state.errorMsg = false;
    },
    listcardstatement(state, action) {
      state.cardstatement = action.payload;
      state.loading = false;
      state.errorMsg = false;
    },
    listCard(state, action) {
      state.data = action.payload;
      state.loading = false;
      state.errorMsg = false;
    },
    listCardSelect(state, action) {
      state.singlecard = action.payload;
      state.loading = false;
      state.errorMsg = false;
    },
  },
});

export const {
  apiError,
  createCard,
  listCard,
  createEmployeeCard,
  listCardSelect,
  getEmployeeCard,
  listcardstatement,
} = cardSlice.actions;

export default cardSlice.reducer;
