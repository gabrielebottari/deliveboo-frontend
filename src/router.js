import { createRouter, createWebHistory } from 'vue-router';

import Home from './pages/Homepage.vue';
import Carrello from './pages/Carrello.vue';
import Menu from './pages/Menu.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/carrello',
            name: 'Carrello',
            component: Carrello
        },

        {
            path: '/menu',
            name: 'Menu',
            component: Menu
        },

        {
            path: '/menu:id',
            name: 'menu',
            component: Menu
        },

        // NOT FOUND PAGE LINK
        {
            path:'/:pathMatch(.*)*',
            name: 'error',
            component: NotFound,
        },
    ]
});

export { router };