<template>
    <!-- 招募VIP商品详情 -->
    <div class="ProductDetailsVIP">
        <div class="swiper">
            <van-swipe :autoplay="4000" @change="onChange">
                <van-swipe-item v-for="(image, index) in img" :key="index" class="swiperImg">
                    <img v-lazy="$imgUrl" />
                </van-swipe-item>
                <div class="custom-indicator" slot="indicator">
                    {{ current + 1}}/{{img.length}}
                </div>
            </van-swipe>
        </div>
        <div class="money">
            <div class="xian">¥399</div>
            <div class="yuan">市场价¥499</div>
        </div>
        <div class="conter">
            <div class="name">
                <div class="text">德国康巴赫第二代蜂窝无油烟不粘304不锈钢带彩盒炒锅不粘锅</div>
                <div class="shouCang">
                    <img src="../assets/img/like.png" alt="">
                    <div>收藏</div>
                </div>
            </div>
            <div class="desc">康巴赫（KBH），德国厨具品牌，第二代炒锅不粘钢纹延伸到锅沿，增加了不粘面积，锅沿发黄的问题得到改善，提手已经安装好，买回家就可以直接使用。茶色玻璃盖，耐脏又美观。带彩盒包装，送亲戚好友，高端大气上档次。</div>
        </div>
        <!-- 商品规格 -->
        <div class="peiSong">
            <div class="item">
                <div class="title">积&nbsp;&nbsp;&nbsp;分：</div>
                <div class="list">
                    <div class="text cuxiao">
                        <div class="name">下单即返300成长积分</div>
                    </div>
                </div>
            </div>
            <div class="item" @click="onAddressShow">
                <div class="title">配&nbsp;&nbsp;&nbsp;送：</div>
                <div class="list">
                    <div class="text">
                        <div class="name"><span>至</span><span class="weizhi"></span><span>{{city}}</span></div>
                    </div>
                    <div class="rightJ"></div>
                </div>
            </div>
        </div>
        <!-- 评论 -->
        <div class="pinLun" id="anchor-1">
            <div class="item">
                <div class="list" @click="onRouter('/MoreComments')">
                    <div class="text">
                        <div class="name">其他小伙伴们说<span>(0)</span></div>
                    </div>
                    <div class="rightJ">好评率(0)</div>
                </div>
            </div>
            <div class="container">
                <div class="list" v-for="(item,index) in img" :key="index">
                    <div class="two">
                        <div class="headerImg">
                            <div class="img"><img v-lazy="$imgUrl" alt=""></div>
                            <div class="name">qweqwe</div>
                        </div>
                        <div class="text">qweqwe</div>
                    </div>
                    <div class="twoImg">
                        <img v-lazy="$imgUrl" alt="">
                        <div class="tip">0张图</div>
                    </div>
                </div>
                <div class="list more">
                    <div class="pR" @click="onRouter('/MoreComments')">
                        <div class="moreText"><span>更多评论</span></div>
                        <div class="See">See more</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="jingXuan" id="anchor-2">
            <div class="container">
                <div class="list" v-for="(item,index) in img" :key="index" @click="onRouter('/ProductDetails')">
                    <div class="img"><img v-lazy="$imgUrl" alt=""></div>
                    <div class="name">秀域纤体美容套餐  爱自己 美纤体 面部身材全面管理 秀出自己  域见好身材</div>
                    <div class="money">
                        <div>¥99</div>
                        <!-- <div class="vip"></div> -->
                    </div>
                </div>
                <div class="list">
                    <img src="../assets/img/index/all2.png" alt="">
                </div>
            </div>
        </div>
        <div class="detailsImg" id="anchor-3">
            <div class="topName">商品信息</div>
            <div  class="descInfoBox">
                <div class="descInfo">
                    <div class="descTip">
                        <div  v-for="(item,index) in img" :key="index">asdasd</div>
                    </div>
                    <div class="descCont">
                        <div v-for="(item,index) in img" :key="index">awewasd</div>
                    </div>
                </div>
            </div>
            <div class="shangpinImg"></div>
        </div>
        <!-- 选择地址 -->
        <nut-actionsheet :is-visible="addressShow" @close="onAddressShow" :isClickCloseMask="false">
            <van-area :area-list="areaList" slot="custom" class="myArea" confirm-button-text="完成" @confirm="onConfirm" @cancel="onCancel" />
        </nut-actionsheet>
        <!-- 底部选项卡 -->
        <van-goods-action class="myBottom">
            <van-goods-action-mini-btn
                icon-class="indexIocnImg"
                class="indexIocn"
                text="客服"
            />
            <van-goods-action-big-btn
                class="nowBuy"
                text="立即购买"
            />
        </van-goods-action>
    </div>
</template>

<script>
import { Swipe, SwipeItem,Area,GoodsAction,GoodsActionBigBtn,GoodsActionMiniBtn,Stepper,Popup } from 'vant'
import { get,post,toast } from '@/axiosApi'
import AddressInfo from '../assets/js/area'
export default {
	name: 'ProductDetailsVIP',
	props: {
		msg: String
    },
    components: {
        [Swipe.name]: Swipe,
        [SwipeItem.name]: SwipeItem,
        [Area.name]: Area,
        [GoodsAction.name]: GoodsAction,
        [GoodsActionMiniBtn.name]: GoodsActionMiniBtn,
        [GoodsActionBigBtn.name]: GoodsActionBigBtn,
        [Stepper.name]: Stepper,
        [Popup.name]: Popup,
	},
	data () {
		return {
            city: '北京市 北京市 东城区',
            img: new Array(5),
            current: 0,
            addressShow: false,
            areaList: AddressInfo,

		}
	},
	methods: {
        onChange(index) {
            this.current = index;
        },
        onAddressShow() { // 选择地址
            this.scrollTop = document.scrollingElement.scrollTop
            document.body.classList.add('scrollFixed')
            document.body.style.top = - this.scrollTop + 'px'
            this.addressShow = !this.addressShow
        },
        onConfirm (data) { // 地址确定
            document.body.classList.remove('scrollFixed')
            document.scrollingElement.scrollTop = this.scrollTop
            this.addressShow = !this.addressShow
            this.city = data[0].name + ' ' + data[1].name + ' ' + data[2].name 
            
        },
        onCancel () { // 地址取消
            document.body.classList.remove('scrollFixed')
            document.scrollingElement.scrollTop = this.scrollTop
            this.addressShow = !this.addressShow
        },
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.swiper
    position relative
    .van-swipe
        background-color #fff
        .swiperImg
            >img 
                width 100%
                height 360px
                border-radius 3px
                display block
        .custom-indicator
            position absolute
            bottom 20px
            left 50%
            width 40px
            background-color rgba(0, 0, 0, 0.4)
            text-align center
            padding 5px 5px
            border-radius 3px
            line-height 1
            color #fff
            transform translate(-50%)
            font-size 14px
.money
    display flex
    align-items center
    line-height 1
    background-color #fff
    padding 10px 15px
    .xian
        font-size 18px
        color $color
    .yuan
        font-size 12px
        color #999
        text-decoration line-through
        margin-left 10px
.conter
    padding 0 15px
    background-color #fff
    text-align left
    .name
        display flex 
        .text
            font-size 16px
            font-weight 700
            color #1a1a1a
        .shouCang
            font-size 12px
            flex 0 0 50px
            text-align center
            >img 
                width 18px
                display block
                margin auto auto 5px auto
    .desc
        font-size 12px
        color #999
        padding 15px 0
        line-height 1.3
.peiSong
    padding 0 15px
    text-align left
    background-color #fff
    margin-top 10px
    .item
        display flex
        align-items center
        .title
            font-size 13px
        .list
            display flex
            align-items center
            text-align left 
            border-bottom solid 1px #f1f1f1
            flex 1
            font-size 12px
            margin-left 5px
            padding 12px 0
            .text
                flex 1
                font-size 12px
                .weizhi
                    background-image url('../assets/img/weizhi.png')
                    width 20px
                    height 20px
                    background-size 100%
                .name
                    color #333
                    display flex
                    align-items center
                    .listName
                        margin-right 5px
                .tip
                    margin-top 4px
                    color #666
                    display flex
                    flex-wrap wrap
                    span
                        margin-right 10px
                        position relative
                        padding-left 8px
                        margin-bottom 5px
                        &:after
                            position absolute
                            content: ""
                            top 50%
                            left 0
                            width 6px
                            height 6px
                            font-size 20px
                            background-color $background-color
                            border-radius 100%
                            transform translate(-50%,-50%)
            .cuxiao
                .name
                    color $color
            .rightJ
                background-image url('../assets/img/moreDD.png')
                width 35px
                height 8px
                background-size 100%
                background-position 50%
                background-size 45% 75%
                background-repeat no-repeat
                flex 0 0 40px
.pinLun
    text-align left
    background-color #fff
    margin-top 10px
    .item
        display flex
        align-items baseline
        padding 0 15px
        .title
            font-size 13px
        .list
            display flex
            align-items center
            text-align left 
            border-bottom solid 1px #f1f1f1
            flex 1
            font-size 14px
            margin-left 5px
            padding 12px 0
            .text
                flex 1
                .name
                    color #333
                    display flex
                    align-items center
            .rightJ
                background-image url('../assets/img/rightT.png')
                background-position 100%
                background-size 6px
                background-repeat no-repeat
                flex 0 0 120px
                text-align right
                padding-right 15px
                color $color
    .container
        display flex
        align-items: center
        width 100%
        overflow-x scroll
        -webkit-overflow-scrolling touch
        &::-webkit-scrollbar 
            display:none
        .list
            flex 0 0 240px
            border none
            border-right none
            padding 10px
            margin 10px 0
            background-color #fff
            height 100px
            border-right 1px dashed #e5e5e5
            display flex
            align-items center
            .two
                flex 1
                .headerImg
                    display flex
                    align-items center
                    .img
                        width 40px
                        height 40px
                        img 
                            width 100%
                            height 40px
                            display block
                            border-radius 100%
                    .name
                        flex 1
                        color #666
                        margin 0 10px
                        overflow hidden
                        text-overflow ellipsis
                        display -webkit-box
                        -webkit-line-clamp 1
                        -webkit-box-orient vertical
                .text
                    margin-top 10px
                    overflow hidden
                    text-overflow ellipsis
                    display -webkit-box
                    -webkit-line-clamp 3
                    -webkit-box-orient vertical
                    font-size 13px
                    color #333
            .twoImg
                flex 0 0 80px
                position relative
                img
                    width 100%
                    height 80px
                    display block
                    border-radius $border-radius
                .tip
                    position absolute
                    right 0
                    bottom 0
                    width 48px
                    height 17px
                    line-height 17px
                    text-align center
                    background rgba(0,0,0,.6)
                    color #fff
                    font-size 11px
        .more
            flex 0 0 100px
            text-align center
            margin 0 10px
            padding-right 15px
            .pR
                border solid 1px #ccc
                box-sizing border-box
                height 100px
                flex 1
                .moreText
                    span 
                        border-bottom 1px solid #ccc
                        font-size 13px
                        color $color
                        display inline-block
                        line-height 1.5
                        margin-bottom 5px
                        margin-top 30px
.jingXuan
    text-align left
    background-color #fff
    margin-top 10px
    .item
        display flex
        align-items center
        padding 0 15px
        border-bottom solid 1px #f1f1f1
        .list
            display flex
            align-items center
            text-align left 
            flex 1
            font-size 14px
            margin-left 5px
            padding 12px 0
            .box
                display flex
                align-items center
                color #fff
                text-align left
                .logo
                    width 50px
                    background-color #fff
                    height 50px
                    display flex
                    align-items center
                    >img 
                        width 100%
                        height 100%
                        display block
                        border-radius 100%
                .text
                    flex 1
                    overflow hidden
                    text-overflow ellipsis
                    white-space nowrap
                    padding-left 10px
                    .name
                        font-size 13px
                        color #333
                        font-weight 600
                        margin-bottom 10px
                        overflow hidden
                        text-overflow ellipsis
                        white-space nowrap
                    .tip
                        overflow hidden
                        text-overflow ellipsis
                        display -webkit-box
                        -webkit-box-orient vertical
                        -webkit-line-clamp 2
                        white-space initial
                        color #666
                        font-size 12px
                        .num
                            color $color
        .rightT
            font-size 12px
            color #333
            display flex
            position relative
            padding-left 15px
            &:after
                position absolute
                content: ""
                top 50%
                left 0
                background-color #333
                width 1px
                height 30px
                transform translate(-50%,-50%)
            .kefutwo
                margin-right 15px
                img
                    width 20px
                    display block
                    margin auto
                    padding-bottom 8px
            .fenxiang
                img
                    width 20px
                    display block
                    margin auto
                    padding-bottom 8px
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
            height 170px
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
                height 35px
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
                    background-image url('../assets/img/index/vip.png')
                    background-repeat no-repeat
                    background-size 100%
                    width 25px
                    height 14px
                    margin-left 5px
.detailsImg
    background-color #fff
    margin-top 10px
    .topName
        background-image url('../assets/img/detailsImg.jpg')
        height 35px
        width 100%
        background-size 100%
        font-size 14px
        font-weight 700
        display flex
        align-items center
        justify-content center
        background-position 100%
    .descInfoBox
        padding 0 15px
        .descInfo
            display flex
            align-items center
            border solid 1px #f1f1f1
            border-bottom: none;
            .descTip
                flex 0 0 100px
                text-align center
                color #666
                div 
                    padding 10px 0
            .descCont
                flex 1
                color #333
                text-align left
                border-left solid 1px #f1f1f1
                div 
                    padding 10px 10px
    .zhanKai
        border-top solid 1px #f1f1f1
        padding 10px 0
        margin 0 15px
        display flex
        align-items center
        justify-content center
        img 
            transform rotate(90deg)
            width 8px
            display block
            margin-left 8px
    .shouQi
        border-top solid 1px #f1f1f1
        padding 10px 0
        margin 0 15px
        display flex
        align-items center
        justify-content center
        img 
            transform rotate(270deg)
            width 8px
            display block
            margin-left 8px
    .shangpinImg
        margin-top 10px
        img
            width 100%
            display block
            margin auto
.myBottom
    border-top solid 1px #f1f1f1
    .indexIocn
        font-size 12px
        font-family PingFangSC-Medium
        color #666
        .indexIocnImg
            background-image url('../assets/img/kefu2.png')
            width 20px
            height 20px
            background-size 100%
            background-repeat no-repeat
            margin-bottom 2px
    .likeIocn
        font-size 12px
        font-family PingFangSC-Medium
        .likeIocnImg
            background-image url('../assets/img/like.png')
            width 18px
            height 20px
            background-size 100%
            background-repeat no-repeat
            margin-bottom 2px
        .likeIocnImgs
            background-image url('../assets/img/likeH.png')
            width 18px
            height 20px
            background-size 100%
            background-repeat no-repeat
            margin-bottom 2px
    .cartIocn
        font-size 12px
        font-family PingFangSC-Medium
        .cartIocnImg
            background-image url('../assets/img/detailsCard.png')
            width 20px
            height 20px
            background-size 100%
            background-repeat no-repeat
            margin-bottom 2px
    .nowCard
        background-color #404040
        font-size 15px
        font-weight normal
        font-family Arial 
        border none
    .nowBuy
        background-image linear-gradient(225deg,#ff3163 15%,$color 85%)
        font-size 15px
        font-weight normal
        font-family Arial 
</style>
