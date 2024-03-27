import { createRouter, createWebHistory } from 'vue-router';

import Home from './pages/Homepage.vue';
import Dashboard from './pages/Dashboard.vue';
import Carrello from './pages/Carrello.vue';
// import NotFound from './pages/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/dashboard',
            name: 'Dashboard',
            component: Dashboard
        },
        {
            path: '/carrello',
            name: 'Carrello',
            component: Carrello
        },
        // {
        //     path:'/:pathMatch(.*)*',
        //     name: 'error',
        //     component: NotFound,
        // }
    ]
});

export { router };