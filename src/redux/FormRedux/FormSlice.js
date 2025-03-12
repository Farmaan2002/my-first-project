import {createSlice} from '@reduxjs/toolkit';

const FormSlice = createSlice({
  name: 'form',
  initialState: {
    personalDetails: {
      name: '',
      fatherName: '',
      motherName: '',
      phoneNo: '',
      gender: '',
    },
    residenceDetails: {
        houseNo: '',
        city: '',
        state: '',
    },
    paymentDetails: {
        paymentMethod:'', 
    },
  },
  reducers: {
    setPersonalDetails: (state, action) => {
      state.personalDetails = action.payload;
    },
    setResidenceDetails: (state, action) => {
      state.residenceDetails = action.payload;
    },
    setPaymentDetails: (state, action) => {
      state.paymentDetails = action.payload;
    },
  },
});

export const {setPersonalDetails, setResidenceDetails, setPaymentDetails} =
  FormSlice.actions;
export default FormSlice.reducer;
