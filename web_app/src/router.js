import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index/index'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'index',
			component: Index
		},
		{
			path: '/buy',
			name: 'buy',
			component: () => import('./views/buy/index')
		},
		{
			path: '/vip',
			name: 'vip',
			component: () => import('./views/vip/index')
		},
		{
			path: '/cart',
			name: 'cart',
			component: () => import('./views/cart/index')
		},
		{
			path: '/center',
			name: 'center',
			component: () => import('./views/center/index')
		}
	]
})
