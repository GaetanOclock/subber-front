import userService from "../services/userService";
import router from '../router';

export default {
    mustBeAuthenticated: (to, from) => {
        if (userService.isUserAuthenticated()) {
            router.push({name: 'login'});
            return false;
        } else {
            return true;
        }
    }
};