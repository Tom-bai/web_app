<template>
	<!-- 满件减活动 -->
    <div>
        <div class="indexManPinTuan">
            <div class="banner" v-if="dataBanner.img1"><img v-lazy="$imgUrl + 'Uploads/' + dataBanner.img.img"></div>
            <div class="topName">
                <div>热销</div>
                <!-- <div class="tip">4月9日</div> -->
            </div>
            <div class="swiper">
                <swiper :options="swiperOption" v-if="dataHotGoods.length>0">
                    <swiper-slide v-for="(slide, index) in dataHotGoods" :key="index" class="swiperImg">
                        <div class="list" v-for="(item, index) in slide" :key="index" @click="onRouter('/ProductDetails',item.id)">
                            <div class="img"><img :src="$imgUrl + item.img"></div>
                            <div class="name">{{item.title}}</div>
                            <div class="money">
                                <span class="tag">{{item.pnum}}人团</span>
                                <span class="num">¥{{(parseFloat(item.price) - parseFloat(item.s_price)).toFixed(2)}}</span>
                            </div>
                            <div class="yuanjia">¥{{item.price}}</div>
                        </div>
                    </swiper-slide>
                    <!-- <div class="swiper-pagination" slot="pagination"></div> -->
                </swiper>
            </div>
            <div class="bannerTitle" v-if="dataBanner.img1"><img v-lazy="$imgUrl + dataBanner.img1.img"></div>
            <div class="mainBox">
                <nut-infiniteloading @loadmore="onInfinite" :is-show-mod="true"  :is-loading="isLoading" :threshold="200" :has-more="isHasMore">
                    <div class="item" v-for="(item,index) in dataList" :key="index">
                        <div class="img"><img v-lazy="$imgUrl + item.img" alt=""></div>
                        <div class="text">
                            <div class="top">{{item.title}}</div>
                            <!-- <div class="tip">{{item.title}}</div> -->
                            <div class="yipin"><span class="tag">已拼{{item.pnum}}件</span></div>
                            <div class="money">
                                <div class="pM">
                                    <div>
                                        <span class="tag">{{item.pnum}}人团</span>
                                        <span class="num">¥{{(parseFloat(item.price) - parseFloat(item.s_price)).toFixed(2)}}</span>
                                    </div>
                                    <div class="danmai">单买价<span>¥{{item.price}}</span></div>
                                </div>
                                <div class="btnP" @click="onRouter('/ProductDetails',item.id)"><span>去拼团</span></div>
                            </div>
                        </div>
                    </div>
                </nut-infiniteloading>
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
            dataList: [],
            isHasMore: true,
            isLoading: false,
            limit: 1,
            dataBanner: [],
            dataHotGoods: [],
            bannerData: new Array(3),
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
        this.getData()
        this.getPinHotGoods()
        this.getPinHotGoods()
    },
    created(){
    },
    computed:{
    },
    beforeDestroy() {
        //组件销毁前需要解绑事件。否则会出现重复触发事件的问题
        this.$Bus.$off('navBtn');
    },
	methods: {
        group (array, subGroupLength) {
            let index = 0;
            let newArray = [];
            while(index < array.length) {
                newArray.push(array.slice(index, index += subGroupLength));
            }
            return newArray;
        },
        getPinHotGoods () { // 拼团热销
			let that = this
			get('/index.php/home/pin/pinHotGoods').then(res => {
                that.dataHotGoods = that.group(res,3)
            }).catch(function (error) {
                console.log(error)
            })
        },
        onInfinite () { // 全部
            let that = this
            if (that.isHasMore) {
                that.isLoading = true
                that.limit++
                that.getData()
            }
        },
        getBanner () { // 拼团banner横幅
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
        getData () { // 商品列表
            let that = this
            let params = {
                limit: that.limit,
            }
			get('/index.php/home/pin/pinGoods',params).then(res => {
                if (res.length == undefined) {
                    that.isLoading = false
                    that.isHasMore = false
                } else {
                    that.dataList = that.dataList.concat(res)
                    that.isLoading = false
                    that.isHasMore = true
                    that.myHasMore = true
                }
            }).catch(function (error) {
                console.log(error)
            })
        },
        onRouter (pathUrl,id) {
			this.$router.push({
				path: pathUrl,
				query: {
                    id: id
				}
			})
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
    border-radius $border-radius
    .swiperImg
        display flex
        align-items center
        background-color #fff
        border-radius $border-radius
        .list
            flex 0 0 29.5%
            text-align left 
            padding 10px 0 10px 10px
            .img
                >img 
                    width 100%
                    display block
                    border-radius $border-radius
            .name
                text-overflow ellipsis
                display -webkit-box
                -webkit-line-clamp 2
                -webkit-box-orient vertical
                overflow hidden
            .money
                color $color
                line-height 1
                margin 4px 0
                .tag
                    font-weight normal
                    margin-right 5px
                .num
                    font-size 16px
                    font-weight 700
            .yuanjia
                color #999
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
.bannerTitle
    margin-top 10px
    img 
        width 100%
        display block
.mainBox
    margin-top 10px
    padding 0 15px
    .item
        display flex
        align-items center
        background-color #fff
        justify-content space-between
        flex-wrap: wrap
        border-radius $border-radius
        margin-bottom 10px
        padding 10px 0
        border-radius $border-radius
        .img
            flex 0 0 100px
            padding 0 10px
            img 
                width 100%
                display block
                border-radius $border-radius
        .text
            flex 1
            text-align left 
            padding-right 10px
            .top
                font-weight 700
                color #000
                font-size 14px
                text-overflow ellipsis
                display -webkit-box
                -webkit-line-clamp 1
                -webkit-box-orient vertical
                overflow hidden
                margin-bottom 5px
            .tip
                font-weight 400
                color #000
                font-size 13px
                text-overflow ellipsis
                display -webkit-box
                -webkit-line-clamp 1
                -webkit-box-orient vertical
                overflow hidden
                margin  5px 0
            .yipin
                padding 5px 0
                .tag
                    color #fff
                    text-align center
                    padding 2px 8px
                    background-color #ff1e32
                    border-radius $border-radius
            .money
                display flex
                align-items center
                color $color
                .pM
                    margin 5px 0
                    .tag
                        font-weight normal
                        margin-right 5px
                    .num
                        font-size 16px
                        font-weight 700
                    .danmai
                        color #999
            .btnP
                color #fff
                text-align center
                background-color $background-color
                border-radius $border-radius
                margin-left auto
                padding 4px 10px
</style>