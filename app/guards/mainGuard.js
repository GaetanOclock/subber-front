import userService from "../services/userService";
import router from '../router';

export default {
    mustBeAuthenticated: (to, from) => {
        if (!userService.isUserAuthenticated() && to.name != "login") {
            sessionStorage.setItem('redirectTo', to.name);
            return 'login';
        }
    }
};