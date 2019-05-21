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
		<indexSwiper></indexSwiper>
        <indexNav></indexNav>
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
export default {
	name: "index",
	components: {
		swiper,
        swiperSlide,
        indexNav,
        indexSwiper
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
</style>