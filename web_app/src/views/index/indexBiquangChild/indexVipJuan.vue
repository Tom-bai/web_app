<template>
	<!-- 满件减活动 -->
    <div>
        <div class="indexVipQuan">
            <div class="banner" v-if="dataList.banner"><img v-lazy="$imgUrl + '/Uploads/' + dataList.banner.img" alt=""></div>
            <div class="newTop">
                <div class="topName" v-if="dataList.thisProm">
                    <div>{{dataList.thisProm.title}}</div>
                </div>
                <div class="main">
                    <div class="list" v-for="item in listDD">
                        <div class="img"><img src="../../../assets/img/index/2222.jpg" alt=""></div>
                        <div class="text">
                            <div class="name">人见人爱，超高人气</div>
                            <div class="tip">Freeplus 芙丽芳丝 净润洗面霜 100克</div>
                            <div class="money">
                                <span class="num">￥asd</span>
                                <span class="new">新人专享</span>
                            </div>
                        </div>
                        <div class="lijiBtn">立即抢购</div>
                    </div>
                </div>
            </div>
            <div class="baoKuan">
                <div class="topName" v-if="dataList.thisProm">
                    <div>{{dataList.thisProm.title}}</div>
                </div>
                <div class="listBox">
                    <div class="list" v-for="(item,index) in listDD">
                        <div class="img">
                            <img  src="../../../assets/img/index/2222.jpg" alt="">
                        </div>
                        <div class="name">TINCOCO 【2条装】6D薄款任意剪透明丝袜连裤袜</div>
                        <div class="money">
                            <span>￥639 </span>
                            <span class="vip"></span>
                        </div>
                        <div class="btn">立即购买</div>
                    </div>
                </div>
            </div>
        </div>
     </div>
</template>

<script>
// @ is an alias to /src
import { get } from '@/axiosApi'
export default {
	name: "indexVipQuan",
	components: {
	},
	props: [],
	data () {
		return {
            dataList: [],
            listDD: new Array(5)
        }
	},
	mounted() {
        this.getList()
    },
    created(){
    },
    beforeDestroy() {
    },
	methods: {
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
.newTop
    .topName
        display flex
        align-items center
        font-size 16px
        font-weight bold
        height 40px
        justify-content center
    .main
        padding 0 15px
        .list
            display flex
            align-items center
            text-align left
            background-color #fff
            border-radius $border-radius
            padding 10px 0
            margin-bottom 10px
            .img
                flex 0 0 70px
                margin 0 10px
                img 
                    width 100%
                    display block
                    border-radius $border-radius
            .text
                flex 1
                .name
                    font-weight 700
                    color #000
                    font-size 14px
                    text-overflow ellipsis
                    display -webkit-box
                    -webkit-line-clamp 1
                    -webkit-box-orient vertical
                    overflow hidden
                .tip
                    font-weight 400
                    color #000
                    font-size 13px
                    text-overflow ellipsis
                    display -webkit-box
                    -webkit-line-clamp 1
                    -webkit-box-orient vertical
                    overflow hidden
                    margin  5px 0
                .money
                    display flex
                    align-items center
                    color $color
                    .new
                        font-weight normal
                        margin-right 5px
                        border solid 1px $color
                        border-radius $border-radius
                        padding 2px 10px
                        margin-left 10px
                    .num
                        font-size 16px
                        font-weight 700
            .lijiBtn
                flex 0 0 24px
                height 24px
                border-radius 100%
                background-color $background-color
                color #fff
                line-height 1
                text-align center
                padding 10px
                margin 0 10px
.baoKuan
    .topName
        display flex
        align-items center
        font-size 16px
        font-weight bold
        height 40px
        justify-content center
    .listBox
        display flex
        align-items center
        flex-wrap wrap 
        justify-content flex-start
        padding 2%
        .list
            flex 0 0 32%
            text-align left 
            background-color #fff
            border-radius $border-radius
            margin-bottom 10px
            margin-right 2%
            &:nth-child(3n+0)
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
                .vip
                    background-image url('../../../assets/img/index/vip.png')
                    background-repeat no-repeat
                    background-size 100%
                    width 25px
                    height 14px
                    margin-left 5px
            .btn
                background-color $background-color
                color #fff
                text-align center
                line-height 25px
                width 80%
                margin 2px auto 10px auto
                border-radius $border-radius
</style>