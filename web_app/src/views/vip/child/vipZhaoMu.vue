<template>
	<!-- 会员招募 -->
    <div>
        <div class="vipZhaoMu">
            <div class="banner"><img src="../../../assets/img/vip/zhaobanner.png" alt=""></div>
            <div class="listMain">
                <div class="listBox">
                    <div class="list" v-for="(item,index) in dataList" @click="onRouter('/vipBuyLeGo',index)">
                        <div class="img">
                            <img v-lazy="$imgUrl" alt="">
                        </div>
                        <div class="name">泰国原液乳胶舒适无痕乳胶文胸【2套4件】</div>
                        <div class="money">
                            <span>¥399</span>
                            <span class="yuan">¥399</span>
                        </div>
                    </div>
                </div>
                <div class="gengDuo"><img src="../../../assets/img/vip/g.png" alt=""></div>
                <div class="x"></div>
            </div>
            <div class="nav">
                <img src="../../../assets/img/vip/2e5843c84540a.webp" alt="">
            </div>
            <div class="man">
                <img src="../../../assets/img/vip/723c4f04ee4f3e4d855a2947d485c5d7.webp" alt="">
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import { get } from '@/axiosApi'
export default {
	name: "vipZhaoMu",
	components: {
	},
	props: [],
	data () {
		return {
            isLoading: false,
            isHasMore: false,
            dataList: new Array(6)
		}
	},
	mounted() {
    },
	methods: {
        getList () { // 商品list
            let that = this
            let params = {}
			get('/index.php/home/goods/getChildGoods',params).then(res => {
                that.dataList = res
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
	},
	watch: {}
};
</script>
<style lang="stylus" scoped>
.vipZhaoMu
    .banner
        img 
            width 100%
            display block
    .listMain
        background linear-gradient(225deg,#3d3f46,#1c1c1c)
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
            padding 3% 3% 0 3%
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
                    height 175px
                    img
                        width 100%
                        height 100%
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
                    line-height 1.4
                    height 35px
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
        .gengDuo
            padding 20px 0
            img 
                display block
                width 45%
                margin auto
        .x
            background-image url('../../../assets/img/vip/x.png')
            background-size contain
            height 10px
            width 100%
    .nav
        img 
            display block
            width 100%
            margin auto
    .man
        img 
            display block
            width 100%
            margin auto
</style>