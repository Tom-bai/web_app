<template>
	<div>
        <div class="Address">
            <div class="header">{{$route.query.type == 'onReviseAdd'?'修改收货地址':'新建收货地址'}}</div>
            <div class="main">
                <div class="name">
                    <nut-textinput 
                        v-model="name"
                        placeholder="收货人姓名（请使用真实姓名）"
                        :clearBtn="true"
                        :disabled="false"
                        :hasBorder="false"
                    />
                </div>
                <div class="name">
                    <nut-textinput 
                        v-model="phone"
                        placeholder="手机号码"
                        type="number"
                        :clearBtn="true"
                        :disabled="false"
                        :hasBorder="false"
                    />
                </div>
                <div class="name" @click="onAddressShow">
                    <nut-textinput 
                        v-model="city"
                        placeholder="选择地区"
                        type="text"
                        :readonly="true"
                        :clearBtn="true"
                        :hasBorder="false"
                    />
                </div>
                <div class="name">
                    <nut-textinput 
                        v-model="jiedao"
                        placeholder="街道，小区等详情地址"
                        :clearBtn="true"
                        :disabled="false"
                        :hasBorder="false"
                        class="jiedao"
                    />
                </div>
                <div class="name">
                    <nut-cell  title = "设置为默认地址" > <nut-switch :active="active" @change="onChange" slot="desc"></nut-switch></nut-cell>
                </div>
            </div>
            <div class="btn" @click="onReviseAdd" v-if="$route.query.type == 'onReviseAdd'">修改</div>
            <div class="btn" @click="onAdd" v-else>保存</div>
            <!-- 选择地址 -->
            <nut-actionsheet :is-visible="addressShow" @close="onAddressShow" :isClickCloseMask="true">
                <van-area :area-list="areaList" slot="custom" confirm-button-text="完成" @confirm="onConfirm" @cancel="onCancel" />
            </nut-actionsheet>
        </div>
	</div>
</template>

<script>
import { Area } from 'vant'
import Bus from '@/bus.js'
import AddressInfo from '../assets/js/area'
import { get,post,toast } from '@/axiosApi'
export default {
	name: 'Address',
    props: {},
    components: {
        [Area.name]: Area,
	},
	data () {
		return {
            name: null,
            phone: null,
            city: null,
            jiedao: null,
            addressShow:false,
            default: 0,
            active: false,
            areaList: AddressInfo,
		}
    },
    mounted() {
        if (this.$route.query.type == 'onReviseAdd') {
            this.name = JSON.parse(this.$route.query.data).name
            this.phone = JSON.parse(this.$route.query.data).mobile
            this.city = JSON.parse(this.$route.query.data).address
            this.jiedao = JSON.parse(this.$route.query.data).address
            this.default = JSON.parse(this.$route.query.data).default
            if (this.default == 0) {
                this.active = false
            } else {
                this.active = true
            }
        }
    },
	methods: {
        onAdd () { // 添加地址
            let that = this
            let params = { 
                name: that.name,
                mobile: that.phone,
                address: that.city,
                add_info: that.jiedao,
                defaultAddr: that.default,
            }
			post('/index.php/home/member/ajax_add_address',params).then(res => {
                if (res.err == 1) {
                    toast(res.data)
                } else {
                    toast(res.data)
                    setTimeout(() => {
                        that.$router.go(-1)
                    }, 1500);
                }
            }).catch(function (error) {
                console.log(error)
            })
        },
        onReviseAdd () { // 修改地址
            let that = this
            let params = { 
                id: JSON.parse(this.$route.query.data).id,
                name: that.name,
                mobile: that.phone,
                address: that.city,
                add_info: that.jiedao,
                defaultAddr: that.default,
            }
            console.log(params);
            
			post('/index.php/home/member/ajax_save_address',params).then(res => {
                if (res.err == 1) {
                    toast(res.data)
                } else {
                    toast(res.data)
                    setTimeout(() => {
                        that.$router.go(-1)
                    }, 1500);
                }
            }).catch(function (error) {
                console.log(error)
            })
        },
        onChange(status) {
            if (status) {
                this.default = 1
            } else {
                this.default = 0
            }
        },
        onAddressShow() { // 选择地址
            this.addressShow = !this.addressShow
        },
        onConfirm (data) { // 地址确定
            this.addressShow = !this.addressShow
            this.city = data[0].name + ' ' + data[1].name + ' ' + data[2].name 
            
        },
        onCancel () { // 地址取消
            this.addressShow = !this.addressShow
        },
    },
    watch: {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.Address
    position fixed
    width 100%
    height 100%
    top 0
    left 0
    overflow-y auto
    z-index 99
    background-color #f5f5f5
    .header
        line-height 50px
        font-size 14px
        font-weight 500
        border-bottom solid 1px #f1f1f1
        background-color #fff
    .main
        padding 0 15px
        background-color #fff
        .name
            border-bottom solid 1px #f1f1f1
            text-align left 
            >>>.nut-cell
                background none
            &:last-child
                border-bottom none
.btn
    background-color $background-color
    color #fff
    text-align center
    line-height 35px
    width 50%
    font-size 14px
    margin 30px auto 0px auto
    border-radius $border-radius
.distpicker
    height 300px
    overflow-y scroll
    >>>.address-header
            position absolute
            width 100%
            left 0
            top 0
    >>>.address-container
            margin-top 40px
</style>
