<template>
	<!-- 个人中心 -->
	<div>
		<div class="center">
			<div class="head">
				<div class="setting"><div class="iocn">设置</div></div>
				<div class="nameBox">
					<div class="img"><img :src="$imgUrl + 'head/' + userInfo.img" alt=""></div>
                    <div class="name">
                        <div class="username"><span>{{userInfo.username}} </span><span class="vip"></span> </div>
                        <div class="id"><span>ID:{{userInfo.usernumber}}</span> <span class="copy" v-clipboard:copy="userInfo.usernumber" v-clipboard:success="onCopy">复制</span></div>
                    </div>
				</div>
			</div>
            <div class="orederNav">
                <div class="box">
                    <div class="list border" @click="onRouter('/orderList',0)">
                        <div class="img"><img src="../../assets/img/center/z_mem_myorder.jpg" alt=""></div>
                        <div class="name">我的订单</div>
                    </div>
                    <div class="list" @click="onRouter('/orderList',1)">
                        <div class="img"><img src="../../assets/img/center/z_mem_myorder.jpg" alt=""></div>
                        <div class="name">待付款</div>
                    </div>
                    <div class="list" @click="onRouter('/orderList',2)">
                        <div class="img"><img src="../../assets/img/center/z_mem_myorder.jpg" alt=""></div>
                        <div class="name">待收货</div>
                    </div>
                    <div class="list">
                        <div class="img"><img src="../../assets/img/center/z_mem_myorder.jpg" alt=""></div>
                        <div class="name">享说</div>
                    </div>
                    <div class="list">
                        <div class="img"><img src="../../assets/img/center/z_mem_myorder.jpg" alt=""></div>
                        <div class="name">售后</div>
                    </div>
                </div>
                <div class="fapiao"><span>查看电子发票</span></div>
            </div>
            <div class="toDay">
                <div class="name">今日主推</div>
                <div class="img"><img src="../../assets/img/index/111.jpg" alt=""></div>
            </div>
            <div class="shouCang">
                <div class="box">
                    <div class="list" @click="onRouter('/collection')">
                        <div class="num">3</div>
                        <div class="text">商品收藏</div>
                    </div>
                    <div class="list">
                        <div class="num">3</div>
                        <div class="text">浏览记录</div>
                    </div>
                </div>
            </div>
            <div class="shouCang">
                <div class="box">
                    <div class="list">
                        <div class="img">3</div>
                        <div class="text">客户服务</div>
                    </div>
                    <div class="list"  @click="onHiddenAdd">
                        <div class="img">3</div>
                        <div class="text">收货地址</div>
                    </div>    
                </div>
            </div>
            <Like></Like>
            <!-- 选择地址 -->
            <nut-actionsheet :is-visible="isVisibleAdd" @close="onHiddenAdd" :isClickCloseMask="false">
                <SelectAddress slot="custom"  class="centerAddress"></SelectAddress>
            </nut-actionsheet>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue'
import Like from '@/components/Like'
import { get,post,formatTime,toast } from '@/axiosApi'
import VueClipboard from 'vue-clipboard2'
import SelectAddress from '@/components/SelectAddress'
import Bus from '@/bus.js'
Vue.use(VueClipboard)
export default {
	name: "center",
	components: {
        Like,
        SelectAddress
	},
	props: [],
	data () {
		return {
            userInfo: [],
            isVisibleAdd: false,
            scrollTop: null
		}
	},
	mounted() {
        this.getUserInfo() 
        this.$Bus.$on('addressShowB', (val) => { // 
            this.isVisibleAdd = val
        }) 
    },
    destroyed () {
        this.$Bus.$off('addressShowB')
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
		getUserInfo () { // 个人信息
            let that = this
            get('/index.php/home/member/userInfo').then(res => {
				that.userInfo = res
            }).catch(function (error) {
                console.log(error)
            })
            
        },
        onCopy () {
            toast('复制成功')
        },
        onHiddenAdd () {
            this.isVisibleAdd = !this.isVisibleAdd
        },
	},
	watch: {}
};
</script>
<style lang="stylus" scoped>
.head
    background-image url('../../assets/img/center/z_mem_tp.jpg')
    background-repeat no-repeat
    background-size 100%
    background-position bottom
    background-color #e3bc91
    height 150px
    .setting
        display flex
        align-items center
        padding 10px 15px 0 15px
        height 35px
        .iocn
            margin-left auto
.nameBox
    display flex
    align-items center
    padding 0 15px
    .img
        flex 0 0 60px
        img 
            width 100%
            display block
            border-radius 100%
    .name
        flex 1
        color #fff
        text-align left
        padding-left 15px
        .username
            font-weight 700
            display flex
            align-items center
            line-height 1.3
            font-size 16px
            .vip
                background-image url('../../assets/img/index/vip.png')
                background-repeat no-repeat
                background-size 100%
                width 30px
                height 18px
                margin-left 5px
        .id
            font-size 13px
            margin-top 8px
            display flex
            align-items center
            line-height 1
            .copy
                font-size 13px
                margin-left 5px
                border solid 1px #fff
                border-radius $border-radius
                padding 2px 5px
.orederNav
    padding 10px 15px
    .box
        background-color #fff
        display flex
        padding 15px 0 0 0
        border-radius $border-radius $border-radius 0 0
        .list
            flex 0 0 18.5%
            .img
                width 28px
                height 28px
                margin auto
                img 
                    width 100%
                    display block
                    margin auto
            .name
                font-size 13px
                font-weight 500
                margin-top 10px
        .border
            border-right solid 1px #f1f1f1
            flex 0 0 26%
    .fapiao
        background-color #fff
        display flex
        color #999
        padding 10px 10px 15px 10px
        border-radius 0 0 $border-radius $border-radius
.toDay
    padding 10px 15px
    text-align left 
    .name
        background-color #fff
        padding 10px
        font-size 14px
        font-weight 500
    .img
        img 
            width 100%
            display block
.shouCang
    padding 10px 15px
    .box
        background-color #fff
        padding 20px 0
        display flex
        .list
            flex 1
            font-size 13px
            border-right solid 1px #f1f1f1
            &:last-child
                border-right none
            .num
                font-size 20px
                font-weight 700
            .img
                font-size 20px
                font-weight 700
            .text
                margin-top 10px
</style>