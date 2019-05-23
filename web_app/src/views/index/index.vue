<template>
	<!-- 首页 -->
	<div> 
		<div class="search-box">
			<div class="search">
				<div class="header"><img src="../../assets/img/nav.jpg" alt=""></div>
				<div class="input">阿迪达斯</div>
				<div class="tongzhi"><img src="../../assets/img/tz.png" alt=""><span>10</span></div>
			</div>
		</div>
		<indexSwiper></indexSwiper>
        <indexNav></indexNav>
        <indexBiqiang></indexBiqiang>
        <indexMiaosha></indexMiaosha>
		<indexYiyuan></indexYiyuan>
        <indexLeftscroll v-if="$store.state.INDEX_STATE == 0"></indexLeftscroll>
		<div class="indexWaterFall" v-if="$store.state.INDEX_STATE == 0">
			<WaterFall></WaterFall>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { get } from '@/axiosApi'
import imgUrl from '@/imgUrl'
import indexNav from './indexNav'
import indexSwiper from './indexSwiper'
import indexBiqiang from './indexBiqiang'
import indexMiaosha from './indexMiaosha'
import indexYiyuan from './indexYiyuan'
import indexLeftscroll from './indexLeftscroll'
import WaterFall from '@/components/WaterFall'
export default {
	name: "index",
	components: {
		swiper,
        swiperSlide,
        indexNav,
        indexSwiper,
        indexBiqiang,
		indexMiaosha,
		indexYiyuan,
		indexLeftscroll,
		WaterFall
	},
	props: [],
	data () {
		return {
		}
	},
	mounted() {
    },
	methods: {

	},
	watch: {}
};
</script>
<style lang="stylus" scoped>
.search-box
    position sticky
    width 100%
    top 0
    z-index 99
    left 0
    .search
        display flex
        align-items center
        background-color #cad9ae
        padding 0 15px
        height 60px
        .header
            img
                width 35px
                border-radius 100%
                display block
        .input
            flex: 1
            background-color #fff
            border-radius 20px
            text-align left 
            line-height 32px
            padding 0 34px
            margin 0 10px
            background-image url('../../assets/img/sc.png')
            background-size 15px
            background-position 10px 50%
            background-repeat no-repeat
        .tongzhi
            position relative
            img
                width 28px
                display block
            span 
                position absolute
                width 18px
                height 18px
                border-radius 100%
                background-color red
                color #fff
                top -8px
                right -10px
                text-align center
                line-height 18px
.indexWaterFall
    position relative
</style>