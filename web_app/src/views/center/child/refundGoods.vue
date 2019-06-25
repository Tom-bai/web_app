<template>
	<!-- 退款 -->
	<div>
		<div class="refundGoods">
			<div class="head">退款申请</div>
            <div class="goodBox">
                <div class="main">
                    <div class="top">单号：{{goodsData.order_number}}  共{{goodsData.num}}件商品</div>
                    <div class="list" v-for="(item,index) in goodsData.ord_goods" :key="index">
                        <div class="imgBox">
                            <img v-lazy="$imgUrl + item.image" alt="">
                        </div>
                        <div class="textBox">
                            <div class="name">{{item.goods_name}}</div>
                            <div class="money">
                                <div class="num">x {{item.num}}</div>
                                <div class="moneyN">¥ {{item.price}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="liyou">
                <div class="main">
                    <div class="ckBox">
                        <div class="van-checkbox" @click="onLiyou(1)">
                            <div class="van-checkbox__icon van-checkbox__icon--round" :class="is_default == 1?'van-checkbox__icon--checked':''">
                                <i class="van-icon van-icon-success" :style="is_default == 1?'border-color: #f1002d; background-color: #f1002d;':''"></i>
                            </div>
                        </div>
                    </div>
                    <div class="textBox">
                        <div class="name">仅退款</div>
                        <div class="tip">退税费、退代理费、与客服沟通后<span>无需退货</span>的售后类型</div>
                    </div>
                </div>
                <div class="main margin">
                    <div class="ckBox">
                        <div class="van-checkbox" @click="onLiyou(2)">
                            <div class="van-checkbox__icon van-checkbox__icon--round" :class="is_default == 2?'van-checkbox__icon--checked':''">
                                <i class="van-icon van-icon-success" :style="is_default == 2?'border-color: #f1002d; background-color: #f1002d;':''"></i>
                            </div>
                        </div>
                    </div>
                    <div class="textBox">
                        <div class="name">退货退款</div>
                        <div class="tip">无理由退货、商品质量问题、与客服沟通后<span>需要退货</span>的售后类型</div>
                    </div>
                </div>
            </div>
            <div class="yuanyin">
                <div class="list">
                    <div class="text" @click="onHiddenActionSheet">
                        <div class="YHname">
                            <div>优惠券</div>
                            <!-- <div class="sheng" v-if="yhMoney !== 0">已省 ¥ {{yhMoney}}</div> -->
                        </div>
                    </div>
                    <div class="rightJ"></div>
                </div>
            </div>
		</div>
        <!-- 选择原因 -->
        <nut-actionsheet :is-visible="isVisible" @close="onHiddenActionSheet" :isClickCloseMask="true">
            <div slot="custom" class="custom-wrap">
                dsadas
            </div>
        </nut-actionsheet>
	</div>
</template>

<script>
// @ is an alias to /src
import { get,post,formatTime,toast } from '@/axiosApi'
import { Checkbox } from 'vant'
export default {
	name: "refundGoods",
	components: {
        [Checkbox.name]: Checkbox,
	},
	props: [],
	data () {
		return {
            goodsData: [],
            is_default: null,
            isVisible: false,
            scrollTop: null
		}
	},
	mounted() {
        this.goodsData = JSON.parse(this.$route.query.id)   
    },
    beforeDestroy() {
    },
	methods: {
		getOrderList () { // 获取订单信息
            let that = this
            let params = {
                limit: that.limit,
                status: that.status
            }
            get('/index.php/home/member/orderList',params).then(res => {
                
            }).catch(function (error) {
                console.log(error)
            })
            
        },
        onRouter (pathUrl,id) {
			this.$router.push({
				path: pathUrl,
				query: {
                    id: id
				}
			})
        },
        onLiyou (val) {
            this.is_default = val
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
	},
	watch: {}
};
</script>
<style lang="stylus" scoped>
.head
    line-height 40px
    color #ffffff
    background-color $background-color
    font-size 14px
.goodBox
    margin-top 10px
    padding 0 15px
    background-color #fff
    .main
        text-align left 
        .top
            line-height 35px
            font-size 13px
            border-bottom solid 1px #f1f1f1
        .list
            display flex
            align-items center
            padding 15px 0
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
                        margin-top 5px
                        margin-bottom 5px
.liyou
    text-align left
    background-color #fff
    margin-top 10px
    padding 15px 
    .main
        display flex
        align-items center
        .ckBox
            flex 0 0 30px
        .textBox
            flex 1
            margin-left 5px
            .name
                font-size 14px
            .tip
                color #999
                margin-top 5px
                font-size 12px
                line-height 1.5
                span 
                    color #333
                    margin 0 4px
    .margin
        margin-top 15px
.yuanyin
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
            background-image url('../../../assets/img/right.png')
            width 25px
            height 25px
            background-size 100%
</style>