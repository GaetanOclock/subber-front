import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            isUserAuthenticated: false
        }
    },
    mutations: {
        updateUserStatus(state) {
            state.isUserAuthenticated = !!localStorage.getItem('token');
        }
    }
});

export default store;