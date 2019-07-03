<template>
	<!-- 退款 -->
	<div>
		<div class="refundGoods">
			<div class="head">退款申请</div>
            <div class="goodBox">
                <div class="main">
                    <div class="top" v-if="goodsData.order">单号：{{goodsData.order.order_number}}  共{{goodsData.order.num}}件商品</div>
                    <div class="list" v-for="(item,index) in goodsData.goods" :key="index">
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
                            <div>退款原因</div>
                            <div class="sheng" v-if="is_text">{{is_text}}</div>
                        </div>
                    </div>
                    <div class="rightJ"></div>
                </div>
            </div>
            <div class="yuanyin">
                <div class="list">
                    <div class="text" @click="onHiddenActionSheet">
                        <div class="YHname" v-if="goodsData.order">
                            <div>退款金额 <span>¥{{goodsData.order.price}}</span></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="yuanyin">
                <div class="list">
                    <div class="text">
                        <div class="YHname">
                            <div>退款说明</div>
                        </div>
                    </div>
                </div>
                <div class="input">
                    <nut-textinput 
                        v-model="msg"
                        placeholder="必填"
                        :clearBtn="true"
                        :disabled="false"
                        :hasBorder="false"
                    />
                </div>
            </div>
            <div class="yuanyin">
                <div class="list">
                    <div class="text">
                        <div class="YHname">
                            <div>上传凭证 <span class="tip">(最多3张)</span></div>
                        </div>
                    </div>
                </div>
                <div class="upImg">
                    <div class="imgBox">
                        <div class="img">
                            <img :src="item.base64" alt="" v-for="(item,index) in upImgData">
                        </div>
                        <van-uploader :after-read="onRead" accept="image/jpeg, image/png, image/jpg" class="upImgBtn">
                            <div class="headerIbtn"><img src="../../../assets/img/center/z_upimg.jpg" alt=""></div>
                        </van-uploader>
                    </div>
                </div>
            </div>
            <div class="btn" @click="postRefund">提交</div>
		</div>
        <!-- 选择原因 -->
        <nut-actionsheet :is-visible="isVisible" @close="onHiddenActionSheet" :isClickCloseMask="true">
            <div slot="custom" class="custom-wrap">
                <div class="list" :class="activeT == item?'active':''" v-for="(item,index) in liyouData" @click="onLiyouT(item)">{{item}}</div>
            </div>
        </nut-actionsheet>
	</div>
</template>

<script>
// @ is an alias to /src
import { get,post,formatTime,toast } from '@/axiosApi'
import { Checkbox,Uploader } from 'vant'
import 'lrz/dist/lrz.all.bundle.js'
export default {
	name: "refundGoods",
	components: {
        [Checkbox.name]: Checkbox,
        [Uploader.name]: Uploader
	},
	props: [],
	data () {
		return {
            goodsData: [],
            is_default: null,
            is_text: null,
            activeT: null,
            isVisible: false,
            scrollTop: null,
            liyouData: ['多拍、错拍、不想要','不喜欢、效果不好','货物与描述不符','质量问题','收到商品少件、破损或污渍','空包裹','卖家发错货','假冒品牌','其他',],
            msg: null,
            upImgData: []
		}
	},
	mounted() {
        this.goodsData = []
        this.getOrderList()   
    },
    beforeDestroy() {
    },
	methods: {
		getOrderList () { // 获取订单详情信息
            let that = this
            let params = {
                order: that.$route.query.id
            }
            get('/index.php/home/cart/order_info',params).then(res => {
                that.goodsData = res
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
        onLiyouT (val) {
            this.is_text = val
            this.activeT = val
            this.isVisible = !this.isVisible
            document.body.classList.remove('scrollFixed')
            document.scrollingElement.scrollTop = this.scrollTop
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
        onRead(file) {
            let that = this
            lrz(file.file).then(function (res) {
                // 处理成功会执行
                if (that.upImgData.length > 0) {
                    if (that.upImgData.length > 2) {
                        toast('最多上传3张图片！')
                    } else {
                        that.upImgData.push(res)
                    }
                } else {
                    that.upImgData.push(res)
                }   
            }).catch(function (err) {
                // 处理失败会执行
                toast('上传失败，请刷新页面重新上传！')
            }).always(function () {
                // 不管是成功失败，都会执行
            })
        },
        postRefund() { // 申请退款
            let that = this
            let imgBase = []
            if (that.is_default == null) {
                toast('请选择退款类型')
            } else if (that.is_text == null) {
                toast('请选择退款原因')
            } else if (that.msg == null) {
                toast('请填写退款说明')
            } else {
                for (let i in that.upImgData) {
                    let substringImg
                    substringImg = that.upImgData[i].base64.substring(that.upImgData[i].base64.indexOf(',') + 1)
                    imgBase.push(substringImg)
                }
                let params = {
                    order: that.goodsData.order.order_number, // 订单号
                    tk_type: that.is_default, //	退款类型 1.退货退款 ；2.仅退款
                    liyou: that.is_text, //退款原因(理由)
                    refund_price: that.goodsData.price, //退款金额
                    des: that.msg, //退款说明
                    img_group: imgBase //凭证图片(可多张图片，数组形式，图片格式base64)
                }
                post('/index.php/home/member/refund_info',params).then(res => {
                    if (res.err == 0) {
                        toast(res.data)
                        setTimeout(() => {
                            that.$router.replace({
                                path: '/orderList',
                                query: {
                                    id: that.$route.query.status
                                }
                            })
                        }, 1500);
                    } else {
                        toast(res.msg)
                    }
                    
                }).catch(function (error) {
                    console.log(error)
                })
            } 
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
                span 
                    color $color
                .tip
                    color #999
                    font-size 12px
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
    .input
        padding 0 0 0 8px
        background-color #fff
    .upImg
        padding 0 15px
        background-color #fff
        .imgBox
            display flex
            padding-bottom 15px
            .img
                display flex
                img
                    width 80px
                    display block
                    height 80px 
                    margin-right 8px
            .upImgBtn
                flex 0 0 80px
                .headerIbtn
                    width 80px
                    height 80px
                    img
                        width 100%
                        display block
                        height 100%
.custom-wrap
    background-color #fff
    .list
        text-align left 
        padding 10px 15px
        border-bottom solid 1px #f1f1f1
        font-size 14px
    .active
        color $color
.btn
    width 70%
    line-height 35px
    color #fff
    background-color $background-color
    margin 20px auto 20px auto
    font-size 14px
    border-radius $border-radius
</style>