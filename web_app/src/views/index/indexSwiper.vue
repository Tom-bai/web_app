<template>
	<!-- 轮播 -->
	<div class="indexSwiper">
		<div class="swiper">
			<div class="swiperBg"></div>
			<swiper :options="swiperOption" v-if="bannerData.length>0">
				<swiper-slide v-for="(slide, index) in bannerData" :key="index" class="swiperImg">
					<img :src="imgUrl + slide.img" :alt="slide.alt">
				</swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { get } from '@/axiosApi'
import imgUrl from '@/imgUrl'
export default {
	name: "index",
	components: {
		swiper,
        swiperSlide
	},
	props: [],
	data () {
		return {
			bannerData: [],
			imgUrl: imgUrl,
			swiperOption: {
				loop: true,
				autoplay: {
					delay: 3000,
					disableOnInteraction: false,
				},
				pagination: {
					el: '.swiper-pagination',
					type: 'fraction',
					renderFraction: function (currentClass, totalClass) {
					return '<span class="' + currentClass + '"></span>' +
							' / ' +
							'<span class="' + totalClass + '"></span>';
					},
				}
			},
		}
	},
	mounted() {
		this.getBanner()
    },
	methods: {
		getBanner () {
			let that = this
			get('/index.php/home/index/banner').then(res => {
				that.bannerData = res
            }).catch(function (error) {
                console.log(error)
            })
		},
	},
	watch: {}
};
</script>
<style lang="stylus" scoped>
.indexSwiper
	.swiper	
		position relative
		.swiperBg
			position absolute;
			width 100%
			height 80%
			left 0px
			top 0px
			background-color #cad9ae
		.swiperImg
			>img 
				width 94%
				border-radius 6px
		.swiper-container
			top 15px
			.swiper-pagination
				width 40px
				background-color rgba(0, 0, 0, 0.4)
				text-align center
				padding 2px 5px
				border-radius 5px
				line-height 18px
				color #fff
				margin 0px 30px
</style>