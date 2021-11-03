import api from '../api';

class AuthenticationService { 
    async registerUser(registerUserRequest) {
        const json = JSON.stringify(registerUserRequest);
        await api.post("/authentication/register", json);
    }
}

export default AuthenticationService