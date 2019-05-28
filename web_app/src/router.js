import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index/index'

Vue.use(Router)

export default new Router({
	mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior(to,from,savePosition) { // 在点击浏览器的“前进/后退”，或者切换导航的时候触发。
        if (to.meta.title) {
            document.title = to.meta.title
        } else {
            document.title = '大象商城'
        }
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
            meta:{
                title: '大象商城'
            },
			component: Index
		},
		{
			path: '/myMsg',
            name: 'myMsg',
            meta:{
                title: '我的消息'
            },
			component: () => import('./views/index/indexMsg/index') // 消息首页
		},
		{ 
			path: '/myMsg/indexToutiao',
            name: 'indexToutiao',
            meta:{
                title: '头条'
            },
			component: () => import('./views/index/indexMsg/indexToutiao') // 头条
		},
		{ 
			path: '/myMsg/indexArticle',
            name: 'indexArticle',
            meta:{
                title: '头条文章'
            },
			component: () => import('./views/index/indexMsg/indexArticle') // 文章
		},
		{ 
			path: '/myMsg/indexTongzhi',
            name: 'indexTongzhi',
            meta:{
                title: '我的通知'
            },
			component: () => import('./views/index/indexMsg/indexTongzhi') //我的通知
        },
        { 
			path: '/indexMan',
            name: 'indexMan',
            meta:{
                title: '满减商品'
            },
			component: () => import('./views/index/indexBiquangChild/indexMan') // 满减
        },
        { 
			path: '/indexManJJ',
            name: 'indexManJJ',
            meta:{
                title: '满件减商品'
            },
			component: () => import('./views/index/indexBiquangChild/indexManJJ') // 满件减
        },
        { 
			path: '/indexManPinTuan',
            name: 'indexManPinTuan',
            meta:{
                title: '拼团商品'
            },
			component: () => import('./views/index/indexBiquangChild/indexManPinTuan') // 拼团
		},
		{// Tab买手
			path: '/buy',
            name: 'buy',
            meta:{
                title: '买手页面'
            },
			component: () => import('./views/buy/index')
		},
		{//	Tabvip
			path: '/vip',
            name: 'vip',
            meta:{
                title: '我的会员'
            },
			component: () => import('./views/vip/index')
		},
		{// Tab购物车
			path: '/cart',
            name: 'cart',
            meta:{
                title: '大象购物车'
            },
			component: () => import('./views/cart/index')
		},
		{// Tab个人中心
			path: '/center',
            name: 'center',
            meta:{
                title: '个人中心'
            },
			component: () => import('./views/center/index')
		},
	]
})
