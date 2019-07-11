<template>
	<!-- 会员中心 -->
	<div>
        <div class="vip">
            <div class="vipCard">
                <div class="vpiBg"><img src="../../assets/img/vip/vipbg.png" alt=""></div>
                <div class="kaiBtn">立即开通</div>
                <div class="tipBottom">
                    <div class="logo"></div>
                    <div class="tip">按去年用户消费计算，开卡后一年预计省 </div>
                    <div class="iocn"></div>
                </div>
            </div>
            <div class="vipNav">
                <div class="header" @click="onShowVipNav">
                    <div class="text">专属16大特权</div>
                    <div class="iocn" :class="showVipNav?'active':''"></div>
                </div>
                <div v-if="showVipNav">
                    <div class="navBox">
                        <div class="name"><span>划算</span></div>
                        <div class="listbox">
                            <div class="list" v-for="item in navData">
                                <div class="listImg"><img src="../../assets/img/vip/list.png" alt=""></div>
                                <div class="listText">
                                    <div class="name">9折/96折</div>
                                    <div class="tip">专享折扣</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="navBox">
                        <div class="name"><span>划算</span></div>
                        <div class="listbox">
                            <div class="list" v-for="item in navData">
                                <div class="listImg"><img src="../../assets/img/vip/list.png" alt=""></div>
                                <div class="listText">
                                    <div class="name">9折/96折</div>
                                    <div class="tip">专享折扣</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="navBox">
                        <div class="name"><span>划算</span></div>
                        <div class="listbox">
                            <div class="list" v-for="item in navData">
                                <div class="listImg"><img src="../../assets/img/vip/list.png" alt=""></div>
                                <div class="listText">
                                    <div class="name">9折/96折</div>
                                    <div class="tip">专享折扣</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="swipeBox">
                <div class="name">今日活动</div>
                <div class="img"><img src="../../assets/img/vip/laba.png" alt=""></div>
                <div class="list">
                    <van-swipe :autoplay="3000" vertical :show-indicators="false">
                        <van-swipe-item>第1条公告第1条公告第1条公告第1条公告第1条公告第1条公告</van-swipe-item>
                        <van-swipe-item>第2条公告第1条公告第1条公告第1条公告第1条公告第1条公告</van-swipe-item>
                        <van-swipe-item>第3条公告第1条公告第1条公告第1条公告第1条公告第1条公告</van-swipe-item>
                        <van-swipe-item>第4条公告第1条公告第1条公告第1条公告第1条公告第1条公告</van-swipe-item>
                    </van-swipe>
                </div>
            </div>
            <div class="banner"><img src="../../assets/img/vip/banner1.jpg" alt=""></div>
            <div class="nameNav"><img src="../../assets/img/vip/111.jpg" alt=""></div>
            <div class="swiper-container">
                <swiper :options="swiperOption" v-if="navData.length>0" class="swiperBox">
                    <swiper-slide v-for="(item,index) in navData" :key="index" class="swiperB">
                        <div class="topbox">
                            <div class="img"><img src="../../assets/img/vip/cwww.jpg" alt=""></div>
                            <div class="text">
                                <div class="name">澳洲热销防晒家庭装</div>
                                <div class="jindu"><span class="tip">已抢50%</span> <span class="bg" style="width:50%"></span></div>
                                <div class="vip">
                                    <div class="money">开通价 ¥89</div>
                                    <div class="buy">立即查看</div>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <!-- <swiper-slide>
                        <div class="swiper-slide">
                            <div class="topbox more_topbox">
                                <img src="img/more2.png" alt="">
                            </div>
                        </div>
                     </swiper-slide> -->
                </swiper>
            </div>
            <div class="nameNav"><img src="../../assets/img/vip/111.jpg" alt=""></div>
            <div class="gouWu">
                <div class="name">大额购物券 超￥320/年</div>
                <div class="mian">
                    <div class="container">
                        <div class="list" v-for="(item,index) in navData" :key="index">
                            <img src="../../assets/img/vip/2.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="fuLi">
                <div class="name">会员福利社 每周更新</div>
                <div class="mian">
                    <div class="container">
                        <div class="list" v-for="(item,index) in navData" :key="index">
                            <img src="../../assets/img/vip/viplist.png" alt="">
                        </div>
                        <div class="list">
                            <img src="../../assets/img/vip/123.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="goodFuli">
                <div class="topName">会员福利社 每周更新</div>
                <div class="mian">
                    <div class="container">
                        <div class="list" v-for="(list,index) in navData" :key="index" >
                            <div class="img"><img src="../../assets/img/vip/cwww.jpg" alt=""></div>
                            <div class="name">Under Armour/安德玛 男士高尔夫短袖 4色 g1</div>
                            <div class="money">
                                <div>¥599.00</div>
                            </div>
                            <div class="sheng">大象省20元</div>
                        </div>
                        <div class="list">
                            <img src="../../assets/img/index/all2.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <Like></Like>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import { Swipe, SwipeItem } from 'vant';
import { get,post } from '@/axiosApi'
import Like from '@/components/Like'
export default {
	name: "vip",
	components: {
        [Swipe.name]: Swipe,
        [SwipeItem.name]: SwipeItem,
        swiper,
        swiperSlide,
        Like
	},
	props: [],
	data () {
		return {
            showVipNav: false,
            navData: new Array(5),
            swiperOption: {
                direction: 'horizontal',
                spaceBetween : 15,
                slidesPerView : 1.2,
                // loop: true,
                initialSlide: 1,
                centeredSlides : true,
            },
        }
    },
    mounted() {
    },
	methods: {
        onShowVipNav () {
            this.showVipNav = !this.showVipNav
        },
    },
	watch: {}
};
</script>
<style lang="stylus" scoped>
.vip
    background-color #fff
    margin-bottom 70px
.vipCard
    margin 15px
    position relative
    .vpiBg
        img
            width 100%
            display block
    .kaiBtn
        background linear-gradient(270deg,#ffedbe,#ffe8aa)
        position absolute
        top 10px
        right 10px
        width 100px
        height 30px
        line-height 30px
        border-radius 20px
        font-weight 400
    .tipBottom
        position absolute
        bottom 40px
        left 0
        display flex
        align-items center
        width 100%
        color #ffefc4
        justify-content center
        .logo
            width 20px
            height 20px
            background-image url('../../assets/img/vip/logo2.png')
            background-size 100% 100%
        .tip
            flex 0 0 240px
            text-overflow ellipsis
            display -webkit-box
            -webkit-line-clamp 1
            -webkit-box-orient vertical
            overflow hidden
        .iocn
            width 18px
            height 18px
            background-image url('../../assets/img/vip/ioc2.png')
            background-size 100% 100%
.vipNav
    padding 15px 0
    background-color #fff
    .header
        display flex
        align-items center
        font-size 15px
        font-weight bold
        justify-content center
        .iocn
            width 15px
            height 15px
            background-image url('../../assets/img/vip/down.png')
            background-size 100% 100%
            margin-left 5px
            transform rotate(180deg)
        .active
            transform rotate(0deg)
.navBox
    display flex
    align-items center
    padding-top 15px
    .name
        flex 0 0 20px
        span
            width 12px
            display block
            border-right 1px dashed #c3c2c1
            color #c3c2c1
            padding 0 15px
    .listbox
        display flex
        align-items center
        flex-flow wrap
        flex 1
        padding 0 10px
        .list
            flex 1
            .listImg
                img 
                    width 40px
                    display block
                    margin auto
            .listText
                line-height 1
                .name
                    padding 5px 0
                .tip
                    color #999
.swipeBox
    display flex
    align-items center
    padding 0 15px
    .name
        font-size 16px
        font-weight 700
        flex 0 0 25%
        text-align center
    .img
        flex 0 0 20px
        margin-right 5px
        img 
            display block
            width 20px
    .list
        position relative
        flex 1
        height 35px
        >>>.van-swipe
            height 35px
            .van-swipe-item
                display -webkit-box
                -webkit-line-clamp 1
                -webkit-box-orient vertical
                overflow hidden
                line-height 35px
.banner
    img 
        width 100%
        display block
.nameNav
    img 
        width 100%
        display block
.swiper-container
    .swiperBox
        .swiperB
            .topbox
                display flex
                align-items center
                border solid 1px #f1f1f1
                border-radius $border-radius
                padding 10px
                background-color #fff
                .img
                    flex 0 0 80px
                    img 
                        width 100%
                        display block
                .text
                    flex 1
                    text-align left
                    padding 0 10px
                    .name
                        font-size 14px
                        overflow hidden
                        text-overflow ellipsis
                        display -webkit-box
                        -webkit-line-clamp 1
                        -webkit-box-orient vertical
                    .jindu
                        position: relative
                        width 100%
                        height 16px
                        padding 1px 5px
                        overflow-x hidden
                        font-size 10px
                        border-radius 8px
                        color #d2b268
                        text-align left
                        border 0.5px solid #f5e5be
                        margin 10px 0
                        .bg
                            position absolute
                            top 0
                            left 0
                            background-color #f5e5be
                            height 100%
                            z-index 1
                        .tip
                            position absolute
                            top 0
                            left 10px
                            height 100%
                            z-index 2
                            line-height 1.5
                    .vip
                        display flex
                        align-items center
                        .buy
                            background-image linear-gradient(90deg,#634f4f,#4e4040)
                            color #ffeac9
                            border-radius 20px
                            margin-left auto
                            padding 5px 10px
.gouWu
    .name
        line-height 35px
        font-size 14px
        font-weight 700
        text-align left
        padding 0 15px
    .mian
        margin-bottom 10px
        .container
            display flex
            align-items: center
            width 100%
            overflow-x scroll
            -webkit-overflow-scrolling touch
            &::-webkit-scrollbar 
                display:none
            .list
                flex 0 0 40%
                border none
                border-right none
                padding 10px 10px 10px 0
                background-color #fff
                height 70px
                &:first-child
                    margin-left 15px
                &:last-child
                    padding-right 15px
                img
                    width 100%
                    display block
                    box-shadow 0 2px 8px 0 hsla(0,0%,55%,.16)
.fuLi
    .name
        line-height 35px
        font-size 14px
        font-weight 700
        text-align left
        padding 0 15px
    .mian
        margin-bottom 10px
        .container
            display flex
            align-items: center
            width 100%
            overflow-x scroll
            -webkit-overflow-scrolling touch
            &::-webkit-scrollbar 
                display:none
            .list
                flex 0 0 40%
                border none
                border-right none
                padding 10px 10px 10px 0
                background-color #fff
                &:first-child
                    margin-left 15px
                &:last-child
                    padding-right 15px
                img
                    width 100%
                    display block
                    box-shadow 0 2px 8px 0 hsla(0,0%,55%,.16)
.goodFuli
    .topName
        line-height 35px
        font-size 14px
        font-weight 700
        text-align left
        padding 0 15px
    .mian
        margin-bottom 10px
        .imgBg
            min-height 30px
            background-color #fff
            img
                width 100%
                display block
                height 240px
        .container
            display flex
            align-items: center
            width 100%
            overflow-x scroll
            -webkit-overflow-scrolling touch
            &::-webkit-scrollbar 
                display:none
            .list
                flex 0 0 26%
                border none
                border-right none
                padding 10px 10px 10px 0
                background-color #fff
                &:first-child
                    margin-left 15px
                    border-radius $border-radius 0 0 $border-radius
                    padding-left 10px
                &:last-child
                    padding 10px 10px 10px 0
                    border-radius 0 $border-radius $border-radius 0
                    img
                        width 100%
                        background-color #fff
                        height 100%
                        margin-right 25px
                        border-radius $border-radius
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
                .name
                    overflow hidden
                    text-overflow ellipsis
                    display -webkit-box
                    -webkit-line-clamp 1
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
                    margin-top 5px
                    .vip
                        background-image url('../../assets/img/index/vip.png')
                        background-repeat no-repeat
                        background-size 100%
                        width 25px
                        height 14px
                        margin-left 5px
                .sheng
                    font-size 12px
                    color #333
                    padding 2px 8px
                    background-color #fedcb5
                    border-radius 10px
                    text-align center
                    display inline-block
                    margin-top 5px
</style>