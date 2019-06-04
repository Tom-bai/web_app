<template>
	<div>
        <div class="SelectionDetails">
            <!-- 选择框 -->
            <nut-actionsheet :is-visible="isVisible" @close="onHiddenActionSheet" :isClickCloseMask="false">
                <div slot="custom" class="custom-wrap">
                    <div class="actionsheetBox">
                        <div class="header">
                            <div class="img"><img src="../../../assets/img/index/2222.jpg" alt=""></div>
                            <div class="text">
                                <div class="money">¥10</div>
                                <div class="tip">请选择 款式 颜色</div>
                                <div class="close" @click="onHiddenActionSheet"></div>
                            </div>
                        </div>
                        <div class="main">
                            <div class="xuanBox">
                                <div class="name">款式</div>
                                <div class="listBox">
                                    <div class="item" :class="kuanshiActive == index?'active':''" v-for="(item,index) in kuanShiData" @click="onClickItemK(index)">纯棉布料</div>
                                </div>
                            </div>
                            <div class="xuanBox">
                                <div class="name">颜色</div>
                                <div class="listBox">
                                    <div class="item" :class="YanSeActive == index?'active':''" v-for="(item,index) in kuanShiData" @click="onClickItemS(index)">纯棉布料</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="btn" @click="onAddressShow">确定</div>
                    <!-- 选择地址 -->
                    <nut-actionsheet :is-visible="addressShow" @close="onAddressShow" :isClickCloseMask="false">
                        <SelectAddress slot="custom"></SelectAddress>
                    </nut-actionsheet>
                </div>
            </nut-actionsheet>
        </div>
	</div>
</template>

<script>
import { Area } from 'vant'
import Bus from '@/bus.js'
import AddressInfo from '../assets/js/area'
import SelectAddress from './SelectAddress'
export default {
	name: 'SelectionDetails',
    props: {},
    components: {
        [Area.name]: Area,
        SelectAddress
	},
	data () {
		return {
            dataList: [],
            listDD: new Array(6),
            kuanShiData: new Array(6),
            kuanshiActive: null,
            YanSeActive: null,
            list: true,
            isVisible: false,
            addressShow: false,
            scrollTop: null,
            showList: 1
		}
    },
    created() {
    
    },
	methods: {
        onKanMy (val) {
            this.showList  = val
        },
        onAddressShow() { // 选择地址
            this.addressShow = !this.addressShow
        },
        onHiddenActionSheet() { // 选择款式
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
        onClickItemK (index) {
            this.kuanshiActive = index
        },
        onClickItemS (index) {
            this.YanSeActive = index
        },
    },
    watch: {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.actionsheetBox
    padding 0 15px
    margin-bottom 20px
    .header
        display flex
        align-items center
        border-bottom solid 1px #f1f1f1
        .img
            flex 0 0 90px
            margin-top -40px
            img 
                width 100%
                display block
                border solid 1px #999
                border-radius $border-radius
        .text
            text-align left 
            padding 10px 0 20px 15px
            position relative
            flex 1
            .money
                font-size 16px
                color $color
                margin-bottom 5px
            .close
                background-image url('../../../assets/img/x.png')
                width 25px
                height 25px
                background-size 100%
                position absolute
                top 5px
                right 0
    .main
        max-height 400px
        overflow-y scroll
        .xuanBox
            text-align left
            border-bottom solid 1px #f1f1f1
            padding-bottom 8px
            .name
                font-size 14px
                line-height 35px
            .listBox
                display flex
                align-items center
                flex-wrap wrap
                .item
                    background-color #f5f5f5
                    padding 5px 10px
                    border-radius $border-radius
                    margin 0 10px 8px 0
                    border solid 1px #f5f5f5
                .active
                    border solid 1px $color
                    color $color
.btn
    color #ffffff
    font-size 14px
    background-color $background-color
    line-height 45px
</style>
