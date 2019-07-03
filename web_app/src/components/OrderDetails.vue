<template>
	<div>
        <div class="OrderDetails">
            <div class="headTip" v-if="orderData.order">
                <div class="img">
                    <img src="../assets/img/status1.png" alt="">
                </div>
                <div class="text" v-if="orderData.order">
                    <div class="status" v-if="orderData.order.status == -1">作废</div>
                    <div class="status" v-if="orderData.order.status == 0">待支付</div>
                    <div class="status" v-if="orderData.order.status == 1">待发货</div>
                    <div class="status" v-if="orderData.order.status == 2">已发货，未签收</div>
                    <div class="status" v-if="orderData.order.status == 3">已签收</div>
                    <div class="status" v-if="orderData.order.status == 4">交易完成</div>
                    <div class="status" v-if="orderData.order.status == 5">退货中</div>
                    <div class="status" v-if="orderData.order.status == 6">退货成</div>
                    <div class="status" v-if="orderData.order.status == 7">货到付款</div>
                    <div class="test">您的订单商品，将由我们的仓库人员进行包装后发货，请您耐心等待</div>
                </div>
            </div>
            <div class="address">
                <div class="img"><img src="../assets/img/weizhi.png" alt=""></div>
                <div class="list" v-if="orderData.address">
                    <div class="text">
                        <div class="name"><span>{{orderData.address.name}}</span>{{orderData.address.mobile}}</div>
                        <div class="address">{{orderData.address.address}}</div>
                    </div>
                </div>
            </div>
            <div class="shangPin" v-if="orderData.goods">
                <div class="head">订单: 共 {{orderData.goods.length}} 件商品</div>
                <div class="shang" v-for="(item,index) in orderData.goods" :key="index">
                    <div class="img"><img :src="$imgUrl + item.image" alt=""></div>
                    <div class="text">
                        <div class="name">{{item.goods_name}}</div>
                        <div class="tip" v-if="item.s_type_title">{{item.s_type_title}}</div>
                        <div class="num">x {{item.num}}</div>
                        <div class="money">¥ {{item.price}}</div>
                    </div>
                </div>
            </div>
            <div class="tipS" v-if="orderData.order">
                <div class="list">
                    <div class="name">实付总额</div>
                    <div class="num">¥ {{orderData.order.max_price}}</div>
                </div>
                <div class="list">
                    <div class="name">商品总价</div>
                    <div class="num">¥ {{orderData.order.price}}</div>
                </div>
                <div class="list">
                    <div class="name">运费</div>
                    <div class="num">¥ {{orderData.order.yun_price}}</div>
                </div>
                <div class="list" v-if="orderData.order.pay_type == 0">
                    <div class="name">微信支付</div>
                    <div class="num">¥ {{orderData.order.y_price}}</div>
                </div>
                <div class="list" v-else>
                    <div class="name">余额抵扣</div>
                    <div class="num">¥ {{orderData.order.y_price}}</div>
                </div>
            </div>
            <div class="bianhao" v-if="orderData.order">
                <div class="list">
                    <div class="name">订单编号：{{orderData.order.order_number}}</div>
                    <div class="copy" v-clipboard:copy="orderData.order.order_number" v-clipboard:success="onCopy">复制</div>
                </div>
                <div class="list">
                    <div class="name">下单时间：<time>{{times(orderData.order.u_time)}}</time></div>
                </div>
            </div>
            <div class="kefu" v-if="orderData.order">
                <div class="kefunum">联系客服</div>
                <div class="tuikuan" v-if="orderData.order.status == 1 || orderData.order.status == 2" @click="onRefund(orderData.order.order_number)">申请退款</div>
                <div class="tuikuan" v-if="orderData.order.status == 0" @click="onRouter('/AddOrderOne',orderData.order.order_number)">立即付款</div>
            </div>
        </div>
	</div>
</template>

<script>
import Vue from 'vue'
import Bus from '@/bus.js'
import { get,post,formatTime,toast } from '@/axiosApi'
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)
export default {
	name: 'OrderDetails',
    props: {},
    components: {
	},
	data () {
		return {
            orderData: [],
            copyOrder: 111
		}
    },
    mounted() {
        this.getPayRes()
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
        onRefund (data) { // 退款
            this.$router.push({
                path: '/refundGoods',
                query: {
                    status: this.navStatus,
                    id: data,
                }
            })
        },
        getPayRes() { // 获取数据
            let that = this
            let params = {
                order: that.$route.query.id,
            }
			get('/index.php/home/cart/order_info',params).then(res => {
                that.orderData = res
            }).catch(function (error) {
                console.log(error)
            })
        },
        times (time) { //时间
            let times = JSON.parse(time) * 1000
            return formatTime(new Date(times), 'yyyy-MM-dd h:m:s')
        },
        onCopy () {
            toast('复制成功')
        }
    },
    watch: {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.headTip
    display flex
    background-color $background-color
    padding 15px
    .img
        flex 0 0 30px
        img
            width 100%
            display block
    .text
        text-align left 
        color #fff
        padding-left 15px
        .status
            font-size 18px
            font-weight 700
        .test
            font-size 14px
            margin-top 5px
.address
    margin-top 10px
    display flex
    background-color #fff
    .img
        flex 0 0 30px
        padding 5px 0 0 10px
        img
            width 100%
            display block
    .list
        display flex
        align-items center
        text-align left 
        height 60px
        padding 0 15px 0 10px
        flex 1
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
.shangPin
    background-color #fff
    margin-top 10px
    padding 0 15px
    text-align left 
    .head
        font-size 12px
        line-height 30px
        border-bottom solid 1px #f1f1f1
    .shang
        display flex
        align-items center
        padding 15px 0
        .img
            flex 0 0 80px
            margin-left 10px
            img 
                width 100%
                display block
                border-radius $border-radius
        .name
            text-overflow ellipsis
            display -webkit-box
            -webkit-line-clamp 2
            -webkit-box-orient vertical
            overflow hidden
            line-height 1.3
        .num
            font-size 14px
            text-align right 
            padding 5px
        .money
            font-size 16px
            text-align right 
            color $color
        .tip
            background-color $background-color
            font-size 12px
            color #ffffff
            padding 4px 6px
            border-radius $border-radius
            display inline-block
            margin 5px 0
.tipS
    background-color #fff
    margin-top 10px
    padding 0 15px
    .list
        display flex
        align-items center
        height 35px
        font-size 14px
        border-bottom solid 1px #f1f1f1
        .num
            margin-left auto
            font-size 16px
            color $color
            font-weight 700
.bianhao
    background-color #fff
    margin-top 10px
    padding 0 15px
    margin-bottom 55px
    .list
        display flex
        align-items center
        height 35px
        font-size 14px
        border-bottom solid 1px #f1f1f1
        .num
            margin-left auto
        .copy
            border solid 1px $color
            margin-left auto
            padding 2px 10px
            line-height 1.3
            border-radius $border-radius
.kefu
    position fixed
    width 100%
    bottom 0
    left 0
    background-color #ffffff
    display flex
    align-items center
    height 45px
    line-height 1.3
    border-bottom solid 1px #f1f1f1
    .kefunum
        padding 5px 15px
        border solid 1px #f1f1f1
        margin 0 15px
        background-color #f1f1f1
        border-radius $border-radius
    .tuikuan
        padding 5PX 15px
        border solid 1px $color
        margin 0 15px 0 auto
        border-radius $border-radius
</style>
