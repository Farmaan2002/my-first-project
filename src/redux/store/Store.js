import { createStore, combineReducers } from 'redux';
import authReducer from '../reducer/Reducers';


const rootReducer = combineReducers({
    login:authReducer,
});

const store = createStore(rootReducer);

export default store;