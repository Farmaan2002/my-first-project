import {configureStore} from '@reduxjs/toolkit';
import ProductReducer from './Productslice';
export const store = configureStore({
  reducer: {
    product: ProductReducer,
  },
});