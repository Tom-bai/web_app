<template>
	<!-- 我的订单 -->
	<div>
		<div class="orderList">
			<Nav :dataNav="dataNav" v-if="dataNav"></Nav>
            <div class="mainBox" v-if="orderList.length > 0">
                <nut-infiniteloading @loadmore="onInfinite" :is-show-mod="true"  :is-loading="isLoading" :threshold="200" :has-more="isHasMore">
                    <div class="list" v-for="(item,index) in orderList" :key="index">
                        <div class="head">
                            <div class="tipP">{{times(item.u_time)}}</div>
                            <div class="guangG">{{item.status_name}}</div>
                        </div>
                        <div class="mainBox">
                            <div class="main" v-for="(itemGoods,index) in item.ord_goods" :key="index" @click="onRouter('/OrderDetails',item.order_number)">
                                <div class="imgBox">
                                    <img v-lazy="$imgUrl + itemGoods.image" alt="">
                                </div>
                                <div class="textBox">
                                    <div class="name">{{itemGoods.goods_name}}</div>
                                    <div class="money">
                                        <div class="num">x {{itemGoods.num}}</div>
                                        <div class="moneyN">¥ {{itemGoods.price}}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="orederName">
                            <div class="name">共{{item.num}}件 优惠 {{item.youhui}} 元 应付总额：<span class="money">¥ {{item.price}}</span> </div>
                        </div>
                        <div class="orederBtn">
                            <div class="quxiao" v-if="item.status == -1">删除订单</div>
                            <div class="quxiao" v-if="item.status == 0" @click="postCancelOrder(item.order_number,index)">取消订单</div>
                            <div class="quxiao" v-if="item.status == 1">申请退款</div>
                            <div class="pay" v-if="item.status == 0" @click="postBuy(item)">立即付款</div>
                        </div>
                    </div>
                </nut-infiniteloading>
            </div>
            <Like v-if="hasLike"></Like>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import { get,post,formatTime,toast } from '@/axiosApi'
import Nav from '@/components/Nav'
import Like from '@/components/Like'
import { log } from 'util';
export default {
	name: "orderList",
	components: {
        Nav,
        Like,
	},
	props: [],
	data () {
		return {
            dataNav: [
                {
                    id: -1,
                    title: '全部'
                },
                {
                    id: 0,
                    title: '待付款'
                },
                {
                    id: 2,
                    title: '待发货'
                },
                {
                    id: 3,
                    title: '待收货'
                },
                {
                    id: 4,
                    title: '交易完成'
                },
                {
                    id: 5,
                    title: '退货中'
                },
                {
                    id: 6,
                    title: '已退货'
                },
                {
                    id: 7,
                    title: '货到付款'
                },
            ],
            orderList: [],
            limit: 1,
            status: null,
            isHasMore: true,
            isLoading: false,
            hasLike: false
		}
	},
	mounted() {
        this.getOrderList() 
        this.$Bus.$on('navBtn', (val) => { // 分类
            this.status = val
            this.orderList = []
            setTimeout(() => {
                this.getOrderList()
            }, 100);
        })
    },
    beforeDestroy() {
        //组件销毁前需要解绑事件。否则会出现重复触发事件的问题
        this.$Bus.$off('navBtn');
    },
	methods: {
		getOrderList () { // 获取订单信息
            let that = this
            let params = {
                limit: that.limit,
                status: that.status
            }
            get('/index.php/home/member/orderList',params).then(res => {
                if (res.length == undefined) {
                    that.isLoading = false
                    that.isHasMore = false
                    that.hasLike = true
                } else {
                    that.orderList = that.orderList.concat(res)
                    that.isLoading = false
                    that.isHasMore = true
                    that.hasLike = false
                }
            }).catch(function (error) {
                console.log(error)
            })
            
        },
        postCancelOrder (id,index) { // 取消订单
            let that = this
            let params = {
                order_number: id,
            }
            get('/index.php/home/member/cancel_order',params).then(res => {
                if (res.err == 0) {
                    toast(res.data)
                    that.orderList.splice(index, 1)
                } else {
                    toast(res.data)
                }
            }).catch(function (error) {
                console.log(error)
            })
            
        },
        onInfinite () { //加载更多
            let that = this
            if (that.isHasMore) {
                that.isLoading = true
                that.limit++
                that.getOrderList()
            }
        },
        times (time) {
            let times = JSON.parse(time) * 1000
            return formatTime(new Date(times), 'yyyy-MM-dd hh:mm:ss')
        },
        onCopy () {
            toast('复制成功')
        },
        onRouter (pathUrl,id) {
			this.$router.push({
				path: pathUrl,
				query: {
                    id: id
				}
			})
        },
        postBuy (id) { // 结算
            let that = this
            let pay = []
            pay.push(id)
            that.$router.push({
                path: '/AddOrder',
                query: {
                    id: pay,
                }
            })
        }
	},
	watch: {}
};
</script>
<style lang="stylus" scoped>
.mainBox
    margin-top 10px
    .list
        margin-bottom 10px
        background-color #fff
        .head
            display flex
            align-items center
            line-height 1
            padding 0 15px
            height 35px
            border-bottom solid 1px #f1f1f1
            .tipH
                background-color $background-color
                font-size 12px
                color #ffffff
                padding 4px 6px
                border-radius $border-radius
            .tipP
                color #333
            .guangG
                margin-left auto
                color $color
                span   
                    font-family '宋体'
                    font-weight bold
        .mainBox
            border-bottom solid 1px #f1f1f1
            .main
                display flex
                align-items center
                padding 15px
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
                        text-align right 
                        .moneyN
                            color #333 
                            font-size 14px
                            font-weight 500
                        .numN
                            margin-left auto
                        .num
                            margin-left auto
                            font-size 16px
        .orederName
            .name
                padding 15px
                text-align right 
                font-size 14px
                border-bottom solid 1px #f1f1f1
                .money
                    color $color
                    font-weight 700
        .orederBtn
            padding 15px
            display flex
            align-items center
            justify-content flex-end
            font-size 13px
            line-height 1.2
            .pay
                border solid 1px $color
                padding 4px 6px
                border-radius $border-radius
                margin-left 10px
                background-color $background-color
                color #fff
            .quxiao
                border solid 1px #f1f1f1
                padding 4px 6px
                border-radius $border-radius
                margin-left 10px
                background-color #f1f1f1
                color #333
</style>