import userApi from '../../api/userApi';
import {
    LOGIN_SUCCESS,
    SIGN_UP_SUCCESS
} from './actionTypes';

import { addMessage } from './messageActions';

export function loginSuccess(user){
    return {
        type: LOGIN_SUCCESS,
        user
    }
}

export function signUpSuccess(){
    return {
        type: SIGN_UP_SUCCESS,
    }
}


export function login(loginData){
    return function(dispatch){
        return userApi.login(loginData).then(({success, user, error}) => {
            if(success){
                dispatch(loginSuccess(user));
                const message = {
                    type: 'success',
                    content: 'User authenticated successfully'
                };
                dispatch(addMessage(message));
            }
            else {
                const message = {
                    type: 'error',
                    content: error
                };
                dispatch(addMessage(message));
            }
        }).catch(error => {
            const message = {
                type: 'error',
                content: error
            };
            dispatch(addMessage(message));
        })
    }
}

export function signUp(userData){
    return function(dispatch){
        return userApi.signUp(userData).then(({success, error}) => {
            if(success){
                dispatch(signUpSuccess());
                const message = {
                    type: 'success',
                    content: 'User sign up successfully'
                };
                dispatch(addMessage(message));
            }
            else {
                const message = {
                    type: 'error',
                    content: error
                };
                dispatch(addMessage(message));
            }
        }).catch(error => {
            const message = {
                type: 'error',
                content: error
            };
            dispatch(addMessage(message));
        })
    }
}