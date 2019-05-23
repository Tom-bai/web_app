<template>
	<div class="Tabbar">
		<nut-tabbar class="Bset" @tab-switch="tabSwitch" :bottom="true" :tabbarList="tabList"></nut-tabbar>
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
            tabList:[
                {
                    'tabTitle': '首页',
                    'curr': true,
                    'icon': require('../assets/img/index_N.png'),
                    'activeIcon': require('../assets/img/index_Z.png'),
                    'routerUrl': '/'
                },
                {
                    'tabTitle':'买手',
                    'curr':false,
                    'icon':require('../assets/img/buy_N.png'),
                    'activeIcon':require('../assets/img/buy_Z.png'),
                    'routerUrl': '/buy'
                },
                {
                    'tabTitle':'会员中心',
                    'curr':false,
                    'icon':require('../assets/img/vip_N.png'),
                    'activeIcon':require('../assets/img/vip_Z.png'),
                    'routerUrl': '/vip'
                },
                {
                    'tabTitle':'购物车',
                    'curr':false,
                    'num':2,
                    'icon':require('../assets/img/card_N.png'),
                    'activeIcon':require('../assets/img/card_Z.png'),
                    'routerUrl': '/cart'
                },
                {
                    'tabTitle':'我的',
                    'curr':false,
                    'icon':require('../assets/img/center_N.png'),
                    'activeIcon':require('../assets/img/center_Z.png'),
                    'routerUrl': '/center'
                }
            ]
			}
	},
	methods: {
		tabSwitch (value,index) {
			this.$router.push({
				path: value.routerUrl,
				query: {

				}
			})
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.Bset
    height 65px !important
    box-shadow 0 0 10px #ccc
    padding-bottom 5px
    >>>.curr
        color #000
    >>>.tabbar-nav
        align-items flex-end
        >.icon-box
            >.icon
                width 22px
                height 22px
                margin-bottom 5px
</style>
