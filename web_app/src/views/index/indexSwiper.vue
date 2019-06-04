<template>
	<!-- 轮播 -->
	<div>
        <div class="indexSwiper">
            <div class="swiper">
                <div class="swiperBg"></div>
                <van-swipe :autoplay="3000" @change="onChange">
                    <van-swipe-item v-for="(image, index) in bannerData" :key="index" class="swiperImg">
                        <img v-lazy="$imgUrl + image.img" />
                    </van-swipe-item>
                    <div class="custom-indicator" slot="indicator">
                        {{ current + 1 }} / {{bannerData.length}}
                    </div>
                </van-swipe>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import 'swiper/dist/css/swiper.css'
import { Swipe, SwipeItem } from 'vant'
import { get,post } from '@/axiosApi'
export default {
	name: "index",
	components: {
        [Swipe.name]: Swipe,
        [SwipeItem.name]: SwipeItem,
	},
	props: [],
	data () {
		return {
            bannerData: [],
            current: 0
		}
	},
	mounted() {
        this.getBanner()
    },
	methods: {
        onRouter (pathUrl,id) {
            this.$router.push({
				path: pathUrl,
				query: {
                    id: id
				}
			})
        },
		getBanner () { // 获取banner数据
			let that = this
			get('/index.php/home/index/banner').then(res => {
				that.bannerData = res
            }).catch(function (error) {
                console.log(error)
            })
        },
        onChange(index) {
            this.current = index;
        }
	},
	watch: {}
};
</script>
<style lang="stylus" scoped>
.swiper	
    position relative
    height 160px
    padding-top 15px
    .swiperBg
        position absolute
        width 100%
        height 80%
        left 0
        top 0
        background-color #1a1a1a
    .swiperImg
        >img 
            width 92%
            height 160px
            border-radius 3px
    >>>.custom-indicator
            position absolute
            bottom 10px
            left 20px
            width 40px
            background-color rgba(0, 0, 0, 0.4)
            text-align center
            padding 5px 5px
            border-radius 3px
            line-height 1
            color #fff
</style>