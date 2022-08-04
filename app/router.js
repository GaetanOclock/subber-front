import { createRouter, createWebHistory } from 'vue-router'

import HomeView from './views/HomeView.vue';
import LoginView from './views/LoginView.vue';
import EditVideoView from './views/EditVideoView.vue';
import CreateVideoView from './views/CreateVideoView.vue';
import ProfileView from './views/ProfileView.vue';
import RegisterView from './views/RegisterView.vue';

const routes = [
    {
        path: '/',
        component: HomeView
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;