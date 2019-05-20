<template>
	<!-- 首页 -->
	<div class="index">
		<div class="search-box">
			<div class="search">
				<div class="header"><img src="../../assets/img/nav.jpg" alt=""></div>
				<div class="input">阿迪达斯</div>
				<div class="tongzhi"><img src="../../assets/img/tz.png" alt=""><span>10</span></div>
			</div>
		</div>
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
			get('http://www.xfengle.com/index.php/home/index/banner').then(res => {
				that.bannerData = res
            }).catch(function (error) {
                console.log(error)
            })
		},
		initSwiper () {
			this.swiperOption = {
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
			}
		}
	},
	watch: {}
};
</script>
<style lang="stylus" scoped>
.index
	>.search-box
		position sticky
		width 100%
		top 0
		z-index 9
		left 0
		>.search
			display flex
			align-items center
			background-color #cad9ae
			padding 0 15px
			height 70px
			>.header
				>img
					width 50px
					border-radius 100%
			>.input
				flex: 1
				background-color #fff
				border-radius 20px
				text-align left 
				line-height 35px
				padding 0 34px
				margin 0 10px
				background-image url('../../assets/img/sc.png')
				background-size 15px
				background-position 10px 50%
				background-repeat no-repeat
			>.tongzhi
				position: relative;
				>img
					width 30px
				>span 
					position absolute
					width 18px
					height 18px
					border-radius 100%
					background-color red
					color #fff
					top -8px
					right -10px
					text-align center
					line-height .48rem
	.swiper	
		position relative
		.swiperBg
			position absolute;
			width 100%
			height 80%
			left 0px
			top 0px
			background-color rgb(245, 219, 226)
		.swiperImg
			>img 
				width 94%
				border-radius 10px
		.swiper-container
			top 15px
			.swiper-pagination
				width 40px
				background-image url('../../assets/img/z_banner_page.png')
				text-align center
				padding 2px 5px
				border-radius: 10px;
				background-repeat no-repeat
				background-size 100% 100%
				line-height 18px
				color #fff
				margin 0px 30px
</style>