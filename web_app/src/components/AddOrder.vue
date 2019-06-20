<template>
    <div>
        <!-- 订单 -->
        <div class="AddOrder">
            <div class="head">
                <div class="list" v-if="orderData.adddata">
                    <div class="text">
                        <div class="name"><span>{{orderData.adddata.name}}</span>{{orderData.adddata.mobile}}</div>
                        <div class="address">{{orderData.adddata.address}}</div>
                    </div>
                    <div class="rightJ"></div>
                </div>
            </div>
            <div class="orderNum">订单：总计 {{orderData.item_num}} 件商品</div>
            <div class="showMain" v-if="orderData.list">
                <div class="main" v-for="(item,index) in orderData.list">
                    <div class="imgBox">
                        <img v-lazy="$imgUrl + item.image" alt="">
                    </div>
                    <div class="textBox">
                        <div class="name" @click="onRouter('/ProductDetails',item.goods_id)">{{item.goods_name}}</div>
                        <div class="guiGe">{{item.goods_sku}}</div>
                        <div class="tip">{{item.finalCart.s_type_name}}</div>
                        <div class="money">
                            <div class="moneyN">¥{{item.price}}</div>
                            <div class="numN">x {{item.num}}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="youHuiQuan">
                <div class="list" @click="onHiddenActionSheet">
                    <div class="text">
                        <div class="YHname">
                            <div>优惠券</div>
                            <div class="sheng" v-if="yhMoney !== 0">已省 ¥ {{yhMoney}}</div>
                        </div>

                    </div>
                    <div class="rightJ"></div>
                </div>
                <div class="list">
                    <div class="text">
                        <div class="name">X币</div>
                        <div class="money" v-if="youHuiData.xb">{{youHuiData.xbi}} 元</div>
                        <div class="money" v-else>0.00 元</div>
                    </div>
                    <div class="right">
                        <nut-switch :active="false" @change="onChangeX"></nut-switch>
                    </div>
                </div>
                <div class="list">
                    <div class="text">
                        <div class="name">余额</div>
                        <div class="money" v-if="youHuiData.balance">{{youHuiData.balance}} 元</div>
                        <div class="money" v-else>0.00 元</div>
                    </div>
                    <div class="right">
                        <nut-switch :active="false" @change="onChangeY"></nut-switch>
                    </div>
                </div>
                <div class="list">
                    <div class="text">
                        <div class="name">买家留言</div>
                        <nut-textinput 
                            v-model="xieShang"
                            placeholder="选填：填写内容已和卖家协商确认"
                            :clearBtn="true"
                            :disabled="false"
                            :hasBorder="false"
                            class="xieShang"
                        />
                    </div>
                </div>
            </div>
            <div class="shangPingList">
                <div class="list">
                    <div class="text">
                        <div class="name">商品金额 </div>
                    </div>
                    <div class="right">
                        <span>¥{{total_price}}</span>
                    </div>
                </div>
                <div class="list">
                    <div class="text">
                        <div class="name">运费 </div>
                    </div>
                    <div class="right">
                        <span>+ ¥{{orderData.yf == 0?'0.00':orderData.yf}}</span>
                    </div>
                </div>
                <div class="list" v-if="xBiShow">
                    <div class="text">
                        <div class="name">X币 </div>
                    </div>
                    <div class="right">
                        <span>- ¥{{youHuiData.xbi == null?'0.00':youHuiData.xbi}}</span>
                    </div>
                </div>
                <div class="list" v-if="balanceShow">
                    <div class="text">
                        <div class="name">余额 </div>
                    </div>
                    <div class="right">
                        <span>- ¥{{yuMoney}}</span>
                    </div>
                </div>
                <div class="list">
                    <div class="text">
                        <div class="name"><span class="tip">提交订单则表示您同意</span> <span>《用户购买协议》</span></div>
                    </div>
                </div>
            </div>
            <div class="zhiFu">
                <div class="list">
                    <div class="text">
                        <div class="name">支付方式 </div>
                    </div>
                    <div class="right">
                        <span>微信支付</span>
                    </div>
                </div>
            </div>
            <!-- 结算按钮 -->
            <div class="submitBar">
                <div class="box">
                    <div class="moneyT">
                        <div class="money">
                            <span class="mTip" v-if="youHuiTip !== '0.00'">已优惠 ¥{{youHuiTip}}</span> 
                            <span>实付金额：</span>
                            <span class="moneyNum">¥{{newPay}}</span>
                        </div>
                    </div>
                    <div class="btnJ" @click="onPayOrder">立即支付</div>
                </div>
            </div>
            <!-- 选择优惠券 -->
            <nut-actionsheet :is-visible="isVisible" @close="onHiddenActionSheet" :isClickCloseMask="false">
                <div slot="custom" class="custom-wrap">
                    <div class="head">
                        <div class="name" :class="youHuiShow?'active':''" v-if="youHuiData.yhqCanUse" @click="onyouHuiShow(true)">可用优惠券({{youHuiData.yhqCanUse.length}})</div>
                        <div class="name" :class="youHuiShow?'':'active'"  v-if="youHuiData.yhqCannotUse" @click="onyouHuiShow(false)">不可用优惠券({{youHuiData.yhqCannotUse.length}})</div>
                        <div class="close" @click="onHiddenActionSheet"></div>
                    </div>
                    <div class="main" v-if="youHuiShow">
                        <div class="list" v-for="(item,index) in youHuiData.yhqCanUse" @click="toggle(index)">
                            <div class="money">
                                <div class="num">¥<span>{{item.price}}</span></div>
                                <div class="numM">满 ¥ {{item.min_price}} 使用</div>
                            </div>
                            <div class="tip">
                                <div class="tipT">{{item.title}}</div>
                                <div class="tipTime" v-if="item.ub_time == 0">无限制</div>
                                <div class="tipTime" v-else>{{ times(item.ub_time)}}至{{times(item.u_time)}}</div>
                            </div>
                            <div class="ckBox">
                                <div class="van-checkbox">
                                    <div class="van-checkbox__icon van-checkbox__icon--round" :class="yhStatus == index && yhStatusA?'van-checkbox__icon--checked':''">
                                        <i class="van-icon van-icon-success" :style="yhStatus == index && yhStatusA?'border-color: #f1002d; background-color: #f1002d;':''"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="main" v-else>
                        <div class="list no" v-for="(item,index) in youHuiData.yhqCannotUse">
                            <div class="money">
                                <div class="num">¥<span>{{item.price}}</span></div>
                                <div class="numM">满 ¥ {{item.min_price}} 使用</div>
                            </div>
                            <div class="tip">
                                <div class="tipT">{{item.title}}</div>
                                <div class="tipTime" v-if="item.ub_time == 0">无限制</div>
                                <div class="tipTime" v-else>{{ times(item.ub_time)}}至{{times(item.u_time)}}</div>
                            </div>
                            <!-- <div class="ckBox">
                                <div class="van-checkbox">
                                    <div class="van-checkbox__icon van-checkbox__icon--round" :class="yhStatus == index && yhStatusA?'van-checkbox__icon--checked':''">
                                        <i class="van-icon van-icon-success" :style="yhStatus == index && yhStatusA?'border-color: #f1002d; background-color: #f1002d;':''"></i>
                                    </div>
                                </div>
                            </div> -->
                        </div>
                    </div>
                    <div class="btn" @click="onHiddenActionSheet">确认 (共省 ¥ {{yhMoney}})</div>
                </div>
            </nut-actionsheet>
            <!-- <SelectAddress></SelectAddress> -->
        </div>
    </div>
</template>

<script>
import { get,post,formatTime,toast } from '@/axiosApi'
import { Checkbox  } from 'vant'
import SelectAddress from '@/components/SelectAddress'
import { log } from 'util';
export default {
	name: 'AddOrder',
	props: {
		msg: String
    },
    components: {
        SelectAddress,
        [Checkbox.name]: Checkbox,
	},
	data () {
		return {
            youHuiShow: true,
            yhStatus: null,
            yhStatusA: false,
            yhMoney: 0,
            orderData: [],
            xieShang: null,
            youHuiData: [],
            isVisible: false,
            xBi: 0,
            xBiShow: false,
            balance: 0,
            balanceShow: false,
            postData: []
		}
    },
    computed:{
        total_price() { // 商品金额
            let price = 0　　　　　　　　　　　　　　　　　　　　　　　　
            for (let i in this.orderData.list) {
                price += (parseFloat(this.orderData.list[i].finalCart.total))
            }
            return price.toFixed(2)
        },
        newPay () { // 支付金额
            let myPay = (parseFloat(this.total_price) - parseFloat(this.xBi) - parseFloat(this.balance) - parseFloat(this.yhMoney)).toFixed(2)
            if (myPay <= 0) {
                myPay = parseFloat(0).toFixed(2)
            }
            return myPay
        },
        yuMoney () {  //优惠后额余额　　　　　　
            if (parseFloat(this.total_price) > parseFloat(this.balance) ) {
                return parseFloat(this.balance).toFixed(2)
            } else {
                return parseFloat(this.total_price).toFixed(2)
            }　　　　　　　　　　
        },
        youHuiTip () {
            return  (parseFloat(this.yuMoney) +  parseFloat(this.xBi) + parseFloat(this.yhMoney)).toFixed(2)
        }
    },
    mounted() {
        this.getCartOrder()
    },
    destroyed () {
        this.postData = []
    },
	methods: {
        getCartOrder () { // 获取订单数据
            let that = this
            for ( let i in that.$route.query.id) {
                that.postData.push(that.$route.query.id[i].id)
            }
            let params = {
                s_id: that.postData
            }
			post('/index.php/home/shopCart/cartOrder',params).then(res => {
                 that.orderData = res
                 that.getUserInfos()
            }).catch(function (error) {
                console.log(error)
            })
        },
        getUserInfos () { // 获取优惠信息
            let that = this
            let params = {
                para: ['yhqCanUse','xbi','balance','yhqCannotUse']
            }
			get('/index.php/home/member/userInfos',params).then(res => {
                that.youHuiData = res
            }).catch(function (error) {
                console.log(error)
            })
        },
        onChangeX (status) { // X币
            this.xBiShow = status
            if (status) {
                if (this.youHuiData.xbi == null) {
                    this.xBi = 0
                } else {
                    this.xBi = parseFloat(this.youHuiData.xbi)
                }
            } else {
                this.xBi = 0
            }
        },
        onChangeY (status) { // 余额
            this.balanceShow = status
            if (status) {
                if (this.youHuiData.balance == null) {
                    this.balance = 0
                } else {
                    this.balance = parseFloat(this.youHuiData.balance)
                }
            } else {
                this.balance = 0
            }
        },
        onHiddenActionSheet () {
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
        times (time) {
            let times = JSON.parse(time) * 1000
            return formatTime(new Date(times), 'yyyy-MM-dd')
        },
        toggle (index) { //  勾选优惠券
            let that = this
            if (that.newPay < that.youHuiData.yhqCanUse[index].min_price) {
                toast(`未满 ¥ ${that.youHuiData.yhqCanUse[index].min_price} 不可使用`)
                return false
            } else {
                that.yhStatus = index
                that.yhStatusA = !that.yhStatusA
                if (that.yhStatusA) {
                    that.yhMoney = parseFloat(that.youHuiData.yhqCanUse[index].price).toFixed(2)
                } else {
                    that.yhMoney = 0
                }
            }
        },
        onyouHuiShow (val) {
            this.youHuiShow = val
        },
        onPayOrder () { // 立即支付下订单
            let that = this
            let params = {
                cartid: that.postData,
                use_xb: `${that.xBiShow?1:0}`,
                user_ye: `${that.balanceShow?1:0}`,
                message: that.xieShang,
                yhq: that.yhq,
                address_id: that.orderData.adddata.id,
            }
			post('/index.php/home/cart/ajax_cart_order',params).then(res => {
                that.onPayMoney(res.order)
            }).catch(function (error) {
                console.log(error)
            })
        },
        onPayMoney (orderID) { // 立即支付订单付钱
            let that = this
            let params = {
                order: orderID,
                use_xb: `${that.xBiShow?1:0}`,
                user_ye: `${that.balanceShow?1:0}`,
                message: that.xieShang,
                yhq: that.yhq,
                address_id: that.orderData.adddata.id,
            }
			get('/index.php/home/cart/order_pay',params).then(res => {
                console.log(res);
                alert(res)
                that.$wxSDK.config({
                    debug: false, // 开启调试模式,开发时可以开启
                    appId: res.appId,   // 必填，公众号的唯一标识   由接口返回
                    timestamp: res.timestamp, // 必填，生成签名的时间戳 由接口返回
                    nonceStr: res.nonceStr,    // 必填，生成签名的随机串 由接口返回
                    signature: res.signature,   // 必填，签名 由接口返回
                    jsApiList: [
                        'chooseWXPay', 
                    ] // 此处填你所用到的方法
                });
            }).catch(function (error) {
                console.log(error)
            })
        },
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.head
    .list
        display flex
        align-items center
        text-align left 
        background-color #fff
        height 60px
        padding 0 15px
        background-image url('../assets/img/z_ads_line.jpg')
        background-position bottom
        background-repeat repeat-x
        .text
            flex 1
            font-size 13px
            .name
                margin-bottom 5px
                span 
                    font-size 15px
                    flex-wrap 700
                    margin-right 10px
            .address
                overflow hidden
                text-overflow ellipsis
                display -webkit-box
                -webkit-box-orient vertical
                -webkit-line-clamp 1
                white-space initial
        .rightJ
            background-image url('../assets/img/right.png')
            width 25px
            height 25px
            background-size 100%
.orderNum
    text-align left 
    background-color #ffffff
    line-height 40px
    padding 0 15px
    font-size 12px
.showMain
    .main
        display flex
        align-items center
        padding 15px
        background-color #fff
        border-bottom solid 1px #f1f1f1
        .ckBox
            flex 0 0 30px
        .imgBox
            flex 0 0 80px
            margin-left 10px
            img 
                width 100%
                display block
                border-radius $border-radius
        .textBox
            padding-left 15px
            text-align left 
            flex 1
            .name
                font-size 14px
                font-weight 700
                text-overflow ellipsis
                display -webkit-box
                -webkit-line-clamp 2
                -webkit-box-orient vertical
                overflow hidden
                line-height 1.3
            .guiGe
                font-size 12px
                font-weight 500
                text-overflow ellipsis
                display -webkit-box
                -webkit-line-clamp 1
                -webkit-box-orient vertical
                overflow hidden
                line-height 1.3
                margin 4px 0
            .tip
                color #fff
                background-color $background-color
                display inline-block
                margin 0 0 5px 0
                padding 2px 5px
                border-radius $border-radius
                line-height 1
            .money
                display flex
                align-items center
                .moneyN
                    color $color 
                    font-size 16px
                    font-weight 700
                .numN
                    margin-left auto
                    font-size 13px
.youHuiQuan
    margin-top 10px
    .list
        display flex
        align-items center
        text-align left 
        background-color #fff
        height 45px
        padding 0 15px
        .text
            flex 1
            font-size 13px
            display flex
            align-items center
            .YHname 
                display flex
                align-items center
                flex 1
                .sheng
                    margin-left auto
            .address
                overflow hidden
                text-overflow ellipsis
                display -webkit-box
                -webkit-box-orient vertical
                -webkit-line-clamp 1
                white-space initial
            .money
                margin-left auto
                margin-right 10px
            .xieShang
                flex 1
                input 
                    font-size 12px
        .rightJ
            background-image url('../assets/img/right.png')
            width 25px
            height 25px
            background-size 100%
.shangPingList
    margin-top 10px
    .list
        display flex
        align-items center
        text-align left 
        background-color #fff
        height 45px
        padding 0 15px
        .text
            flex 1
            font-size 13px
            display flex
            align-items center
            color #333
            .address
                overflow hidden
                text-overflow ellipsis
                display -webkit-box
                -webkit-box-orient vertical
                -webkit-line-clamp 1
                white-space initial
            .money
                margin-left auto
                margin-right 10px
            .xieShang
                flex 1
                input 
                    font-size 12px
            .name
                display flex
                align-items center
                flex 1
                .tip
                    color #666
        .right
            font-size 14px
.zhiFu
    margin-top 10px
    margin-bottom 70px
    .list
        display flex
        align-items center
        text-align left 
        background-color #fff
        height 45px
        padding 0 15px
        .text
            flex 1
            font-size 13px
            display flex
            align-items center
            color #333
            .address
                overflow hidden
                text-overflow ellipsis
                display -webkit-box
                -webkit-box-orient vertical
                -webkit-line-clamp 1
                white-space initial
            .money
                margin-left auto
                margin-right 10px
            .xieShang
                flex 1
                input 
                    font-size 12px
            .name
                display flex
                align-items center
                flex 1
                .tip
                    color #666
        .right
            font-size 13px
.submitBar
    bottom 0
    left: 0
    width 100%
    z-index 100
    position fixed
    user-select none
    background-color #fff
    .box
        display flex
        align-items center
        height 50px
        line-height 50px
        border-top solid 1px #f1f1f1
        .allC
            flex 0 0 80px
        .moneyT
            flex 1
            line-height 1.3
            text-align right 
            padding 0 10px
            .money
                font-size 14px
                display flex
                align-items center
                justify-content flex-end
                .mTip
                    font-size 12px
                    margin-right 5px
                .moneyNum
                    color $color
            .tip
                margin-top 2px
                color $color 
        .btnJ
            flex 0 0 120px
            background-color $background-color
            color #fff
            font-size 16px
.custom-wrap
    height 450px
    overflow-y auto
    background-color #fff
    padding-bottom 60px
    .head
        display flex
        align-items center
        font-size 14px
        height 50px
        border-bottom solid 1px #f1f1f1
        padding 0 15px
        position sticky
        top 0
        left 0
        background-color: #fff
        z-index 9
        .name
            flex 1
        .active
            font-weight 700
            font-size 15px
        .close
            flex 0 0 30px
            background-image url('../assets/img/x.png')
            height 25px
            background-size 100%
            background-position 50%
    .main
        padding 0 15px
        .list
            background-image url('../assets/img/yhq.jpg')
            height 90px
            background-size 100% 100%
            background-repeat no-repeat
            margin-top 10px
            display flex
            align-items center
            .money
                flex 0 0 30%
                .num
                    font-weight 700
                    font-size 16px
                    span 
                        font-size 26px
                        margin-left 4px
                .numM
                   font-size 12px 
                   font-weight 700
            .tip
                flex 1
                padding 0 15px
                text-align left
                .tipT
                    font-size 14px
                    font-weight 700
                    margin-top 5px
                .tipTime
                    font-size 12px
                    font-weight normal
                    color #999
                    margin-top 6px
            .ckBox
                padding-right 15px
        .no
            background-image url('../assets/img/yhqH.jpg')
    .btn
        position fixed
        width 100%
        bottom 0
        left 0
        background-color $background-color
        line-height 45px
        font-size 14px
        color #fff
</style>
