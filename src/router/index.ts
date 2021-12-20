import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'


const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'layout',
		component: () => import('../views/Layout/index.vue'),
		redirect: '/home',
		children: [
			{
				path: '/home',
				name: 'Home',
				component: () => import('../views/Home.vue'),
			},
			{
				path: '/about',
				name: 'About',
				component: () => import('../views/About/index.vue'),
			}
		]
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import('../views/Login/index.vue'),
	}

]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})
// router.beforeEach((to, from, next) => {
// 	if (to.path === '/login') {
// 		next()
// 	} else {
// 		const token: string = localStorage.getItem('token') || ''
// 		if (token) {
// 			next()
// 		} else {
// 			next('/login')
// 		}
// 	}
// })

export default router