<template>
	<div id="app">
        <div>
            <div class="main">
                <keep-alive>
                    <router-view v-if="$route.meta.keepAlive"></router-view>
                </keep-alive>
                <router-view v-if="!$route.meta.keepAlive"></router-view>
                <nut-backtop :distance="500" :bottom="80" :right="10" class="myTop"></nut-backtop>
                <Tabbar v-if="showTabber"></Tabbar>
            </div>
        </div>
	</div>
</template>
<script>
    import Tabbar from './components/Tabbar'
	export default {
		name: "index",
		components: {
			Tabbar
		},
		props: [],
		data () {
            return {
                showTabber: true
            }
        },
        mounted () {
        },
		methods: {},
		watch: {
            '$route'(to,from) {
                switch (to.name) {
                    case 'index':
                        this.showTabber = true
                        break;
                    case 'buy':
                        this.showTabber = true
                        break;
                    case 'vip':
                        this.showTabber = true
                        break;
                    case 'cart':
                        this.showTabber = true
                        break;
                    case 'center':
                        this.showTabber = true
                        break;
                    default:
                        this.showTabber = false
                        break;
                }
            }
        }
	};
</script>
<style lang="stylus">
.myTop
    .nut-backtop-main
        background url('../src/assets/img/index/gotop.png') no-repeat center
        background-size 100%
        background-color #fff
        box-shadow none
        border none
</style>
