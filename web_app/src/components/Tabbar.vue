<template>
	<div>
		<!-- <nut-tabbar class="Bset" @tab-switch="tabSwitch" :bottom="true" :tabbarList="tabList"></nut-tabbar> -->
        <div class="Tabbar">
            <div class="tabbarNav" v-for="(item,index) in tabList" :key="index" @click="onRouter(item.routerUrl,item.tabTitle)">
                <div class="navIocn"><img :src="curr == index?item.activeIcon:item.icon" alt=""></div>
                <div class="navText" :class="curr == index?'active':''">{{item.tabTitle}}</div>
            </div>
        </div>
	</div>
</template>

<script>
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
            ]
			}
	},
	methods: {
		onRouter (pathUrl,id) {
			this.$router.push({
				path: pathUrl,
				query: {
                    from: id
				}
			})
		}
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
    box-shadow 0 0 8px #ccc
    background-color #fff
    .tabbarNav
        flex 1
        .navIocn
            width 22px
            height 22px
            margin-bottom 5px
            margin auto
            >img 
                width 100%
                display block
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
