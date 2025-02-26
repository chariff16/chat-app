import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/components/Messages/NoMessage.vue'),
    },
    {
        path: '/message/:id',
        name: 'message',
        component: () => import('@/components/Messages/MessagesBody.vue'),
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;