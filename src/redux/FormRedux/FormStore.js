import { configureStore } from "@reduxjs/toolkit"
import formReducer from './FormSlice'

const formstore = configureStore({
    reducer:{
        form:formReducer
    },
});
export default formstore;