import initialState from './initialState';
import {
    LOGIN_SUCCESS, SIGN_UP_SUCCESS
} from '../actions/actionTypes';


export default function userReducer(prevState = initialState.user, action){
    switch(action.type){
        case LOGIN_SUCCESS:
            return action.user;
            
        case SIGN_UP_SUCCESS:
            return null;

        default:
            return prevState;
    }
}