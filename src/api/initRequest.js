import { loadState } from '../localStorage';

export default function initRequest(method = 'GET', data = null, withToken = true){
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    if( withToken ){
        const { user } = loadState();
        let token = '';
        if( user ){
            token = user.token;
        }

        myHeaders.append(
            "Authorization", 
            `JWT ${token}`
        );
    }
    
    return {
        method,
        headers: myHeaders,
        data: data ? JSON.stringify(data): null,
        mode: 'cors',
        cache: 'default'
    };
}