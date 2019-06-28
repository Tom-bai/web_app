<template>
	<div>
        <div class="SelectAddress">
            <div class="header">选择收货地址<i class="close" @click="onAddressShow"></i></div>
            <div class="listBox">
                <div class="list" v-for="(item,index) in addressData" :key="index">
                    <div class="text" @click="onClickAddress(item)">
                        <div class="name">{{item.name}},{{item.mobile}}  <span class="default" v-if="item.default == 1">默认</span></div>
                        <div class="address">{{item.address}}</div>
                    </div>
                    <div class="right">
                        <div class="bianji" @click="onRouter('/Address','onReviseAdd',item)">编辑</div>
                        <div class="shanchu" @click="onDeleteAdd(item.id,index)">删除</div>
                    </div>
                </div>
                <div class="list" @click="onRouter('/Address')">
                    <div class="text">
                        <div class="name">添加新的收货地址</div>
                    </div>
                    <div class="rightJ"></div>
                </div>
            </div>
        </div>
        <!-- 添加地址 -->
        <transition name="TransitionRight">
            <router-view/>
        </transition>
	</div>
</template>

<script>
import Bus from '@/bus.js'
import Address from './Address'
import { get,post,toast } from '@/axiosApi'
export default {
	name: 'SelectAddress',
    props: {},
    components: {
        Address
	},
	data () {
		return {
            addressData: [],
            addressAddShow: false
		}
    },
    mounted() {
        this.getAddress()
        
    },
	methods: {
        onRouter (pathUrl,id,item) {
			this.$router.push({
				path: pathUrl,
				query: {
                    type: id,
                    data: JSON.stringify(item)
                }
			})
        },
        onReviseAdd () { // 修改地址
            let that = this
            let params = { 
                id: that.$route.query.id
            }
			post('/index.php/home/member/ajax_save_address').then(res => {
                toast('修改成功')
            }).catch(function (error) {
                console.log(error)
            })
        },
        onDeleteAdd (id,index) { // 删除地址
            let that = this
            let params = {
                id: id
            }
			get('/index.php/home/member/ajax_del_address',params).then(res => {
                if (res.err == 1) {
                    toast(res.data)
                } else {
                    toast(res.data)
                    that.addressData.splice(index, 1)
                }
            }).catch(function (error) {
                console.log(error)
            })
        },
        getAddress () { // 获取地址
            let that = this
            let params = {
                id: that.$route.query.id
            }
			get('/index.php/home/member/user_address').then(res => {
                that.addressData = res
            }).catch(function (error) {
                console.log(error)
            })
        },
        onAddressShow() { 
            Bus.$emit('addressShowB', false)
            document.body.classList.remove('scrollFixed')
        },
        onClickAddress (item) { //确定地址
            Bus.$emit('dialogShow', false)
            this.$dialog({
                title: "请确认您的收货地址",
                content: `${item.name},${item.mobile}<br>${item.address}`,
                onOkBtn(event) {  //确定按钮点击事件
                    this.close(); //关闭对话框
                    Bus.$emit('getAddress', item)
                    Bus.$emit('addressShowB', false)
                },
                onCancelBtn(event) {  //取消按钮点击事件，默认行为关闭对话框
                    //return false;  //阻止默认“关闭对话框”的行为
                },
            })
        },
    },
    watch: {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.SelectAddress
    background-color #fff
    .header
        line-height  50px
        font-size 14px
        position relative
        border-bottom solid 1px #f1f1f1
        padding 0 15px
        .close
            background-image url('../assets/img/x.png')
            width 25px
            height 25px
            background-size 100%
            position absolute
            top 8px
            right 15px
    .listBox
        .list
            display flex
            align-items center
            text-align left 
            border-bottom solid 1px #f1f1f1
            height 60px
            padding 0 15px
            .text
                flex 1
                font-size 13px
                .name
                    margin-bottom 8px
                    .default
                        background-color $background-color
                        color #fff
                        border-radius $border-radius
                        line-height 1
                        padding 2px 4px
                .address
                    overflow hidden
                    text-overflow ellipsis
                    display -webkit-box
                    -webkit-box-orient vertical
                    -webkit-line-clamp 1
                    white-space initial
            .right
                flex 0 0 .8rem
                text-align right 
                .bianji
                    font-size 12px
                    margin-bottom 5px
            .rightJ
                background-image url('../assets/img/right.png')
                width 25px
                height 25px
                background-size 100%
</style>
