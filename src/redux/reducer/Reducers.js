import AsyncStorage from '@react-native-async-storage/async-storage';
import { LOGIN_SUCCESS } from '../action/Actions';

const user = AsyncStorage.getItem('user');
const initialState = user
  ? {
      isLoggedIn: true,
      user,
    }
  : {
      isLoggedIn: false,
      user: null,
    };

const authReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
      };
    default:
      return state;
  }
};

export default authReducer;
