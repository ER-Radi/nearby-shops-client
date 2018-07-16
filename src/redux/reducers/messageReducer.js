import initialState from './initialState';
import {
    ADD_MESSAGE,
    // REMOVE_ERROR,
    RESET_MESSAGES
} from '../actions/actionTypes';


export default function messageReducer(messages = initialState.messages, action){
    switch( action.type ){
        case ADD_MESSAGE:
            return [
                ...messages,
                action.message
            ];

        // case REMOVE_MESSAGE:
        //     messages.filter( message => message.index !== action.index);

        case RESET_MESSAGES:
            return [];

        default:
            return messages;
    }
}