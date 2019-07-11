<template>
	<!-- 购物车 -->
	<div>
		<div class="card" v-if="cardData.list !== null">
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
                                <div class="name" @click="onRouter('/ProductDetails',item.goods_id)">{{item.goods_name}}</div>
                                <div class="guiGe">{{item.goods_sku}}</div>
                                <div class="money">
                                    <div class="moneyN">¥{{item.price}}</div>
                                    <div class="numN"><van-stepper v-model="item.num" :disable-input="true" async-change  @plus="postUpdatenum(index)" @minus="postUpdatenum(index)"  /></div>
                                </div>
                            </div>
                        </div>
                        <span slot="right" class="del" @click="postDel(item.id,index)">删除</span>
                    </van-swipe-cell>
                </div>
            </div>
            <!-- 结算按钮 -->
            <div class="submitBar">
                <div class="box">
                    <div class="allC"><van-checkbox v-model="allChecked" checked-color="#f1002d" @click="allCheckBox">全选</van-checkbox></div>
                    <div class="moneyT">
                        <div class="money">
                            <span>总价：</span>
                            <!-- <span class="mTip">(不含税)</span>  -->
                            <span class="moneyNum">¥{{total_price}}</span>
                        </div>
                        <div class="tip">
                            <span>活动优惠：</span>
                            <span class="suiMoney">¥{{total_youhui}}</span>
                        </div>
                    </div>
                    <div class="btnJ" @click="postBuy">结算<span>({{allCheckedList.length}})</span></div>
                </div>
            </div>
		</div>
        <div class="noCard" v-else>
            <div class="img"><img src="../../assets/img/z_shopcart_def.jpg" alt=""></div>
            <div class="goIndex"><span @click="onRouter ('/')">去逛逛</span></div>
            <Like></Like>
        </div>
	</div>
</template>

<script>
// @ is an alias to /src
import { get,post,toast } from '@/axiosApi'
import Like from '@/components/Like'
import { SubmitBar,Checkbox,Stepper,SwipeCell  } from 'vant'
export default {
	name: "cart",
	components: {
        [SubmitBar.name]: SubmitBar,
        [Checkbox.name]: Checkbox,
        [Stepper.name]: Stepper,
        [SwipeCell.name]: SwipeCell,
        Like: Like
	},
	props: [],
	data () {
		return {
            cardData: [],
            checked: false,
            allChecked: false,
            allCheckedList: [],
            youListData: [],
            num: 1,
            toTal: 0,
        }
    },
    mounted() {
        this.getCardData() 
    },
    computed:{
        total_price() {
            let price = 0　　　　　　　　　　　　　　　　　　　　　　　　
            for (let i in this.allCheckedList) {
                price += (parseFloat(this.allCheckedList[i].finalCart.total))
            }
            return price.toFixed(2)
        },
        total_youhui() {
            let youhui = 0　　　　　　　　　　　　　　　　　　　　　　　　
            for (let i in this.allCheckedList) {
                youhui += (parseFloat(this.allCheckedList[i].finalCart.jian))
            }
            return youhui.toFixed(2)
        },
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
        postDel (id,index) { // 删除商品
            let that = this
            let params = {
                id: id,
            }
            get('/index.php/home/shopCart/updatedel',params).then(res => {
                if (res.status == 1) {
                    toast('删除成功!')
                    for (let i in that.allCheckedList) {
                        if (that.cardData.list[index].id == that.allCheckedList[i].id) {
                            that.allCheckedList.splice(i, 1);
                            that.allChecked = false
                        }
                    }
                    that.cardData.list.splice(index, 1)
                    that.$store.commit('set_CARD_STATE', that.cardData.list.length)
                } else {
                    toast(res.msg)
                }
            }).catch(function (error) {
                console.log(error)
            })
            
        },
        postUpdatenum (index) { // 增加商品数量
            let that = this
            if (that.changing) {
                return;
            }
            that.changing = true;
            let params = {
                id: that.cardData.list[index].id,
                num: that.cardData.list[index].num
            }
            get('/index.php/home/shopCart/updatenum',params).then(res => {
                if ( res.status == 0 ) {
                    toast(res.msg)
                } else {
                    that.youhuiMoney = res.goods.jian
                    // 重新更新优惠信息
                    that.cardData.list[index].finalCart.total = res.goods.total
                    that.cardData.list[index].finalCart.jian = res.goods.jian   
                }
                that.changing = false
            }).catch(function (error) {
                console.log(error)
            })
            
        },
        allCheckBox () { // 全选
            let that = this
            if (!that.allChecked) { // 勾
                that.allCheckedList = []
                for (let i in that.cardData.list) {
                    that.cardData.list[i].is_default = '1'
                    that.postGouxuan(that.cardData.list[i].id,that.cardData.list[i].is_default)
                    that.allCheckedList.push(that.cardData.list[i])
                }
            } else { // 不勾
                for (let i in that.cardData.list) {
                    that.cardData.list[i].is_default = '0'
                    that.postGouxuan(that.cardData.list[i].id,that.cardData.list[i].is_default)
                }
                that.allCheckedList = []
                
            }
        },
        toggle (index) { //  勾选商品
            let that = this
            // let coinId = that.cardData.list.find((person) => (person.id == index.id))
            if (that.cardData.list[index].is_default == 0) { // 勾
                that.cardData.list[index].is_default = '1'
                that.postGouxuan(that.cardData.list[index].id,that.cardData.list[index].is_default)
                that.allCheckedList.push(that.cardData.list[index])
                that.toTal = (parseFloat(that.toTal) + parseFloat(that.cardData.list[index].price)).toFixed(2)
            } else if (that.cardData.list[index].is_default = 1) {  // 不勾
                that.cardData.list[index].is_default = '0'
                that.allChecked = false
                that.postGouxuan(that.cardData.list[index].id,that.cardData.list[index].is_default)
                that.toTal = (parseFloat(that.toTal) - parseFloat(that.cardData.list[index].price)).toFixed(2)
                for (let i in that.allCheckedList) {
                    if (that.cardData.list[index] == that.allCheckedList[i]) {
                        that.allCheckedList.splice(i, 1);
                        that.allChecked = false
                    }
                }
            }
            if (that.cardData.list.length == that.allCheckedList.length) {
                that.allChecked = true
            }
        },
        postGouxuan (id,def) { // 勾选
            let that = this
            let params = {
                id: id,
                def: def
            }
			get('/index.php/home/shopCart/updatedef',params).then(res => {
                // console.log(res);
            }).catch(function (error) {
                console.log(error)
            })
        },
        getCardData () { // 获取购物车详情
            let that = this
            let params = {
                id: that.$route.query.id
            }
			get('/index.php/home/shopCart/info').then(res => {
                that.cardData = res
                for (let i in that.cardData.list) {
                    if (that.cardData.list[i].is_default == 0) {
                        that.allChecked = false
                    } else {
                        that.allChecked = true
                        that.allCheckedList.push(that.cardData.list[i])
                    }
                } 
            }).catch(function (error) {
                console.log(error)
            })
        },
        postBuy () { // 结算
            let that = this
            if (that.allCheckedList.length <= 0 ) {
                toast('请勾选商品!')
                return false
            } else {
                that.$router.push({
                    path: '/AddOrder',
                    query: {
                        id: that.allCheckedList,
                        type: 'card'
                    }
                })
            }
        }
    },
	watch: {
    }
};
</script>
<style lang="stylus" scoped>
.mainBox
    margin-bottom 120px
    .list
        margin-bottom 10px
        background-color #fff
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
                color $color 
        .btnJ
            flex 0 0 120px
            background-color $background-color
            color #fff
            font-size 16px
.noCard
    margin-bottom 70px
    .img
        img 
            display block
            width 100%
    .goIndex
        text-align center
        padding 30px 0
        background-color #fff
        span
            font-size 14px
            color $color
            border solid 1px $color
            padding 6px 15px
            line-height 1
            border-radius $border-radius
</style>