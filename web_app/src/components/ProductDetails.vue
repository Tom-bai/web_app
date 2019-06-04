<template>
	<div>
		<!-- <nut-tabbar class="Bset" @tab-switch="tabSwitch" :bottom="true" :tabbarList="tabList"></nut-tabbar> -->
        <div class="ProductDetails" v-if="goodsInfo.goods">
            <div class="header">
                <div class="name" :class="topIndex == index?'active':''" v-for="(item,index) in topName" @click="onTopNav(index)">{{item}}</div>
            </div>
            <div class="swiper" id="anchor-0">
                <van-swipe :autoplay="4000">
                    <van-swipe-item v-for="(image, index) in goodsInfo.goods.more_img" :key="index" class="swiperImg">
                        <img v-lazy="$imgUrl + image" />
                    </van-swipe-item>
                </van-swipe>
            </div>
            <div class="moneyDetaild">
                <div class="money">
                    <div><span class="moneyIoc">¥</span>{{goodsInfo.goods.price}}</div>
                    <div class="yuan"><span class="moneyIoc">¥</span>{{goodsInfo.goods.member_price}}</div>
                </div>
                <div class="openVip">
                    <div class="cardName">
                        <div class="tip">
                            <div class="vipImg"><img src="../assets/img/detailsVip.png" alt=""></div>
                            <div>会员推广赚：
                                <span class="num" v-if="goodsInfo.goods.member_gift > 0">¥{{goodsInfo.goods.team_price}}元</span>
                                <span class="num" v-else><img src="../assets/img/noVip.png" alt=""></span>
                            </div> 
                        </div>
                        <div class="tipText" v-if="goodsInfo.goods.member_gift > 0">含会员96折</div> 
                    </div>
                    <div class="cardBtn"><span>立即开卡</span></div>
                </div>
                <div class="textBox">
                    <h4 class="name">{{goodsInfo.goods.title}}</h4>
                    <!-- <div class="tip">{{goodsInfo.goods.des}}</div> -->
                </div>
            </div>
            <div class="peiSong">
                <div class="item" @click="onHiddenActionSheet">
                    <div class="title">请选择：</div>
                    <div class="list">
                        <div class="text">
                            <div class="name" v-if="kuanshiActive || kuanshiActives">{{kuanshiActive}} {{kuanshiActives}}</div>
                            <div class="name" v-else>颜色 尺码</div>
                        </div>
                        <div class="rightJ"></div>
                    </div>
                </div>
                <div class="item" v-if="goodsInfo.goods.pro_des">
                    <div class="title">促&nbsp;&nbsp;&nbsp;销：</div>
                    <div class="list">
                        <div class="text cuxiao">
                            <div class="name">{{goodsInfo.goods.pro_des}}</div>
                        </div>
                        <div class="rightJ"></div>
                    </div>
                </div>
                <div class="item" @click="onAddressShow">
                    <div class="title">配&nbsp;&nbsp;&nbsp;送：</div>
                    <div class="list">
                        <div class="text">
                            <div class="name"><span>至</span><span class="weizhi"></span><span>{{city}}</span></div>
                            <div class="tip">24:00前完成支付，预计6月7日(周五)送达</div>
                        </div>
                        <div class="rightJ"></div>
                    </div>
                </div>
                <div class="item">
                    <div class="title">运&nbsp;&nbsp;&nbsp;费：</div>
                    <div class="list">
                        <div class="text">
                            <div class="tip">{{goodsInfo.goods.y_price == 0?'免运费': goodsInfo.goods.y_price}}</div>
                        </div>
                        <div class="rightJ"></div>
                    </div>
                </div>
                <div class="item">
                    <div class="title">服&nbsp;&nbsp;&nbsp;务：</div>
                    <div class="list">
                        <div class="text">
                            <div class="tip">
                                <span v-for="(item,index) in goodsInfo.goods.fuwu" :key="index">{{item}}</span>
                            </div>
                        </div>
                        <div class="rightJ"></div>
                    </div>
                </div>
            </div>
            <div class="pinLun" id="anchor-1">
                <div class="item">
                    <div class="list">
                        <div class="text">
                            <div class="name">其他小伙伴们说(412)</div>
                        </div>
                        <div class="rightJ"></div>
                    </div>
                </div>
                <div class="container">
                    <div class="list">
                        <div class="headerImg">
                            <div class="img"><img v-lazy="$imgUrl" alt=""></div>
                            <div class="name">y***9</div>
                        </div>
                        <div class="text">Under Armour/安德玛 男士高尔夫短袖 4色 g1</div>
                    </div>
                    <div class="list">
                        <div class="headerImg">
                            <div class="img"><img v-lazy="$imgUrl" alt=""></div>
                            <div class="name">y***9</div>
                        </div>
                        <div class="text">Under Armour/安德玛 男士高尔夫短袖 4色 g1</div>
                    </div>
                    <div class="list">
                        <div class="headerImg">
                            <div class="img"><img v-lazy="$imgUrl" alt=""></div>
                            <div class="name">y***9</div>
                        </div>
                        <div class="text">Under Armour/安德玛 男士高尔夫短袖 4色 g1</div>
                    </div>
                    <div class="list more">
                        <div class="pR">
                            <div class="moreText"><span>更多评论</span></div>
                            <div class="See">See more</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="jingXuan" id="anchor-2">
                <div class="item">
                    <div class="list">
                        <div class="box">
                            <div class="logo"><img src="../assets/img/index/indexNewUp/nav.jpg" alt=""></div>
                            <div class="text">
                                <div class="name">欧蔓莎</div>
                                <div class="tip">我的大象店铺</div>
                            </div>
                        </div>
                    </div>
                    <div class="rightT">
                        <div class="kefutwo">
                            <img src="../assets/img/kefu2.png" alt="">
                            <div>客服</div>
                        </div>
                        <div class="fenxiang">
                            <img src="../assets/img/fenxiang.png" alt="">
                            <div>分享</div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="list" v-for="(item,index) in goodsInfo.goods_day">
                        <div class="img"><img v-lazy="$imgUrl + item.img" alt=""></div>
                        <div class="name">{{item.title}}</div>
                        <div class="money">
                            <div>¥{{item.price}}</div>
                            <div class="vip"></div>
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
                    <div class="descInfo" v-for="(item,index) in summaryListThree">
                        <div class="descTip">{{item.title}}</div>
                        <div class="descCont">{{item.name}}</div>
                    </div>
                </div>
                <div class="zhanKai" @click="onZhanKai" v-if="!onMore"><span>展开</span><img src="../assets/img/rightT.png" alt=""></div>
                <div class="shouQi" @click="onZhanKai" v-else><span>收起</span><img src="../assets/img/rightT.png" alt=""></div>
                <div class="shangpinImg">
                    <img src="../assets/img/index/2222.jpg" alt="">
                </div>
            </div>
        </div>
        <!-- 底部选项卡 -->
        <van-goods-action class="myBottom">
            <van-goods-action-mini-btn
                icon-class="indexIocnImg"
                class="indexIocn"
                text="主页"
                @click="onClickMiniBtn"
            />
            <van-goods-action-mini-btn
                icon-class="likeIocnImg"
                class="likeIocn"
                text="收藏"
                @click="onClickMiniBtn"
            />
            <van-goods-action-mini-btn
                icon-class="cartIocnImg"
                class="cartIocn"
                :info="cardNum"
                text="购物车"
                @click="onRouter('/cart')"
            />
            <van-goods-action-big-btn
                class="nowCard"
                text="加入购物车"
                @click="onBuyCard"
            />
            <van-goods-action-big-btn
                primary
                class="nowBuy"
                text="立即购买"
                @click="onClickBigBtn"
            />
        </van-goods-action>
        <!-- 选择地址 -->
        <nut-actionsheet :is-visible="addressShow" @close="onAddressShow" :isClickCloseMask="false">
            <van-area :area-list="areaList" slot="custom" class="myArea" confirm-button-text="完成" @confirm="onConfirm" @cancel="onCancel" />
        </nut-actionsheet>
        <!-- 选择规格 -->
        <nut-actionsheet :is-visible="isVisible" @close="onHiddenActionSheet" :isClickCloseMask="false">
            <div slot="custom" class="custom-wrap">
                <div class="actionsheetBox">
                    <div class="headerT" v-if="goodsInfo.goods">
                        <div class="img"><img v-lazy="$imgUrl + goodsInfo.goods.img" alt=""></div>
                        <div class="text">
                            <div class="money">¥{{goodsInfo.goods.price}}</div>
                            <div class="tip" v-if="kuanshiActive || kuanshiActives">{{kuanshiActive}} {{kuanshiActives}}</div>
                            <div class="tip" v-else>请选择 款式 颜色</div>
                            <div class="close" @click="onHiddenActionSheet"></div>
                        </div>
                    </div>
                    <div class="main" v-if="goodsInfo.attr">
                        <div class="xuanBox" v-if="goodsInfo.attr[0]">
                            <div class="name">{{goodsInfo.attr[0].name}}</div>
                            <div class="listBox">
                                <div class="item" :class="kuanshiActive == itemList?'active':''" v-for="(itemList,index) in goodsInfo.attr[0].value" :key="index" @click="onClickItemK(goodsInfo.attr[0],itemList)">{{itemList}}</div>
                            </div>
                        </div>
                        <div class="xuanBox" v-if="goodsInfo.attr[1]">
                            <div class="name">{{goodsInfo.attr[1].name}}</div>
                            <div class="listBox">
                                <div class="item" :class="kuanshiActives == itemList?'active':''" v-for="(itemList,index) in goodsInfo.attr[1].value" :key="index" @click="onClickItemKS(goodsInfo.attr[1],itemList)">{{itemList}}</div>
                            </div>
                        </div>
                        <div class="xuanBox">
                            <div class="name">选择数量</div>
                            <div class="listBox jinbuqi">
                                <van-stepper v-model="num" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="btn" @click="onHiddenActionSheet">确定</div>
            </div>
        </nut-actionsheet>
	</div>
</template>

<script>
import { Swipe, SwipeItem,Area,GoodsAction,GoodsActionBigBtn,GoodsActionMiniBtn,Stepper } from 'vant'
import { get,post,toast } from '@/axiosApi'
import AddressInfo from '../assets/js/area'
export default {
	name: 'ProductDetails',
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
	},
	data () {
		return {
            topName: ['商品','评价','推荐','详情'],
            topIndex: 0,
            goodsInfo: [],
            city: '北京市 北京市 东城区',
            images: [
                'https://img.yzcdn.cn/1.jpg',
                'https://img.yzcdn.cn/2.jpg'
            ],
            addressShow:false,
            areaList: AddressInfo,
            kuanShiData: new Array(6),
            kuanshiActive: '',
            kuanshiActives: '',
            YanSeActive: null,
            list: true,
            isVisible: false,
            addressShow: false,
            scrollTop: null,
            showList: 1,
            num: 1,
            summaryList: [ // 测试
                {
                    "title": "适用季节",
                    "name": "全季"
                },
                {
                    "title": "适用对象",
                    "name": "成人，家庭"
                },
                {
                    "title": "输出功率",
                    "name": "800W以下"
                },
                {
                    "title": "服务信息",
                    "name": "由商家从国内发货"
                }
            ],
            summaryListThree: [],
            onMore: false,
            cardNum: null
		}
    },
    mounted() {
        this.getGoodsInfo() 
    },
	methods: {
        getGoodsInfo () { // 获取商品详情
            let that = this
            let params = {
                id: that.$route.query.id
            }
			get('/index.php/home/goods/goodsInfo',params).then(res => {
                that.goodsInfo = res
                that.summaryListThree = that.summaryList.slice(0,3)
            }).catch(function (error) {
                console.log(error)
            })
        },
        onTopNav (index) {
            this.topIndex = index
            document.querySelector("#anchor-" + index).scrollIntoView(true)  
            document.scrollingElement.scrollTop = document.scrollingElement.scrollTop - 60
        },
        onZhanKai () {
            if (this.onMore) {
                this.summaryListThree = this.summaryList.slice(0,3)
            } else {
                this.summaryListThree = this.summaryList
            }
            this.onMore = !this.onMore
        },
		onRouter (pathUrl,id) {
			this.$router.push({
				path: pathUrl,
				query: {
                    id: id
				}
			})
        },
        onHiddenActionSheet() { // 选择款式
            if (this.isVisible) {
                document.body.classList.remove('scrollFixed')
                document.scrollingElement.scrollTop = this.scrollTop
            } else {
                this.scrollTop = document.scrollingElement.scrollTop
                document.body.classList.add('scrollFixed')
                document.body.style.top = - this.scrollTop + 'px'
            }
            this.isVisible = !this.isVisible
        },
        onClickItemK (value,items) {
            this.kuanshiActive = items
            // var list = this.goodsInfo.sku_list.split(",")
            // // let coinId = list.find(person => person.attrs == data2)
            // console.log(typeof(this.goodsInfo.sku_list)) 
            // console.log(typeof(list));
            // for(let i in list){
            //     console.log(list[i])
                
            // }
        },
        onClickItemKS (value,items) {
            this.kuanshiActives = items
        },
        onClickItemS (index) {
            this.YanSeActive = index
        },
        onClickMiniBtn() {
            console.log('点击图标')
        },
        onClickBigBtn() {
            console.log('点击按钮')
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
        onBuyCard () {
            let that = this
            let text
            if (that.kuanshiActive == '' || that.kuanshiActives == '') {
                toast('请选择规格')
                return false
            }
            if (that.goodsInfo.attr[0]) {
                text = `${that.goodsInfo.attr[0].name}|${that.kuanshiActive}`
            }
            if (that.goodsInfo.attr[0] && that.goodsInfo.attr[1]) {
                text = `${that.goodsInfo.attr[0].name}-${that.goodsInfo.attr[1].name}|${that.kuanshiActive},${that.kuanshiActives}`
            }
            let params = {
                goods_id: that.goodsInfo.goods.id, //商品id
                num: that.num, //数量
                attr_name: text, // 	商品规格(字符串，逗号隔开) 尺寸-颜色|1.8m（6英尺）床,心动"
                addcar: 1, // 添加到购物车
                fx_price: that.jianJia, //分享减价
                join_pt: that.pinTuan, // 加入拼团
                fq_pt: that.faPinTuan, //发起拼团
            }
            post('/index.php/home/cart/ajax_add_order',params).then(res => {
                toast('加入成功')
                that.cardNum = res.num
            }).catch(function (error) {
                console.log(error)
            })
        },
    },
    watch: {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.ProductDetails
    margin-bottom 60px
.header
    position sticky 
    left 0
    top 0
    display flex
    align-items center
    height 50px
    background-color #fff
    border-top solid 1px #f1f1f1
    border-bottom solid 1px #f1f1f1
    font-size 14px
    color #666
    z-index 9
    .name
        flex 1
        padding 8px 0
    .active
        position relative
        &:after
            position absolute
            content: ""
            bottom 0
            left 50%
            background-color $background-color
            width 18px
            height 1px
            transform translate(-50%)
    .rightJ
        background-image url('../assets/img/rightT.png')
        background-size 25px 25px
        height 25px
        background-repeat no-repeat
        transform rotate(180deg)
        background-position 50%
        background-size 14% 50%
        background-repeat no-repeat
        flex 0 0 40px
    .index
        background-image url('../assets/img/index.png')
        background-size 20px 18px
        height 25px
        background-repeat no-repeat
        background-position 50%
.swiper
    .swiperImg
        >img 
            width 100%
            height 360px
            border-radius 3px
.moneyDetaild
    padding 20px 15px 15px 15px
    text-align left
    background-color #fff
    .money
        color $color
        font-size 27px
        font-weight 700
        .moneyIoc
            font-size 14px
            font-weight normal
            margin-right 5px
    .yuan
        color #666
        font-size 20px
    .openVip
        display flex
        align-items center
        background-color #f7f7f7
        height 60px
        padding-left 15px
        border-radius $border-radius
        margin-top 10px
        .cardName
            flex 1
            .tip
                display flex
                align-items center
                .num
                    color $color
                    font-size 13px
                    img
                        width 20px
                        display inline-block
                .vipImg
                    img
                        display block
                        width 50px
                        height 18px
                        margin-right 10px
            .tipText
                font-size 12px
                color #999
                margin-top 5px
        .cardBtn
            flex 0 0 60px
            height 60px
            line-height 60px
            background #f3eee3
            text-align center
            span
                width 30px
                display inline-block
                line-height 1.3
                font-size 12px
                margin-top 16px
                position relative
                &:after
                    position absolute
                    content: ""
                    top 52%
                    right -15px
                    width 18px
                    height 18px
                    background-image url('../assets/img/right.png')
                    transform translate(0,-50%)
                    background-size 100%
    .textBox
        h4
            margin-bottom 10px
        .name
            text-overflow ellipsis
            display -webkit-box
            -webkit-line-clamp 2
            -webkit-box-orient vertical
            overflow hidden
            line-height 1.3
            letter-spacing 1px
            color #333
            font-weight 700
        .tip
            font-size 13px
            color #333
        .pinPai
            display flex
            align-items center
            background-color #f7f7f7
            height 36px
            padding 0px 10px
            border-radius $border-radius
            margin-top 10px
            .item
                display flex
                align-items center
                font-size 12px
                color #666
                margin-right 10px
                img 
                    width 18px
                    height 18px
                    display block
                    border-radius 100%
                    margin-right 6px
.peiSong
    padding 0 15px
    text-align left
    background-color #fff
    margin-top 10px
    .item
        display flex
        align-items baseline
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
.myArea
    >>>.van-picker__toolbar
            background-color #dedede
            padding 0 15px
    >>>.van-picker-column
            font-size 14px
            color #999
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
                width 20px
                height 20px
                background-size 100%
                background-position 50%
                background-size 14% 50%
                background-repeat no-repeat
                flex 0 0 40px
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
            .headerImg
                display flex
                align-items: center
                .img
                    width 40px
                    height 40px
                    img 
                        width 100%
                        display block
                        border-radius 100%
                .name
                    flex 1
                    color #666
            .text
                margin-top 10px
                overflow hidden
                text-overflow ellipsis
                display -webkit-box
                -webkit-line-clamp 3
                -webkit-box-orient vertical
                font-size 13px
                color #333
        .more
            flex 0 0 100px
            text-align center
            margin 0 10px
            padding-right 15px
            .pR
                border solid 1px #ccc
                box-sizing border-box
                height 100px
                .moreText
                    span 
                        border-bottom 1px solid #ccc
                        font-size 13px
                        color $color
                        display inline-block
                        line-height 1.5
                        margin-bottom 5px
                        margin-top 30px
[class*=van-hairline]::after
    border none
.myBottom
    border-top solid 1px #f1f1f1
    .indexIocn
        font-size 12px
        font-family PingFangSC-Medium
        color #666
        .indexIocnImg
            background-image url('../assets/img/detailsIndex.png')
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
.jingXuan
    text-align left
    background-color #fff
    margin-top 10px
    .item
        display flex
        align-items center
        padding 0 15px
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
                        display block
                        border-radius $border-radius
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
.tuiJian
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
            flex 1
            font-size 14px
            margin-left 5px
            padding 15px 0 2px 0 
            .text
                flex 1
                .name
                    color #333
                    display flex
                    align-items center
                    font-size 12px
            .rightJ
                background-image url('../assets/img/rightT.png')
                width 20px
                height 20px
                background-size 100%
                background-position 50%
                background-size 14% 50%
                background-repeat no-repeat
                flex 0 0 40px
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
                padding 10px 0
            .descCont
                flex 1
                color #333
                text-align left
                border-left solid 1px #f1f1f1
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
.actionsheetBox
    padding 0 15px 20px 15px
    background-color #fff
    .headerT
        display flex
        align-items center
        border-bottom solid 1px #f1f1f1
        .img
            flex 0 0 90px
            margin-top -40px
            img 
                width 100%
                display block
                border solid 1px #999
                border-radius $border-radius
        .text
            text-align left 
            padding 10px 0 20px 15px
            position relative
            flex 1
            .money
                font-size 16px
                color $color
                margin-bottom 5px
            .close
                background-image url('../assets/img/x.png')
                width 25px
                height 25px
                background-size 100%
                position absolute
                top 5px
                right 0
    .main
        max-height 400px
        overflow-y scroll
        .xuanBox
            text-align left
            border-bottom solid 1px #f1f1f1
            padding-bottom 8px
            .name
                font-size 14px
                line-height 35px
            .listBox
                display flex
                align-items center
                flex-wrap wrap
                .item
                    background-color #f5f5f5
                    padding 5px 10px
                    border-radius $border-radius
                    margin 0 10px 8px 0
                    border solid 1px #f5f5f5
                .active
                    border solid 1px $color
                    color $color
        .jinbuqi
            justify-content flex-end
.btn
    color #ffffff
    font-size 14px
    background-color $background-color
    line-height 45px
</style>
