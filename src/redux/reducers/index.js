import { combineReducers } from 'redux';
import shops from './shopReducer';

const rootReducer = combineReducers({
    shops,
});

export default rootReducer;