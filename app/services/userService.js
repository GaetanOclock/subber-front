import axios from 'axios';

const userService = {
    init() {
        document.addEventListener('connectionWithGoogle', this.onConnectWithGoogle);
    },
    onConnectWithGoogle(event) {
        axios.post('http://localhost:3000/user/signin', {connectionMethod: 'google', token: event.data.credential}).then(response => {
            console.log('Connection with Google', response);
        }).catch(err => {
            console.error(err);
        });
    },
    isUserAuthenticated() {
        return !!localStorage.token;
    }
};

userService.init();

export default userService;