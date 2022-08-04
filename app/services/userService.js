import axios from 'axios';
import router from '../router';

const apiUrl = process.env.API_URL;

const userService = {
    init() {
        document.addEventListener('connectionWithGoogle', this.onConnectWithGoogle);
    },
    onConnectWithGoogle(event) {
        axios.post(apiUrl + '/user/signin', {connectionMethod: 'google', token: event.data.credential})
        .then(response => {
            console.log(response);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('displayName', response.data.user.displayName);
            localStorage.setItem('email', response.data.user.email);
            router.push({name: sessionStorage.getItem('redirectTo')});
        }).catch(err => {
            console.error(err);
        });
    },
    isUserAuthenticated() {
        return !!localStorage.getItem('token');
    },
    signOut() {
        return axios.get(apiUrl + '/user/signout').then(response => {
            localStorage.removeItem('token');
            localStorage.removeItem('displayName');
        });
    }
};

userService.init();

export default userService;