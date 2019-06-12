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
                        <nut-switch :active="true" @change="onChangeX"></nut-switch>
                    </div>
                </div>
                <div class="list">
                    <div class="text">
                        <div class="name">余额</div>
                        <div class="money" v-if="youHuiData.balance">{{youHuiData.balance}} 元</div>
                        <div class="money" v-else>0.00 元</div>
                    </div>
                    <div class="right">
                        <nut-switch :active="true" @change="onChangeY"></nut-switch>
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
                <div class="list" @click="onHiddenActionSheet">
                    <div class="text">
                        <div class="name">商品金额 </div>
                    </div>
                    <div class="right">
                        ¥000
                    </div>
                </div>
            </div>
            <!-- 选择优惠券 -->
            <nut-actionsheet :is-visible="isVisible" @close="onHiddenActionSheet" :isClickCloseMask="false">
                <div slot="custom" class="custom-wrap">
                    啊实打实
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
            isVisible: false
		}
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
        onChangeX (status) {
            console.log(status); 
        },
        onChangeY (status) {
            console.log(status);
        },
        onHiddenActionSheet () {
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
</style>
