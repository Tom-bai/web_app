<template>
	<!-- 轮播 -->
	<div>
        <div class="indexSwiper">
            <div class="search-box" :class="topSearch?'toFixed':''">
                <div class="search" id="search" :class="topSearch?'topSearch':''">
                    <div class="header"><img src="../../assets/img/nav.jpg" alt=""></div>
                    <div class="input">阿迪达斯</div>
                    <div class="tongzhi">
                        <span class="text">消息</span>
                        <span class="num">9</span>
                    </div>
                </div>
            </div>
            <div class="swiper topPdding">
                <div class="swiperBg"></div>
                <swiper :options="swiperOption" v-if="bannerData.length>0">
                    <swiper-slide v-for="(slide, index) in bannerData" :key="index" class="swiperImg">
                        <img :src="imgUrl + slide.img" :alt="slide.alt">
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
            </div>
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
            topSearch: false,
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
        window.addEventListener('scroll', this.handleScroll)
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll)
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
        handleScroll() {
            let that = this
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
            if (scrollTop > 65) {
                this.topSearch = true
            } else {
                this.topSearch = false
            }
        },
	},
	watch: {}
};
</script>
<style lang="stylus" scoped>
.indexSwiper
    .search-box
        .search
            display flex
            align-items center
            padding 0 15px
            height 65px
            background-color #000
            .header
                img
                    width 30px
                    border-radius 100%
                    display block
            .input
                flex: 1
                background-color #fff
                border solid 1px #fff
                border-radius 20px
                text-align left 
                line-height 28px
                padding 0 34px
                margin 0 10px
                background-image url('../../assets/img/sc.png')
                background-size 15px
                background-position 10px 50%
                background-repeat no-repeat
            .tongzhi
                position relative
                width 26px
                height 40px
                background-image url('../../assets/img/tz.png')
                background-size 22px
                background-repeat no-repeat
                background-position 50% 0
                .text 
                    font-size 12px
                    position absolute
                    width 100%
                    left 0
                    bottom 0
                    color #fff
                .num 
                    height 18px
                    min-width 8px
                    padding 0 5px
                    position absolute
                    border-radius 10px
                    line-height 18px
                    background-color $background-color
                    color #fff
                    top -8px
                    right -8px
                    text-align center
                    font-size 12px
        .topSearch
            background-color #fff
            .input
                border solid 1px $color
                background-image url('../../assets/img/scH.png')
            .tongzhi
                background-image url('../../assets/img/tzH.png')
                .text
                    color $color
    .toFixed
        position fixed
        width 100%
        top 0
        z-index 99
        left 0
	.swiper	
		position relative
		.swiperBg
			position absolute;
			width 100%
			height 80%
			left 0px
			top 0px
			background-color #1a1a1a
		.swiperImg
			>img 
				width 94%
				border-radius 3px
		.swiper-container
			top 15px
			.swiper-pagination
				width 40px
				background-color rgba(0, 0, 0, 0.4)
				text-align center
				padding 2px 5px
				border-radius 3px
				line-height 18px
				color #fff
				margin 0px 30px
</style>