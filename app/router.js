import { createRouter, createWebHistory } from 'vue-router'

import HomeView from './views/HomeView.vue';
import LoginView from './views/LoginView.vue';
import EditVideoView from './views/EditVideoView.vue';
import CreateVideoView from './views/CreateVideoView.vue';
import ProfileView from './views/ProfileView.vue';
import RegisterView from './views/RegisterView.vue';

import guards from './guards/guards';

const routes = [
    {
        name: 'home',
        path: '/',
        component: HomeView,
        beforeEnter: guards.mustBeAuthenticated
    },
    {
        name: 'login',
        path: '/login',
        component: LoginView
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;