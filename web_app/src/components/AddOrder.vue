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
                        <div class="name">优惠券</div>
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
                        <span>- ¥{{youHuiData.balance}}</span>
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
                            <span>实付金额：</span>
                            <!-- <span class="mTip">(不含税)</span>  -->
                            <span class="moneyNum">¥{{newPay}}</span>
                        </div>
                    </div>
                    <div class="btnJ">立即支付</div>
                </div>
            </div>
            <!-- 选择优惠券 -->
            <nut-actionsheet :is-visible="isVisible" @close="onHiddenActionSheet" :isClickCloseMask="false">
                <div slot="custom" class="custom-wrap">
                    <div class="head">
                        <div class="name">可用优惠券(1)</div>
                        <div class="name">不可用优惠券(4)</div>
                        <div class="close" @click="onHiddenActionSheet"></div>
                    </div>
                    <div class="main">
                        <div class="list" v-for="(item,index) in youHuiData.yhqList">
                            {{item.title}}
                        </div>
                    </div>
                    <!-- <div class="btn" @click="onHiddenActionSheetTwo">确定</div> -->
                </div>
            </nut-actionsheet>
            <!-- <SelectAddress></SelectAddress> -->
        </div>
    </div>
</template>

<script>
import { get,post } from '@/axiosApi'
import SelectAddress from '@/components/SelectAddress'
export default {
	name: 'AddOrder',
	props: {
		msg: String
    },
    components: {
		SelectAddress
	},
	data () {
		return {
            orderData: [],
            xieShang: null,
            youHuiData: [],
            isVisible: false,
            xBi: 0,
            xBiShow: false,
            balance: 0,
            balanceShow: false,
            youHui: 0
		}
    },
    computed:{
        total_price() {
            let price = 0　　　　　　　　　　　　　　　　　　　　　　　　
            for (let i in this.orderData.list) {
                price += (parseInt(this.orderData.list[i].price) * parseInt(this.orderData.list[i].num))
            }
            return price.toFixed(2)
        },
        newPay () {
            let newPay = 0　　　　　　　　　　　　　　　　　　　　　　　　
            for (let i in this.orderData.list) {
                newPay += (parseInt(this.orderData.list[i].price) * parseInt(this.orderData.list[i].num)) 
            }
            
            return (newPay - parseInt(this.xBi) - parseInt(this.balance) - parseInt(this.youHui)).toFixed(2)
        },
    },
    mounted() {
        this.getCartOrder()
    },
	methods: {
        getCartOrder () { // 获取订单数据
            let that = this
            let postData = []
            for ( let i in that.$route.query.id) {
                postData.push(that.$route.query.id[i].id)
            }
            let params = {
                s_id: postData
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
                para: ['yhqList','xbi','balance']
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
                    this.xBi = parseInt(this.youHuiData.xbi)
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
                    this.balance = parseInt(this.youHuiData.balance)
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
        }
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
                height 35px
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
    .head
        display flex
        align-items center
        font-size 14px
        height 50px
        border-bottom solid 1px #f1f1f1
        padding 0 15px
        .name
            flex 1
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
</style>
