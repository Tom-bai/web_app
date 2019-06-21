<template>
	<div>
        <div class="OrderDetails">
            <div class="headTip">
                <div class="img"><img src="../assets/img/status1.png" alt=""></div>
                <div class="text">
                    <div class="status">待发货</div>
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
                <div class="shang" v-for="(item,index) in orderData.goods">
                    <div class="img"><img :src="$imgUrl + item.image" alt=""></div>
                    <div class="text">
                        <div class="name">{{item.goods_name}}</div>
                        <div class="num">x {{item.num}}</div>
                        <div class="money">¥ {{item.price}}</div>
                    </div>
                </div>
            </div>
            <div class="tipS">
                <div class="list">
                    <div class="name">实付总额</div>
                    <div class="num">{{orderData.order.price}}</div>
                </div>
            </div>
        </div>
	</div>
</template>

<script>
import { Area } from 'vant'
import Bus from '@/bus.js'
import { get,post,formatTime,toast } from '@/axiosApi'
export default {
	name: 'OrderDetails',
    props: {},
    components: {
	},
	data () {
		return {
            orderData: [],
		}
    },
    mounted() {
        this.getPayRes()
    },
	methods: {
        getPayRes() { // 获取数据
            let that = this
            let params = {
                order: that.$route.query.id,
            }
			get('/index.php/home/cart/pay_res',params).then(res => {
                that.orderData = res
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
.tipS
    background-color #fff
    margin-top 10px
    .list
        display flex
        align-items center
        height 35px
</style>
