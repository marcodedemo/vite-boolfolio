

import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AppProjects from './pages/AppProjects.vue';

const router = createRouter({

    history: createWebHistory(),

    routes: [
        
        {
        path: '/',
        name: 'home',
        component: AppHome
        },
        {
        path: '/projects',
        name: 'projects',
        component: AppProjects,
        },
        
        
    ]
});

export { router };