<template>
	<!-- 购物车 -->
	<div>
		<div class="card">
			<div class="mainBox">
                <div class="list" v-for="(item,index) in cardData.list" :key="index">
                    <div class="head">
                        <div class="tipH">{{item.finalCart.s_type_name}}</div>
                        <div class="tipP">{{item.finalCart.showtit}}</div>
                        <div class="guangG">去逛逛 <span>></span></div>
                    </div>
                    <van-swipe-cell :right-width="65">
                        <div class="main">
                            <div class="ckBox">
                                <div class="van-checkbox" @click="toggle(index)">
                                    <div class="van-checkbox__icon van-checkbox__icon--round" :class="item.is_default == 1?'van-checkbox__icon--checked':''">
                                        <i class="van-icon van-icon-success" :style="item.is_default == 1?'border-color: #f1002d; background-color: #f1002d;':''"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="imgBox">
                                <img v-lazy="$imgUrl + item.image" alt="">
                            </div>
                            <div class="textBox">
                                <div class="name">{{item.goods_name}}</div>
                                <div class="guiGe">{{item.goods_sku}}</div>
                                <div class="money">
                                    <div class="moneyN">¥{{item.price}}</div>
                                    <div class="numN"><van-stepper v-model="item.num" /></div>
                                </div>
                            </div>
                        </div>
                        <span slot="right" class="del">删除</span>
                    </van-swipe-cell>
                </div>
            </div>
            <!-- 结算按钮 -->
            <div class="submitBar">
                <div class="box">
                    <div class="allC"><van-checkbox v-model="checked">全选</van-checkbox></div>
                    <div class="moneyT">
                        <div class="money">
                            <span>总价</span>
                            <span class="mTip">(不含税)</span> 
                            <span class="moneyNum">¥499</span>
                        </div>
                        <div class="tip">
                            <span>预估税费：</span>
                            <span class="suiMoney">¥499</span>
                        </div>
                    </div>
                    <div class="btnJ">结算<span>(1)</span></div>
                </div>
            </div>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import { get,post } from '@/axiosApi'
import { SubmitBar,Checkbox,Stepper,SwipeCell  } from 'vant'
export default {
	name: "cart",
	components: {
        [SubmitBar.name]: SubmitBar,
        [Checkbox.name]: Checkbox,
        [Stepper.name]: Stepper,
        [SwipeCell.name]: SwipeCell,
	},
	props: [],
	data () {
		return {
            cardData: [],
            checked: false,
            num: 1
        }
    },
    mounted() {
        this.getCardData() 
    },
	methods: {
        toggle (index) {
            let that = this
            // let coinId = that.cardData.list.find((person) => (person.id == index.id))
            if (that.cardData.list[index].is_default == 0) {
                that.cardData.list[index].is_default = '1'
            } else if (that.cardData.list[index].is_default = 1) {
                that.cardData.list[index].is_default = '0'
            }
            console.log(that.cardData.list[index])
            
        },
        getCardData () { // 获取商品详情
            let that = this
            let params = {
                id: that.$route.query.id
            }
			get('/index.php/home/shopCart/info').then(res => {
                that.cardData = res
            }).catch(function (error) {
                console.log(error)
            })
        },
        onSubmit () {
            console.log(22);
            
        }
    },
	watch: {}
};
</script>
<style lang="stylus" scoped>
.mainBox
    .list
        margin-top 10px
        .head
            display flex
            align-items center
            line-height 1
            padding 0 15px
            height 35px
            .tipH
                background-color $background-color
                font-size 12px
                color #ffffff
                padding 4px 6px
                border-radius $border-radius
            .tipP
                color #999
                padding 0 10px
            .guangG
                margin-left auto
                color $color
                span   
                    font-family '宋体'
                    font-weight bold
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
        >>>.van-swipe-cell__right
                width 65px
                background-color $background-color
                .del
                    font-size 14px
                    color #ffffff
                    top 45px
                    position relative
.submitBar
    bottom 60px
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
            height 50px
            .money
                font-size 14px
                display flex
                align-items center
                justify-content flex-end
                margin-top 8px
                .mTip
                    font-size 12px
            .tip
                margin-top 2px
        .btnJ
            flex 0 0 120px
            background-color $background-color
            color #fff
            font-size 16px
</style>