import axios from 'axios';
import router from '../router';
import store from '../store';

const apiUrl = process.env.API_URL;

const userService = {
    init() {
        document.addEventListener('connectionWithGoogle', this.onConnectWithGoogle);
        store.commit('updateUserStatus');
    },
    onConnectWithGoogle(event) {
        axios.post(apiUrl + '/user/signin', {connectionMethod: 'google', token: event.data.credential})
        .then(response => {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('displayName', response.data.user.displayName);
            localStorage.setItem('email', response.data.user.email);

            store.commit('updateUserStatus');
            router.push({name: sessionStorage.getItem('redirectTo') ?? 'home'});

        }).catch(err => {
            console.error(err);
        });
    },
    isUserAuthenticated() {
        return store.state.isUserAuthenticated;
    },
    signOut() {
        return axios.get(apiUrl + '/user/signout').then(response => {
            localStorage.removeItem('token');
            localStorage.removeItem('displayName');
            localStorage.removeItem('email');
            store.commit('updateUserStatus');
        });
    }
};

userService.init();

export default userService;