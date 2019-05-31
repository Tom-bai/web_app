<template>
	<!-- 砍价免费拿 -->
    <div>
        <div class="indexKanFree">
            <div class="banner"><img src="../../../assets/img/index/indexKanFree/111.jpg" alt=""></div>
            <div class="itemMain">
                <div class="itembox" v-if="showList == 1">
                    <div class="listBox">
                        <div class="list" v-for="item in listDD">
                            <div class="img">
                                <img  src="../../../assets/img/index/2222.jpg" alt="">
                            </div>
                            <div class="name">TINCOCO 【2条装】6D薄款任意剪透明丝袜连裤袜</div>
                            <div class="money">
                                <span>￥639 </span>
                                <span class="tip">已抢10件</span>
                            </div>
                            <div class="btn" @click="onHiddenActionSheet">点击免费拿</div>
                        </div>
                    </div>
                </div>
                <div class="itemboxs" v-if="showList == 2">
                    <div class="item" v-for="item in listDD">
                        <div class="img">
                            <img  src="../../../assets/img/index/2222.jpg" alt="">
                        </div>
                        <div class="textbox">
                            <div class="name">TINCOCO 【2条装】6D薄款任意剪透明丝袜连裤袜</div>
                            <div class="progress">
                                <nut-progress :percentage="30" strokeColor="#f1002d" strokeWidth="14" status="active" :textInside="true"></nut-progress>
                                <div class="tip">已抢10件</div>
                            </div>
                            <div class="xianliang">
                                <div>限量10件</div>
                                <div class="xianBtn" @click="onHiddenActionSheet">点击免费拿</div>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="img">
                            <img  src="../../../assets/img/index/2222.jpg" alt="">
                        </div>
                        <div class="textbox">
                            <div class="name">TINCOCO 【2条装】6D薄款任意剪透明丝袜连裤袜</div>
                            <div class="progress">
                            </div>
                            <div class="xianliang">
                                <div class="noProgress">已售<span>25万</span>件</div>
                                <div class="xianBtn" @click="onHiddenActionSheet">点击免费拿</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flxedBottom">
                <div class="list" @click="onKanMy(1)">砍价商品</div>
                <div class="list" @click="onKanMy(2)">我的砍价</div>
            </div>
        </div>
        <nut-actionsheet :is-visible="isVisible" @close="onHiddenActionSheet" :isClickCloseMask="false">
            <div slot="custom" class="custom-wrap">
                <div class="actionsheetBox">
                    <div class="header">
                        <div class="img"><img src="../../../assets/img/index/2222.jpg" alt=""></div>
                        <div class="text">
                            <div class="money">￥10</div>
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
</template>

<script>
// @ is an alias to /src
import { get } from '@/axiosApi'
import Bus from '@/bus.js'
import SelectAddress from '@/components/SelectAddress'
export default {
	name: "indexKanFree",
	components: {
        SelectAddress
	},
	props: [],
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
	mounted() {
        this.$Bus.$on('addressShowB', (val) => { // 分类
            this.addressShow = val
        }) 
        this.$Bus.$on('dialogShow', (val) => { // 分类
            this.addressShow = val
            this.isVisible = val
            document.body.classList.remove('scrollFixed')
            document.scrollingElement.scrollTop = this.scrollTop
        }) 
    },
    created(){
    },
    beforeDestroy() {
        this.$Bus.$off('addressShowB')
        this.$Bus.$off('dialogShow')
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
        getList () { // nav导航分类
            let that = this
            let params = {
                type: that.$route.query.id
            }
			get('/index.php/home/index/manjian_cate',params).then(res => {
                console.log(res);
                that.dataList = res
            }).catch(function (error) {
                console.log(error)
            })
        },
	},
	watch: {}
};
</script>
<style lang="stylus" scoped>
.banner
    img 
        width 100%
        display block
.itemMain
    margin-bottom 50px
    .listBox
        display flex
        align-items center
        flex-wrap wrap 
        justify-content flex-start
        padding 3%
        .list
            flex 0 0 48.5%
            text-align left 
            background-color #fff
            border-radius $border-radius
            margin-bottom 10px
            margin-right 3%
            &:nth-child(2n+0)
                margin-right 0
            .img
                img
                    width 100%
                    display block
                    border-radius $border-radius $border-radius 0 0
            .name
                overflow hidden
                text-overflow ellipsis
                display -webkit-box
                -webkit-box-orient vertical
                -webkit-line-clamp 2
                white-space initial
                font-weight 400
                padding 5px 5px 0 5px
            .money
                font-size 16px
                color $color
                font-weight bold
                padding 2px 5px
                display flex
                align-items center
                line-height 1
                margin 5px 0
                .yuan
                    font-size 12px
                    font-weight normal
                    color #858585
                    text-decoration line-through
                    margin-left 5px
                .tip
                    color $color
                    margin-left 10px
                    font-size 12px
                    font-weight normal
            .btn
                background-color $background-color
                color #fff
                text-align center
                line-height 25px
                width 80%
                margin 2px auto 10px auto
                border-radius $border-radius
    .itemboxs
        background-color #fff
        padding 10px 0
        .item
            display flex
            text-align left
            margin-bottom 10px
            .img
                flex 0 0 120px
                img 
                    width 100%
                    border-radius $border-radius
                    display block
            .textbox
                padding 0 10px
                border-bottom solid 1px #f1f1f1
                .name
                    font-size 14px
                    font-weight 500
                    overflow hidden
                    text-overflow ellipsis
                    display -webkit-box
                    -webkit-box-orient vertical
                    -webkit-line-clamp 2
                    white-space initial
                .progress
                    display flex
                    align-items center
                    height 40px
                    >>>.nut-progress
                            text-align center
                            flex 1
                    .tip
                        color $color
                        margin-left 10px
                .xianliang
                    font-size 14px
                    color $color
                    display flex
                    align-items center
                    .noProgress
                        span
                            font-size 18px
                            font-weight 500
                            padding 0 2px
                    .xianBtn
                        margin-left auto
                        font-size 13px
                        color #ffffff
                        background-color $background-color
                        border-radius $border-radius
                        line-height 1
                        padding 8px 10px
.flxedBottom
    position fixed
    width 100%
    left 0
    bottom 0
    height 50px
    display flex
    align-items center
    background #fff
    z-index 6
    border-top solid 1px #f1f1f1
    .list
        flex 1
        font-size 14px
        line-height 50px
        border-right solid 1px #f1f1f1
        &:last-child
            border-right none
.custom-wrap
    background-color #fff
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