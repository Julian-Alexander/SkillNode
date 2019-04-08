import axios from "axios";

const setAuthToken = token => {
    if(token) {
        // Apply to every request
        axios.defaults.headers.common["Authorization"] = token;
    } else {
        // Delete auth header
        delete axios.defaults.headers.common["Authorication"];
    }
};

/*this helps have an authorization for every request while logged in*/

export default setAuthToken;