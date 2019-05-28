<template>
	<!-- 满件减活动 -->
    <div>
        <div class="indexManPinTuan">
            <div class="banner" v-if="dataBanner.img1"><img v-lazy="$imgUrl + 'Uploads/' + dataBanner.img.img"></div>
            <div class="topName">
                <div>今日必拼</div>
                <div class="tip">4月9日</div>
            </div>
            <div class="swiper">
                <swiper :options="swiperOption" v-if="bannerData.length>0">
                    <swiper-slide v-for="(slide, index) in bannerData" :key="index" class="swiperImg">
                        <div class="list">
                            <div class="img"><img :src="$imgUrl + slide.img" :alt="slide.alt"></div>
                            <div class="name">2盒 l Santen 参天 FX 银装清凉眼药水 12毫升/盒</div>
                            <div class="money">￥400</div>
                            <div class="yuanjia">￥600</div>
                        </div>
                        <div class="list">
                            <div class="img"><img :src="$imgUrl + slide.img" :alt="slide.alt"></div>
                            <div class="name">2盒 l Santen 参天 FX 银装清凉眼药水 12毫升/盒</div>
                            <div class="money">￥400</div>
                            <div class="yuanjia">￥600</div>
                        </div>
                        <div class="list">
                            <div class="img"><img :src="$imgUrl + slide.img" :alt="slide.alt"></div>
                            <div class="name">2盒 l Santen 参天 FX 银装清凉眼药水 12毫升/盒</div>
                            <div class="money">￥400</div>
                            <div class="yuanjia">￥600</div>
                        </div>
                        
                    </swiper-slide>
                    <!-- <div class="swiper-pagination" slot="pagination"></div> -->
                </swiper>
            </div>
        </div>
     </div>
</template>

<script>
// @ is an alias to /src
import { get } from '@/axiosApi'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
	name: "indexManPinTuan",
	components: {
        swiper,
        swiperSlide
	},
	props: [],
	data () {
		return {
            dataBanner: [],
            bannerData: [],
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
        this.geBanner()
        this.getBanners()
    },
    created(){
    },
    beforeDestroy() {
        //组件销毁前需要解绑事件。否则会出现重复触发事件的问题
        this.$Bus.$off('navBtn');
    },
	methods: {
        getBanners () { // 获取banner数据
			let that = this
			get('/index.php/home/index/banner').then(res => {
				that.bannerData = res
            }).catch(function (error) {
                console.log(error)
            })
        },
        onInfinite () { //加载更多
            let that = this
            if (that.myHasMore) {
                that.limit++
                that.isLoading = true
                that.myHasMore = false
                that.getDataJJ()
            }
        },
        geBanner () { // 拼团banner
            let that = this
            let params = {
                type: that.$route.query.id
            }
			get('/index.php/home/pin/pin_page',params).then(res => {
                that.dataBanner = res
            }).catch(function (error) {
                console.log(error)
            })
        },
        getDataJJ () { // 商品列表 满件减
            // let that = this
            // let params = {
            //     limit: that.limit,
            //     id: that.getNavId
            // }
			// get('/index.php/home/index/manjian',params).then(res => {
            //     if (res.length == undefined) {
            //         that.isLoading = false
            //         that.isHasMore = false
            //     } else {
            //         that.dataList = that.dataList.concat(res)
            //         that.isLoading = false
            //         that.isHasMore = true
            //         that.myHasMore = true
            //     }
            // }).catch(function (error) {
            //     console.log(error)
            // })
        },
	},
	watch: {}
};
</script>
<style lang="stylus" scoped>
.banner
    img 
        width 100%
        display block
.topName
    display flex
    align-items center
    font-size 16px
    font-weight bold
    height 50px
    padding 0 15px
    .tip
        margin-left 15px
        color #999
        font-size 12px
        font-weight normal
.swiper	
    position relative
    min-height 160px
    padding 0 15px
    .swiperImg
        display flex
        align-items center
        background-color #fff
        border-radius $border-radius
        .list
            flex 0 0 33.333%
            .img
                >img 
                    width 100%
    >>>.swiper-container
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