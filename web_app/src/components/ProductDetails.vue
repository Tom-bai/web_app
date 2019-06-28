<template>
    <!-- 商品详情 -->
	<div>
        <div class="ProductDetails" v-if="goodsInfo.goods">
            <div class="header">
                <div class="name" :class="topIndex == index?'active':''" v-for="(item,index) in topName" :key="index" @click="onTopNav(index)">{{item}}</div>
            </div>
            <div class="swiper" id="anchor-0">
                <van-swipe :autoplay="4000" @change="onChange">
                    <van-swipe-item v-for="(image, index) in goodsInfo.goods.more_img" :key="index" class="swiperImg">
                        <img v-lazy="$imgUrl + image" />
                    </van-swipe-item>
                    <div class="custom-indicator" slot="indicator">
                        {{ current + 1}}/{{goodsInfo.goods.more_img.length}}
                    </div>
                </van-swipe>
                <div class="xiaoLiang">近期销量：{{goodsInfo.goods.max_num}} 笔</div>
            </div>
            <div class="moneyDetaild">
                <!-- 拼团 -->
                <div class="money" v-if="goodsInfo.goods.type == 3">
                    <div><span class="moneyIoc">¥</span>{{goodsInfo.goods.p_price}}</div>
                    <div class="yuan"><span class="pinD">单独购买</span><span class="moneyIoc">¥</span>{{goodsInfo.goods.price}}</div>
                </div>
                <!-- 不拼 -->
                <div class="money" v-else>
                    <div><span class="moneyIoc">¥</span>{{goodsInfo.goods.price}}</div>
                    <div class="yuan"><span class="moneyIoc">¥</span>{{goodsInfo.goods.member_price}}<i class="vip"></i></div>
                </div>
                <div class="openVip" v-if="goodsInfo.goods.type != 3">
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
            <!-- 商品规格 -->
            <div class="peiSong">
                <div class="item" @click="onHiddenActionSheet" v-if="gugeValue !== null && selectArr.length <= 0">
                    <div class="title">请选择：</div>
                    <div class="list">
                        <div class="text">
                            <div class="name" v-if="textTishi !== ' '">{{textTishi}}</div>
                            <div class="name" v-else>规格</div>
                        </div>
                        <div class="rightJ"></div>
                    </div>
                </div>
                <div class="item" v-else>
                    <div class="title">规格：</div>
                    <div class="list">
                        <div class="text">
                            <div class="name" v-if="textTishi !== ' '">{{textTishi}}</div>
                            <div class="name" v-else>默认</div>
                        </div>
                        <div class="rightJ"></div>
                    </div>
                </div>
                <div class="item" v-if="goodsInfo.isPro">
                    <div class="title">促&nbsp;&nbsp;&nbsp;销：</div>
                    <div class="list">
                        <div class="text cuxiao">
                            <div class="name">{{goodsInfo.isPro.title}}</div>
                        </div>
                        <div class="rightJ"></div>
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
                <div class="item">
                    <div class="title">运&nbsp;&nbsp;&nbsp;费：</div>
                    <div class="list">
                        <div class="text">
                            <div class="tip">{{goodsInfo.goods.y_price == 0?'免运费': goodsInfo.goods.y_price}}</div>
                        </div>
                        <div class="rightJ"></div>
                    </div>
                </div>
                <div class="item" @click="onshowMsg">
                    <div class="title">服&nbsp;&nbsp;&nbsp;务：</div>
                    <div class="list">
                        <div class="text">
                            <div class="tip">
                                <span v-for="(item,index) in textFuWu" :key="index">{{item.name}}</span>
                            </div>
                        </div>
                        <div class="rightJ"></div>
                    </div>
                </div>
            </div>
            <!-- 拼团 -->
            <div class="pinTuan" v-if="goodsInfo.goods.type == 3">
                <div class="item">
                    <div class="list">
                        <div class="text">
                            <div class="name">{{ goodsInfo.pin == null?'0':goodsInfo.pin.length}}人在拼单,可直接参与</div>
                        </div>
                        <div class="rightJ">查看更多</div>
                    </div>
                </div>
                <div class="pinBox" v-for="(item,index) in goodsInfo.pin" :key="index">
                    <div class="head">
                        <div class="img"><img v-lazy="$imgUrl + item.img" alt=""></div>
                        <div class="name">{{item.names}}</div>
                    </div>
                    <div class="timeBox">
                        <div class="times">
                            <div class="cha">还差 {{chaNum(item.num,item.j_id)}} 人拼成</div>
                            <div>剩余 <span>{{listdata[index].hou}} : </span> <span>{{listdata[index].min}} : </span> <span>{{listdata[index].sec}}</span></div>
                        </div>
                        <div class="btnPin">去拼单</div>
                    </div>
                </div>
            </div>
            <!-- 评论 -->
            <div class="pinLun" id="anchor-1">
                <div class="item">
                    <div class="list" @click="onRouter('/MoreComments',$route.query.id,goodsInfo.good_favorable)">
                        <div class="text">
                            <div class="name">其他小伙伴们说<span>({{goodsInfo.count_com == null?'0':goodsInfo.count_com}})</span></div>
                        </div>
                        <div class="rightJ">好评率({{goodsInfo.good_favorable}})</div>
                    </div>
                </div>
                <div class="container" v-if="commentData">
                    <div class="list" v-for="(item,index) in commentData" :key="index">
                        <div class="two">
                            <div class="headerImg">
                                <div class="img"><img v-lazy="$imgUrl + item.img" alt=""></div>
                                <div class="name">{{item.names}}</div>
                            </div>
                            <div class="text">{{item.content}}</div>
                        </div>
                        <div class="twoImg" v-if="item.pimg">
                            <img v-lazy="$imgUrl + item.pimg[0].img" alt="">
                            <div class="tip">{{item.pimg.length}}张图</div>
                        </div>
                    </div>
                    <div class="list more" v-if="commentData.length > 2">
                        <div class="pR" @click="onRouter('/MoreComments',$route.query.id,goodsInfo.good_favorable)">
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
                            <div class="logo"><img v-lazy="$imgUrl + PUser.img" alt=""></div>
                            <div class="text">
                                <div class="name">{{PUser.names}}</div>
                                <div class="tip">我的大象店铺</div>
                            </div>
                        </div>
                    </div>
                    <div class="rightT">
                        <div class="kefutwo">
                            <img src="../assets/img/kefu2.png" alt="">
                            <div>客服</div>
                        </div>
                        <div class="fenxiang" @click="getShare($route.query.id)">
                            <img src="../assets/img/fenxiang.png" alt="">
                            <div>分享</div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="list" v-for="(item,index) in goodsInfo.goods_day" :key="index" @click="onRouter('/ProductDetails',item.id)">
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
                    <div class="descInfo">
                        <div class="descTip">
                            <div  v-for="(item,index) in goodsInfo.goods.des1.dec1" :key="index">{{item}}</div>
                        </div>
                        <div class="descCont">
                            <div v-for="(item,index) in goodsInfo.goods.des1.dec2" :key="index">{{item}}</div>
                        </div>
                    </div>
                </div>
                <div v-if="goodsInfo.goods.des1.dec1">
                    <div v-if="goodsInfo.goods.des1.dec1.length > 3">
                        <div class="zhanKai" @click="onZhanKai" v-if="!onMore"><span>展开</span><img src="../assets/img/rightT.png" alt=""></div>
                        <div class="shouQi" @click="onZhanKai" v-else><span>收起</span><img src="../assets/img/rightT.png" alt=""></div>
                    </div>
                </div>
                <div class="shangpinImg" v-html="goodsInfo.goods.content"></div>
            </div>
        </div>
        <!-- 底部选项卡 -->
        <van-goods-action class="myBottom" v-if="goodsInfo.goods">
            <van-goods-action-mini-btn
                icon-class="indexIocnImg"
                class="indexIocn"
                text="主页"
                @click="onRouter('/')"
            />
            <van-goods-action-mini-btn
                :icon-class="goodsInfo.collect == null?'likeIocnImg':'likeIocnImgs'"
                class="likeIocn"
                :text="goodsInfo.collect == null?'收藏':'已收藏'"
                @click="getCollect($route.query.id)"
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
                text="单独购买"
                @click="onNowBuy(goodsInfo.goods)"
                v-if="goodsInfo.goods.type == 3"
            />
            <van-goods-action-big-btn
                class="nowCard"
                text="加入购物车"
                @click="onBuyCard"
                v-else
            />
            <van-goods-action-big-btn
                primary
                class="nowBuy"
                text="发起拼团"
                @click="onNowBuy(goodsInfo.goods,1)"
                v-if="goodsInfo.goods.type == 3"
            />
            <van-goods-action-big-btn
                primary
                class="nowBuy"
                text="立即购买"
                @click="onNowBuy(goodsInfo.goods)"
                v-else
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
                            <div class="money">
                                <div>¥{{goodsInfo.goods.price}}</div>
                                <div class="yuan"><span class="moneyIoc">¥</span>{{goodsInfo.goods.member_price}}<i class="vip"></i></div>
                            </div>
                            <div class="tip" v-if="textTishi !== ' '">{{textTishi}}</div>
                            <div class="tip" v-else>请选择 规格</div>
                            <div class="tip">库存 {{kuCun}}</div>
                            <div class="close" @click="onHiddenActionSheet"></div>
                        </div>
                    </div>
                    <!-- 规格 -->
                    <div class="main" v-if="goodsInfo.attr">
                        <div class="xuanBox" v-for="(item,n) in gugeValue" :key="n">
                            <div class="name">{{item.name}}</div>
                            <div class="listBox">
                                <div class="item" 
                                    v-for="(items,index) in item.values" 
                                    @click="specificationBtn(items.name,n,$event,index)" 
                                    :class="[items.isShow?'':'',subIndex[n] == index?'active':'']"
                                    :key="index">{{items.name}}</div>
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
                <div class="btn" @click="onHiddenActionSheetTwo">确定</div>
            </div>
        </nut-actionsheet>
        <!-- 服务详情 -->
        <nut-actionsheet :is-visible="showMsg" @close="onshowMsg" :isClickCloseMask="false">
            <div slot="custom" class="fuWuBox">
                <div class="fuWuBoxHead">
                    <div class="left"></div>
                    <div class="text">服务说明</div>
                    <div class="close" @click="onshowMsg"></div>
                </div>
                <div class="conten">
                    <div class="list" v-for="(item,index) in textFuWu" :key="index">
                        <div class="img"><img v-lazy="$imgUrl + item.img" alt=""></div>
                        <div class="text">
                            <div class="textN">{{item.name}}</div>
                            <div class="textT">{{item.des}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </nut-actionsheet>
        <!-- 评论详情 -->
        <router-view></router-view>
        <!-- 分享图片 -->
        <van-popup v-model="shareBoxShow" class="shareBoxPopup">
            <div class="shareBox">
                <img :src="$imgUrl + shareData.pic" alt="">
                <div>长按图片保存</div>
            </div>
        </van-popup>
	</div>
</template>

<script>
import { Swipe, SwipeItem,Area,GoodsAction,GoodsActionBigBtn,GoodsActionMiniBtn,Stepper,Popup } from 'vant'
import { get,post,toast } from '@/axiosApi'
import AddressInfo from '../assets/js/area'
import { log } from 'util';
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
        [Popup.name]: Popup,
	},
	data () {
		return {
            topName: ['商品','评价','推荐','详情'],
            topIndex: 0,
            goodsInfo: [],
            city: '北京市 北京市 东城区',
            showPinLun: false,
            addressShow:false,
            areaList: AddressInfo,
            YanSeActive: null,
            list: true,
            isVisible: false,
            addressShow: false,
            showMsg:false,
            scrollTop: null,
            showList: 1,
            num: 1,
            summaryListThree: [],
            gugeValue: [],
            onMore: false,
            cardNum: null,
            textFuWu: [],
            shareBoxShow: false,
            shareData: [],
            commentData: [],
            PUser: [],
            kuCun: 1,
            current: 0,
            //
            textTishi: ' ',
            selectArr: [], //存放被选中的值
            shopItemInfo: {}, //存放要和选中的值进行匹配的数据
            subIndex: [], //是否选中 因为不确定是多规格还是但规格，所以这里定义数组来判断
            // 倒计时
            endTimelist: [],
            listdata: [],
            timeOut: null //定时器
        }
    },
    created () {
    },
    mounted() {
        this.getGoodsInfo()
        if(this.endTimelist) {
            this.timeOut = setInterval(this.countDown, 1000)
        }
    },
    destroyed () {
        clearInterval(this.timeOut)
    },
	methods: {
        getGoodsInfo () { // 获取商品详情
            let that = this
            let params = {
                id: that.$route.query.id
            }
            that.goodsInfo = []
            that.commentData = []
			get('/index.php/home/goods/goodsInfo',params).then(res => {
                that.goodsInfo = res
                that.gugeValue = res.attr
                that.cardNum = res.shop_cart_num
                let ids = that.goodsInfo.goods.fuwu.join(',')
                that.getFuWu(ids)
                that.getComment()
                that.getPUser()
                if (that.goodsInfo.pin !== null) {
                    that.goodsInfo.pin.forEach(o => { // 储存时间
                        let time = o.end_time * 1000
                        that.endTimelist.push(time)    
                    })
                    that.countDown()
                }
            }).catch(function (error) {
                console.log(error)
            })
        },
        getFuWu (ids) { // 获取服务信息
            let that = this
            let params = {
                ids: ids
            }
			get('/index.php/home/goods/otherFuwu',params).then(res => {
                that.textFuWu = res
            }).catch(function (error) {
                console.log(error)
            })
        },
        getCollect (id) { // 收藏
            let that = this
            let params = {
                id: id
            }
			get('/index.php/home/goods/ajax_collect',params).then(res => {
                if (res.con == '收藏') {
                    toast(res.data)
                    that.goodsInfo.collect = null
                } else if (res.con == '已收藏') {
                    toast(res.data)
                    that.goodsInfo.collect = 1
                }
            }).catch(function (error) {
                console.log(error)
            })
        },
        getShare (id) { // 分享图片
            let that = this
            let params = {
                id: id
            }
			get('/index.php/home/goods/share',params).then(res => {
                console.log(res);
                that.shareData = res
                that.shareBoxShow = !that.shareBoxShow
            }).catch(function (error) {
                console.log(error)
            })
        },
        getComment () { // 获取评论列表 三个的
            let that = this
            let params = {
                g_id: that.$route.query.id,
                limit: 1,
            }
			get('/index.php/home/goods/getComment',params).then(res => {
                if (res) {
                    that.commentData = res.slice(0,3)
                }
            }).catch(function (error) {
                console.log(error)
            })
        },
        getPUser () { // 获取当前用户推广人的信息
            let that = this
			get('/index.php/home/com/pUser').then(res => {
                that.PUser  = res
            }).catch(function (error) {
                console.log(error)
            })
        },
        getFinAttr (postText) { // 商品详情页获取不同规格信息
            let that = this
            let params = {
                id: that.goodsInfo.goods.id, //商品id
                num: that.num, //数量
                a_id: postText, // 	商品规格(字符串，逗号隔开) 尺寸-颜色|1.8m（6英尺）床,心动"
                isOrder: 1, // 是否订单 1是
            }
			post('/index.php/home/goods/ajax_find_attr',params).then(res => {
                if (res.data.id !== undefined) {
                    that.goodsInfo.goods.img = res.data.attr_img
                    that.goodsInfo.goods.price = res.data.attr_price
                    that.kuCun = res.data.attr_num
                    that.goodsInfo.goods.member_price = res.data.attr_mem_price
                } else {
                    that.kuCun = 1
                }
            }).catch(function (error) {
                console.log(error)
            })
        },
        onTopNav (index) { // 顶部定位
            this.topIndex = index
            document.querySelector("#anchor-" + index).scrollIntoView(true)  
            document.scrollingElement.scrollTop = document.scrollingElement.scrollTop - 60
        },
        onZhanKai () { // 商品使用方法
            this.onMore = !this.onMore
        },
		onRouter (pathUrl,id,type) {
			this.$router.push({
				path: pathUrl,
				query: {
                    id: id,
                    type: type
				}
			})
        },
        onChange(index) {
            this.current = index;
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
        onHiddenActionSheetTwo () {
            if (this.Kucun < this.num) {
                toast('库存不足。请选择其他产品！')
                return false
            }
            if (this.gugeValue !== null) {
                if (this.selectArr.length <= 0) {
                    toast('请选择规格！')
                    this.textTishi = ' '
                    return false
                }
            }
            document.body.classList.remove('scrollFixed')
            document.scrollingElement.scrollTop = this.scrollTop
            this.isVisible = !this.isVisible
        },
        onshowMsg () { // 服务详情
            if (this.showMsg) {
                document.body.classList.remove('scrollFixed')
                document.scrollingElement.scrollTop = this.scrollTop
            } else {
                this.scrollTop = document.scrollingElement.scrollTop
                document.body.classList.add('scrollFixed')
                document.body.style.top = - this.scrollTop + 'px'
            }
            this.showMsg = !this.showMsg
        },
        specificationBtn (item, n, event, index) {// 选择规格
            var that = this;
            if (that.selectArr[n] != item) {
                that.selectArr[n] = item;
                that.subIndex[n] = index;
 
            } else {
                that.selectArr[n] = "";
                that.subIndex[n] = -1; //去掉选中的颜色 
            }
            that.checkItem();
            let tip = []
            for (let i in that.gugeValue) {
                tip.push(that.gugeValue[i].name)
            }
            let tipTip = tip.join('')
            let textGuige = that.selectArr.join(' ')
            if (textGuige == '') {
                that.textTishi = ' '
            } else {
                that.textTishi = textGuige
            }
            let textTip = tip.join('-')
            let textSS = that.selectArr.join(',')
            let postText = textTip + '|' + textSS
            that.getFinAttr(postText)
        },
        checkItem () {
            var that = this;
            var option = that.gugeValue;
            var result = [];  //定义数组存储被选中的值
            for (var i in option) {
                result[i] = that.selectArr[i] ? that.selectArr[i] : "";
            }
            for (var i in option) {
                var last = result[i];  //把选中的值存放到字符串last去
                for (var k in option[i].item) {
                    result[i] = option[i].item[k].name; //赋值，存在直接覆盖，不存在往里面添加name值
                    option[i].item[k].isShow = that.isMay(result); //在数据里面添加字段isShow来判断是否可以选择
                }
                result[i] = last; //还原，目的是记录点下去那个值，避免下一次执行循环时避免被覆盖
 
            }
            that.$forceUpdate(); //重绘
        },
        isMay (result) {
            for (var i in result) { 
                if (result[i] == '') {
                    return true; //如果数组里有为空的值，那直接返回true
                }
            }
            return this.shopItemInfo[result].active ? false : true; //匹配选中的数据的库存，若不为空返回true反之返回false
        },
        onshowPinLun () { // 选择评论
            if (this.showPinLun) {
                document.body.classList.remove('scrollFixed')
                document.scrollingElement.scrollTop = this.scrollTop
            } else {
                this.scrollTop = document.scrollingElement.scrollTop
                document.body.classList.add('scrollFixed')
                document.body.style.top = - this.scrollTop + 'px'
            }
            this.showPinLun = !this.showPinLun
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
        onBuyCard () { // 加入购物车
            let that = this
            if (that.gugeValue !== null) {
                if (that.selectArr.length <= 0) {
                    toast('请选择规格')
                    return false
                }
            }
            // 奇葩的方式总有办法解决
            let text = []
            for (let j in that.gugeValue) {
                text.push(that.gugeValue[j].name)
            }
            let textTip = text.join('-')
            let textGuige = that.selectArr.join(',')
            let postText = textTip + '|' + textGuige
            let params = {
                goods_id: that.goodsInfo.goods.id, //商品id
                num: that.num, //数量
                attr_name: postText, // 	商品规格(字符串，逗号隔开) 尺寸-颜色|1.8m（6英尺）床,心动"
                addcar: 1, // 添加到购物车
                fx_price: that.jianJia, //分享减价
                join_pt: that.pinTuan, // 加入拼团
                fq_pt: that.faPinTuan, //发起拼团
            }
            post('/index.php/home/cart/ajax_add_order',params).then(res => {
                if (res.err == 1) {
                    toast(res.data)
                } else {
                    toast('加入成功')
                    that.cardNum = res.num
                }
            }).catch(function (error) {
                console.log(error)
            })
        },
        onNowBuy (id,pin,pinId) { // 详情页单独购买
            let that = this
            if (that.gugeValue !== null) {
                if (that.selectArr.length <= 0) {
                    toast('请选择规格') //
                    return false
                }
            }
            // 奇葩的方式总有办法解决
            let text = []
            for (let j in that.gugeValue) {
                text.push(that.gugeValue[j].name)
            }
            let textTip = text.join('-')
            let textGuige = that.selectArr.join(',')
            let postText = textTip + '|' + textGuige
            let fq_pt = ''
            let params = {
                goods_id: that.$route.query.id,
                num: that.num,
                attr_name: postText,
                addcar: 0, // 是否添加到购物车
                fx_price: that.fx_price, // 分享减价
                join_pt: pinId, // 加入拼团的拼团id
                fq_pt: pin, // 发起拼团
            }
			post('/index.php/home/cart/ajax_add_order',params).then(res => {
                if (res.err == 1) {
                    toast(res.data)
                } else {
                    that.$router.push({
                        path: '/AddOrderOne',
                        query: {
                            id: res.order_number,
                            type: 'ProductDetails'
                        }
                    })
                }
            }).catch(function (error) {
                console.log(error)
            })
            // let newData =  [id]
            // this.$router.push({
			// 	path: '/AddOrderOne',
			// 	query: {
            //         id: id.id,
            //         type: 'ProductDetails'
			// 	}
			// })
        },
        //倒计时函数
        countDown(it) { 
            // 获取当前时间，同时得到活动结束时间数组  
            let that = this
            let newTime = Date.now(); 
            let endTimeList = that.endTimelist 
            let countDownArr = [];
            // 对结束时间进行处理渲染到页面
            endTimeList.forEach(o => {
                let endTime = new Date(o).getTime();
                let obj = null;
                // 如果活动未结束，对时间进行处理
                if (endTime - newTime > 0) {
                    let time = (endTime - newTime) / 1000;
                    // 获取天、时、分、秒
                    let day = parseInt(time / (60 * 60 * 24));
                    let hou = parseInt(time % (60 * 60 * 24) / 3600);
                    let min = parseInt(time % (60 * 60 * 24) % 3600 / 60);
                    let sec = parseInt(time % (60 * 60 * 24) % 3600 % 60);
                    obj = {
                        day: that.timeFormat(day),
                        hou: that.timeFormat(hou),
                        min: that.timeFormat(min),
                        sec: that.timeFormat(sec)
                    }
                } else { //活动已结束，全部设置为'00'
                    obj = {
                        day: '00',
                        hou: '00',
                        min: '00',
                        sec: '00'
                    }
                }
                countDownArr.push(obj)
                that.listdata = countDownArr
            })
        },
        timeFormat(param) { //小于10的格式化函数
            return param < 10 ? '0' + param : param;
        },
        chaNum(numS,j_id) {
            if (numS && j_id !== null) {
                let num = numS - (eval(j_id).length) - 1
                return num
            } else {
                return numS - 1
            }
        },
    },
    watch: {
        '$route' (to, from) {
            this.getGoodsInfo() 
        }
    }
}
</script>
<style lang="stylus" scoped>
.swiper
    position relative
    .van-swipe
        padding-bottom 20px
        background-color #fff
        .swiperImg
            >img 
                width 100%
                height 360px
                border-radius 3px
        .custom-indicator
            position absolute
            bottom 10px
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
    .xiaoLiang
        font-size 12px
        color #333
        display inline-block
        position absolute
        right 20px
        bottom 0
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
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
.ProductDetails
    margin-bottom 60px
.moneyDetaild
    padding 20px 15px 15px 15px
    text-align left
    background-color #fff
    .money
        color $color
        font-size 27px
        font-weight 700
        display flex
        align-items flex-end
        line-height 1
        .moneyIoc
            font-size 14px
            font-weight normal
            margin-right 2px
    .yuan
        color #666
        font-size 20px
        margin-left 10px
        .vip
            background-image url('../assets/img/index/vip.png')
            background-repeat no-repeat
            background-size 100%
            width 25px
            height 14px
            margin-left 5px
            display inline-block
            vertical-align middle
        .pinD
            font-size 12px
            color $color
            margin-right 3px
            vertical-align middle
    .openVip
        display flex
        align-items center
        background-color #f7f7f7
        height 35px
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
            flex 0 0 80px
            height 35px
            line-height 35px
            background #f3eee3
            text-align center
            span
                display inline-block
                line-height 1
                font-size 12px
                margin-top 5px
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
        .name
            text-overflow ellipsis
            display -webkit-box
            -webkit-line-clamp 2
            -webkit-box-orient vertical
            overflow hidden
            line-height 1.5
            letter-spacing 1px
            color #333
            font-weight 700
            font-size 16px
            margin 10px 0
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
.pinTuan
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
                color #999
                font-size 12px
    .pinBox
        display flex
        align-items center
        padding 10px 15px
        flex 1
        .head
            display flex
            align-items center
            flex 0 0 40%
            .img
                width 40px
                height 40px
                img
                    width 100%
                    display block
                    border-radius 100%
            .name
                margin-left 5px
                overflow hidden
                text-overflow ellipsis
                word-break keep-all
                white-space nowrap
                max-width 110px
        .timeBox
            display flex
            align-items center
            flex 0 0 60%
            justify-content flex-end
            .times
                text-align right
                font-size 13px
                margin-right 10px
                .cha
                    margin-bottom 5px
            .btnPin
                background-color $background-color
                color #fff
                line-height 40px
                padding 0 15px
                border-radius $border-radius
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
                display flex
                align-items center
            .yuan
                color #666
                font-size 14px
                .moneyIoc
                    font-size 12px
                    font-weight normal
                    margin-left 5px
                .vip
                    background-image url('../assets/img/index/vip.png')
                    background-repeat no-repeat
                    background-size 100%
                    width 25px
                    height 14px
                    margin-left 5px
                    display inline-block
                    vertical-align middle
            .tip
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
.shareBoxPopup
    width 70%
    background-color transparent
    .shareBox
        img
            width 100%
            margin auto
            border-radius $border-radius
        div 
            font-size 16px
            background-color #fff
            margin-top 10px
            line-height 40px
            font-weight 500
            border-radius $border-radius
.fuWuBox
    height 350px
    overflow-y auto
    .fuWuBoxHead
        display flex
        align-items center
        height 35px
        .text
            flex 1
            font-size 14px
            text-align left
            padding 0 15px
        .close
            background-image url('../assets/img/x.png')
            flex 0 0 25px
            height 25px
            background-size 100%
            top 5px
            right 0
    .conten
        .list
            display flex
            text-align left
            padding 10px 15px
            .img
                flex 0 0 20px
                img
                    display block
                    width 100%
            .text
                padding 0px 10px 10px 10px
                flex 1
                border-bottom solid 1px #f1f1f1
                .textN
                    font-size 14px
                    color #333
                    margin-bottom 10px
                .textT
                    font-size 14px
                    color #666
.pinLunBox
    position absolute
    width 100%
    heigth 100%
    top 0
    left 0
</style>
