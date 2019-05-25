import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index/index'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{// Tab首页
			path: '/',
			name: 'index',
			component: Index
		},
		{
			path: '/myMsg',
			name: 'myMsg',
			component: () => import('./views/index/indexMsg/index')
		},
		{ 
			path: '/myMsg/indexToutiao',
			name: 'indexToutiao',
			component: () => import('./views/index/indexMsg/indexToutiao')
		},
		{ 
			path: '/myMsg/indexArticle',
			name: 'indexTongzhi',
			component: () => import('./views/index/indexMsg/indexArticle')
		},
		{ 
			path: '/myMsg/indexTongzhi',
			name: 'indexTongzhi',
			component: () => import('./views/index/indexMsg/indexTongzhi')
		},
		{// Tab买手
			path: '/buy',
			name: 'buy',
			component: () => import('./views/buy/index')
		},
		{//	Tabvip
			path: '/vip',
			name: 'vip',
			component: () => import('./views/vip/index')
		},
		{// Tab购物车
			path: '/cart',
			name: 'cart',
			component: () => import('./views/cart/index')
		},
		{// Tab个人中心
			path: '/center',
			name: 'center',
			component: () => import('./views/center/index')
		},
	]
})
