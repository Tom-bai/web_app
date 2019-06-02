<template>
	<div>
        <div class="Address">
            <div class="header">新建收货地址</div>
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
                    <nut-cell  title = "设置为默认地址" > <nut-switch :active="true" slot="desc"></nut-switch></nut-cell>
                </div>
            </div>
            <div class="btn">保存</div>
            <!-- 选择地址 -->
            <nut-actionsheet :is-visible="addressShow" @close="onAddressShow" :isClickCloseMask="true">
                <van-area :area-list="areaList" slot="custom" />
            </nut-actionsheet>
        </div>
	</div>
</template>

<script>
import { Area } from 'vant'
import Bus from '@/bus.js'
import AddressInfo from '../assets/js/area'
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
            areaList: AddressInfo,
		}
    },
    created() {
    
    },
	methods: {
        onAddressShow() { // 选择地址
            this.addressShow = !this.addressShow
        },
        selected(data){
            this.city = data.province.value + ' ' + data.city.value +' ' + data.area.value
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
    .main
        padding 0 15px
        .name
            border-bottom solid 1px #f1f1f1
            text-align left 
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
