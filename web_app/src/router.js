import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index/index'

Vue.use(Router)

export default new Router({
	mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior(to,from,savePosition) { // 在点击浏览器的“前进/后退”，或者切换导航的时候触发。
        if(savePosition){
            return savePosition;
        }else{
            return {
                x: 0,
                y: 0
            }
        }
    },
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
			name: 'indexArticle',
			component: () => import('./views/index/indexMsg/indexArticle')
		},
		{ 
			path: '/myMsg/indexTongzhi',
			name: 'indexTongzhi',
			component: () => import('./views/index/indexMsg/indexTongzhi')
        },
        { 
			path: '/indexMan',
			name: 'indexBiqiang',
			component: () => import('./views/index/indexBiquangChild/indexMan')
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
