import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Cep from '../pages/Cep.vue'

const routes = [
	{ path: '/', component: Home },
	{ path: '/Cep', component: Cep },
]

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;