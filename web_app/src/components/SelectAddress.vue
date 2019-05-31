<template>
	<div>
        <div class="SelectAddress">
            <div class="header">选择收货地址<i class="close" @click="onAddressShow"></i></div>
            <div class="listBox">
                <div class="list" v-for="item in addressData" @click="onClickAddress">
                    <div class="text">
                        <div class="name">白白白，18578640282</div>
                        <div class="address">广东省广州市天河区</div>
                    </div>
                    <div class="rightJ"></div>
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
export default {
	name: 'SelectAddress',
    props: {},
    components: {
        Address
	},
	data () {
		return {
            addressData: new Array(5),
            addressAddShow: false
		}
	},
	methods: {
        onRouter (pathUrl,id) {
			this.$router.push({
				path: pathUrl,
				query: {}
			})
		},
        onAddressShow() { 
            Bus.$emit('addressShowB', false)
        },
        onClickAddress () { //确定地址
            Bus.$emit('dialogShow', false)
            this.$dialog({
                title: "请确认您的收货地址",
                content: "白白白，18578640282，广东省广州市天河区",
                onOkBtn(event) {  //确定按钮点击事件
                    this.close(); //关闭对话框
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
                    margin-bottom 5px
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
</style>
