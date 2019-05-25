<template>
	<!-- 首页 -->
	<div> 
		<div class="index"> 
			<indexSwiper></indexSwiper>
			<indexNav></indexNav>
			<indexBiqiang></indexBiqiang>
			<indexMiaosha></indexMiaosha>
			<indexYiyuan></indexYiyuan>
			<indexLeftscroll v-if="$store.state.INDEX_STATE == 0"></indexLeftscroll>
			<WaterFall v-if="$store.state.INDEX_STATE == 0"></WaterFall>
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
    destroyed () {
    },
	methods: {
	},
	watch: {}
};
</script>
<style lang="stylus" scoped>
.index
	margin-bottom 70px
</style>