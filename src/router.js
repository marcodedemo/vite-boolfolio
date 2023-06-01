

import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import ProjectsIndex from './pages/ProjectsIndex.vue';
import ProjectsShow from './pages/ProjectsShow.vue';
import AppAbout from './pages/AppAbout.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({

    history: createWebHistory(),

    routes: [
        
        {
            path: '/',
            name: 'home',
            component: AppHome,
            meta:{
                title: 'Home'
            },
        },
        {
            path: '/projects',
            name: 'projects.index',
            component: ProjectsIndex,
            meta:{
                title: 'Progetti'
            },
        },
        {
            path: '/about',
            name: 'about',
            component: AppAbout,
            meta:{
                title: 'About'
            },  
        },
        {
            path: '/projects/:slug',
            name: 'projects.show',
            component: ProjectsShow,
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'notFound',
            component: NotFound,
            meta: {
              title: '404'
            }
          }
        
        
    ]
});


router.beforeEach((to) => {

    document.title = to.meta?.title ? 'Boolfolio - ' + to.meta.title : 'Boolfolio';

  });

  

export { router };