<template>
	<!-- 商品左滑动卡片 -->
    <div>
        <div class="indexLeftscroll">
            <div class="mian">
                <div class="topName">
                    <div>今日必抢</div>
                    <div class="tip">高品质爆款抢先不断</div>
                </div>
                <div class="imgBg"><img  src="../../assets/img/index/111.jpg" alt=""></div>
                <div class="container">
                    <swiper :options="swiperOption" class="swiperBox">
                        <swiper-slide v-for="(item,index) in listData" :key="index" class="swiperB">
                            <div class="list">
                                <div class="img"><img src="../../assets/img/index/2222.jpg" alt=""></div>
                                <div class="name">Under Armour/安德玛 男士高尔夫短袖 4色 g1</div>
                                <div class="money">
                                    <div>¥399.00</div>
                                    <div class="vip"></div>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide class="swiperB">
                            <div class="list more">
                                <img src="../../assets/img/index/all2.png" alt="">
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
            <div class="mian">
                <div class="imgBg"><img  src="../../assets/img/index/111.jpg" alt=""></div>
                <div class="container">
                    <nut-scroller>
                        <div slot="list" class="listItem" v-for="(item, index) of listData" :key="index">
                            <div class="list">
                                <div class="img"><img src="../../assets/img/index/2222.jpg" alt=""></div>
                                <div class="name">Under Armour/安德玛 男士高尔夫短袖 4色 g1</div>
                                <div class="money">
                                    <div>¥399.00</div>
                                    <div class="vip"></div>
                                </div>
                            </div>
                        </div>
                        <slot slot="more" class="listItem">
                            <div class="list more">
                                <img src="../../assets/img/index/all2.png" alt="">
                            </div>
                        </slot>
                    </nut-scroller>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { get } from '@/axiosApi'
export default {
	name: "indexLeftscroll",
	components: {
		swiper,
        swiperSlide
	},
	props: [],
	data () {
		return {
            listData: new Array(7),
            img: 'http://shop.xfengle.com//Uploads/./2018/08/23/5b7ea9sb001d24.jpg',
            swiperOption: {
                slidesPerView: 3.3,
				scrollbar: {
                    el: '.swiper-scrollbar',
                    hide: false,
                },
            },
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
.navBox
    display flex
    align-items center
    .navHeader
        flex 1
        text-align left 
        .pz
            color $color
            font-size 16px
            line-height 1
            .name
                padding 5px 0
            .list
                display flex
                margin-top 5px
                align-items center
                .tip
                    display flex
                    color #333
                    margin-right 2px
                    align-items center
                    flex 1
                    font-size 12px
                    img 
                        width 16px
                        margin-right 5px
                        display block
    .btn
        .cha
            background-color #b29e7d
            border-radius $border-radius
            color #ffffff
            padding 2px 8px
            margin-top 2px
.swiperBox
    margin-top 10px
    border-radius $border-radius
    display flex
    >>>.swiper-scrollbar
        width 20%
        background #aba6a67a
        left 50%
        transform translate(-50%)
        bottom 8px
        height 3px
        .swiper-scrollbar-drag
            background-color $background-color
.navBtnbox
    .navBtn
        display flex
        align-items center
        flex-wrap wrap
        justify-content center
        .list
            flex 0 0 20%
            margin-bottom 10px
            img
                width 50px
                border-radius 100%
                display block
                margin auto auto 5px auto
.mian
    margin-bottom 10px
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
    .imgBg
        min-height 30px
        img
            width 100%
            display block
    .container
        display flex
        align-items: center
        width 100%
        overflow-x scroll
        margin-top -30px
        -webkit-overflow-scrolling touch
        .listItem
            &:first-child
                margin-left 10px
                .list
                    padding-left 10px
                    border-radius $border-radius 0 0 $border-radius
.swiperB
    &:first-child
        margin-left 10px
        .list
            padding-left 10px
            border-radius $border-radius 0 0 $border-radius
.list
    border none
    border-right none
    padding 10px 0 10px 10px
    background-color #fff
    height 165px
    .img
        width 100px
        height 100px
        display flex
        img
            width 100px
            height 100px
            display block
            border-radius $border-radius
            margin auto
        img[lazy=loading] 
            width 20px
            height 20px
    .name
        overflow hidden
        text-overflow ellipsis
        display -webkit-box
        -webkit-line-clamp 2
        -webkit-box-orient vertical
        margin 5px 0
        line-height 1.5
    .money
        color $color
        font-size 14px
        font-weight bold
        background-color #fff
        display flex
        align-items center
        justify-content center
        line-height 1
        margin-top 10px
        .vip
            background-image url('../../assets/img/index/vip.png')
            background-repeat no-repeat
            background-size 100%
            width 25px
            height 14px
            margin-left 5px
.more
    margin-right 20px
    border-radius 0 $border-radius $border-radius 0
    padding 10px 0 10px 0
    img
        width 100%
        height 100%
        display block
</style>