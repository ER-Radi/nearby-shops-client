import {
    ADD_MESSAGE,
    // REMOVE_ERROR,
    RESET_MESSAGES
} from './actionTypes';

export function addMessage(message){
    return {
        type: ADD_MESSAGE,
        message
    };
}

// export function removeError(index){
//     return {
//         type: REMOVE_ERROR,
//         index
//     };
// }

export function resetMessages(){
    return {
        type: RESET_MESSAGES
    };
}