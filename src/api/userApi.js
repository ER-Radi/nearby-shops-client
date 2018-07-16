import initRequest from './initRequest';
import config from './config';

const { serverUrl } = config;

class UserApi {
    static login(loginData){
        const url = `${serverUrl}/api/v1/auth/login`;
        return fetch(url, initRequest('POST', loginData ,false))
            .then(response => response.json())
            .catch(error => error);
    }

    static signUp(userData){
        const url = `${serverUrl}/api/v1/auth/signup`;
        return fetch(url, initRequest('POST', userData ,false))
            .then(response => response.json())
            .catch(error => error);
    }
}

export default UserApi;