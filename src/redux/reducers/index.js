import { combineReducers } from 'redux';
import shops from './shopReducer';
import user from './userReducer';
import messages from './messageReducer';

const rootReducer = combineReducers({
    shops,
    user,
    messages
});

export default rootReducer;