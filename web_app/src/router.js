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
                title: '大象商城',
                keepAlive: true
            },
			component: Index
        },
        {
			path: '/indexSearch',
            name: 'indexSearch',
            meta:{
                title: '搜索商品',
                keepAlive: false
            },
			component: () => import('./views/index/indexBiquangChild/indexSearch') // 搜索商品
        },
        
		{
			path: '/myMsg',
            name: 'myMsg',
            meta:{
                title: '我的消息',
                keepAlive: false
            },
			component: () => import('./views/index/indexMsg/index') // 消息首页
		},
		{ 
			path: '/myMsg/indexToutiao',
            name: 'indexToutiao',
            meta:{
                title: '头条',
                keepAlive: false
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
                title: '我的通知',
                keepAlive: false
            },
			component: () => import('./views/index/indexMsg/indexTongzhi') //我的通知
        },
        {
			path: '/indexBannerGoods',
            name: 'indexBannerGoods',
            meta:{
                title: '大象商城',
                keepAlive: false
            },
			component: () => import('./views/index/indexBiquangChild/indexBannerGoods') // banner商品
        },
        {
			path: '/indexLeftGoosd',
            name: 'indexLeftGoosd',
            meta:{
                title: '大象商城',
                keepAlive: false
            },
			component: () => import('./views/index/indexBiquangChild/indexLeftGoosd') // banner子商品
        },
        {
			path: '/indexAllNav',
            name: 'indexAllNav',
            meta:{
                title: '全部分类',
                keepAlive: false
            },
			component: () => import('./views/index/indexAllNav') // 全部分类
		},
        { 
			path: '/indexMan',
            name: 'indexMan',
            meta:{
                title: '满减商品',
                keepAlive: false
            },
			component: () => import('./views/index/indexBiquangChild/indexMan') // 满减
        },
        { 
			path: '/indexManJJ',
            name: 'indexManJJ',
            meta:{
                title: '满件减商品',
                keepAlive: false
            },
			component: () => import('./views/index/indexBiquangChild/indexManJJ') // 满件减
        },
        { 
			path: '/indexManPinTuan',
            name: 'indexManPinTuan',
            meta:{
                title: '拼团商品',
                keepAlive: false
            },
			component: () => import('./views/index/indexBiquangChild/indexManPinTuan') // 拼团
        },
        { 
			path: '/indexVipJuan',
            name: 'indexVipJuan',
            meta:{
                title: '会员领券',
                keepAlive: false
            },
			component: () => import('./views/index/indexBiquangChild/indexVipJuan') // 新会员首减
        },
        { 
			path: '/indexNewUp',
            name: 'indexNewUp',
            meta:{
                title: '新品上市',
                keepAlive: false
            },
			component: () => import('./views/index/indexBiquangChild/indexNewUp') // 新会员首减
        },
        { // 二级导航商品
			path: '/indexNavgoodsOne',
            name: 'indexNavgoodsOne',
            meta:{
                title: '大象商城',
                keepAlive: false
            },
			component: () => import('./views/index/indexBiquangChild/indexNavgoodsOne') // 二级导航商品
        },
        { // 导航中的商品
			path: '/indexNavgoods',
            name: 'indexNavgoods',
            meta:{
                title: '大象商城',
                keepAlive: false
            },
			component: () => import('./views/index/indexBiquangChild/indexNavgoods') // 导航中的商品
        },
        { // 搜索中的商品
			path: '/indexSearchGoods',
            name: 'indexSearchGoods',
            meta:{
                title: '大象商城',
                keepAlive: false
            },
			component: () => import('./views/index/indexBiquangChild/indexSearchGoods') // 搜索中的商品
        },
        { 
			path: '/indexKanFree',
            name: 'indexKanFree',
            meta:{
                title: '砍价免费拿',
                keepAlive: false
            },
            component: () => import('./views/index/indexBiquangChild/indexKanFree'), // 砍价免费拿
        },
        { 
            path: '/Address',
            name: 'Address',
            meta:{
                title: '填写地址',
                keepAlive: false
            },
            component: () => import('./components/Address.vue') // 填写地址
        },
        { 
			path: '/indexMeiZhuang',
            name: 'indexMeiZhuang',
            meta:{
                title: '美妆学院',
                keepAlive: false
            },
			component: () => import('./views/index/indexBiquangChild/indexMeiZhuang') // 美妆学院
        },
        {  // 商品详情
			path: '/ProductDetails',
            name: 'ProductDetails',
            meta:{
                title: '商品详情',
                keepAlive: false
            },
            component: () => import('./components/ProductDetails.vue'),  // 商品详情
        },
        {  // 拼团商品详情
			path: '/ProductDetailsPinTuan',
            name: 'ProductDetailsPinTuan',
            meta:{
                title: '拼团商品详情',
                keepAlive: false
            },
            component: () => import('./components/ProductDetailsPinTuan.vue'),  // 拼团商品详情
        },
        {  // 提交订单
			path: '/AddOrder',
            name: 'AddOrder',
            meta:{
                title: '提交订单',
                keepAlive: false
            },
            component: () => import('./components/AddOrder.vue'),  // 提交订单
        },
        {  // 提交单独订单
			path: '/AddOrderOne',
            name: 'AddOrderOne',
            meta:{
                title: '提交订单',
                keepAlive: false
            },
            component: () => import('./components/AddOrderOne.vue'),  // 提交单独订单
        },
        {  // 订单详情
			path: '/OrderDetails',
            name: 'OrderDetails',
            meta:{
                title: '订单详情',
                keepAlive: false
            },
            component: () => import('./components/OrderDetails.vue'),  // 订单详情
        },
        { 
            path: '/MoreComments',
            name: 'MoreComments',
            meta:{
                title: '更多评论',
                keepAlive: false
            },
            component: () => import('./components/MoreComments.vue') // 查看更多评论
        },
		{// Tab买手
			path: '/buy',
            name: 'buy',
            meta:{
                title: '买手页面',
                keepAlive: false
            },
			component: () => import('./views/buy/index')
        },
        {// Tab买手
			path: '/Article',
            name: 'Article',
            meta:{
                title: '详情',
                keepAlive: false
            },
			component: () => import('./views/buy/child/article.vue')
		},
		{//	Tabvip
			path: '/vip',
            name: 'vip',
            meta:{
                title: '我的会员',
                keepAlive: false
            },
			component: () => import('./views/vip/index')
        },
        {
			path: '/vipZhaoMu',
            name: 'vipZhaoMu',
            meta:{
                title: '大象会员招募',
                keepAlive: false
            },
			component: () => import('./views/vip/child/vipZhaoMu.vue') // 会员招募
        },
        {
			path: '/vipBuyLeGo',
            name: 'vipBuyLeGo',
            meta:{
                title: '大象会员招募',
                keepAlive: false
            },
			component: () => import('./views/vip/child/vipBuyLeGo.vue') // 会员招募乐购
        },
        {
			path: '/ProductDetailsVIP',
            name: 'ProductDetailsVIP',
            meta:{
                title: '大象会员招募',
                keepAlive: false
            },
			component: () => import('./components/ProductDetailsVIP.vue') // 大象会员招募详情
		},
		{// Tab购物车
			path: '/cart',
            name: 'cart',
            meta:{
                title: '大象购物车',
                keepAlive: false
            },
			component: () => import('./views/cart/index')
		},
		{// Tab个人中心
			path: '/center',
            name: 'center',
            meta:{
                title: '个人中心',
                keepAlive: false
            },
			component: () => import('./views/center/index')
        },
        { // 我的订单
            path: '/orderList',
            name: 'orderList',
            meta:{
                title: '我的订单',
                keepAlive: false
            },
            component: () => import('./views/center/child/orderList') // 我的订单
        },
        { // 我的拼团订单
            path: '/pintuanList',
            name: 'pintuanList',
            meta:{
                title: '我的拼团订单',
                keepAlive: false
            },
            component: () => import('./views/center/child/pintuanList') // 我的拼团订单
        },
        {
            path: '/refundGoods',
            name: 'refundGoods',
            meta:{
                title: '申请退款',
                keepAlive: true
            },
            component: () => import('./views/center/child/refundGoods') // 申请退款
        },
        {
            path: '/collection',
            name: 'collection',
            meta:{
                title: '我的收藏',
                keepAlive: false
            },
            component: () => import('./views/center/child/collection') // 我的收藏
        },
	]
})
