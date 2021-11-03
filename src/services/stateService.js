import api from './api';

class StateService { 
    getState() {
        return api.get("/states");
    }
}

export default StateService