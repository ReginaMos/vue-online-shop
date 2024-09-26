import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue'),
        children: [
            {
                path: '/', 
                component: () => import(/* webpackChunkName: "home" */ '../components/CatalogComponent.vue'),
            },
            {
                path: '/cart',
                component: () => import(/* webpackChunkName: "home" */ '../components/CartComponent.vue'),
            },
        ]
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router