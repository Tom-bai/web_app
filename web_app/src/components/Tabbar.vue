<template>
	<div>
		<!-- <nut-tabbar class="Bset" @tab-switch="tabSwitch" :bottom="true" :tabbarList="tabList"></nut-tabbar> -->
        <div class="Tabbar">
            <div class="tabbarNav" v-for="(item,index) in tabList" :key="index" @click="onRouter(item.routerUrl,item.tabTitle)">
                <div class="navIocn">
                    <img :src="curr == index?item.activeIcon:item.icon" alt="">
                    <span class="biaoQian" v-if="item.tabTitle == '购物车'">{{cardNum}}</span>
                </div>
                <div class="navText" :class="curr == index?'active':''">{{item.tabTitle}}</div>
            </div>
        </div>
	</div>
</template>

<script>
import { get,post } from '@/axiosApi'
export default {
	name: 'Tabbar',
	props: {
		msg: String
	},
	data () {
		return {
            curr: 0,
            tabList:[
                {
                    'tabTitle': '首页',
                    'curr': true,
                    'icon': require('../assets/img/tabbar/index_N.png'),
                    'activeIcon': require('../assets/img/tabbar/index_Z.png'),
                    'routerUrl': '/'
                },
                {
                    'tabTitle':'买手',
                    'curr':false,
                    'icon':require('../assets/img/tabbar/buy_N.png'),
                    'activeIcon':require('../assets/img/tabbar/buy_Z.png'),
                    'routerUrl': '/buy'
                },
                {
                    'tabTitle':'会员中心',
                    'curr':false,
                    'icon':require('../assets/img/tabbar/vip_N.png'),
                    'activeIcon':require('../assets/img/tabbar/vip_Z.png'),
                    'routerUrl': '/vip'
                },
                {
                    'tabTitle':'购物车',
                    'curr':false,
                    'num':2,
                    'icon':require('../assets/img/tabbar/card_N.png'),
                    'activeIcon':require('../assets/img/tabbar/card_Z.png'),
                    'routerUrl': '/cart'
                },
                {
                    'tabTitle':'我的',
                    'curr':false,
                    'icon':require('../assets/img/tabbar/center_N.png'),
                    'activeIcon':require('../assets/img/tabbar/center_Z.png'),
                    'routerUrl': '/center'
                }
            ],
            cardNum: null
		}
    },
    mounted () {
        this.getCardData() 
    },
	methods: {
		onRouter (pathUrl,id) {
			this.$router.push({
				path: pathUrl,
				query: {
                    from: id
				}
			})
        },
        getCardData () { // 获取购物车
            let that = this
            get('/index.php/home/shopCart/info').then(res => {
                that.cardNum = res.list.length
            }).catch(function (error) {
                console.log(error)
            })
        },
    },
    watch: {
        '$route'(to,from) {
            switch (to.name) {
                case 'index':
                    this.curr = 0
                    break;
                case 'buy':
                    this.curr = 1
                    break;
                case 'vip':
                    this.curr = 2
                    break;
                case 'cart':
                    this.curr = 3
                    break;
                case 'center':
                    this.curr = 4
                    break;
                default:
                    this.curr = 0
                    break;
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.Tabbar
    display flex
    align-items center
    position fixed
    width 100%
    left 0
    bottom 0
    height 60px
    z-index 999
    background-color #fff
    border-top solid 1px #f1f1f1
    .tabbarNav
        flex 1
        .navIocn
            width 22px
            height 22px
            margin-bottom 5px
            margin auto
            position relative
            >img 
                width 100%
                display block
            .biaoQian
                line-height 1
                position absolute
                top -8px
                right -12px
                background-color $background-color
                color #fff
                padding 3px
                font-size 12px
                border-radius 100%
        .navText
            color #848484
            margin-top 2px
        .active
            color #000
.Bset
    height 60px !important
    box-shadow 0 0 10px #ccc
    >>>.curr
        color #000
    >>>.tabbar-nav
        >.icon-box
            >.tips
                top -5px
                right 5px
                background-color #F0250F
                color #fff
            >.icon
                width 22px
                height 22px
                margin-bottom 5px
</style>
