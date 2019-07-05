<template>
	<!-- 搜索中的商品 -->
    <div>
        <div class="indexSearchGoods">
            <div class="head">
                <div class="search-box">
                    <div class="search">
                        <div class="input"><span>{{$route.query.id}}</span></div>
                        <div class="back"  @click="onBack">取消</div>
                    </div>
                </div>
            </div>
            <div class="tab">
                <div class="list" :class="tabActive == null?'tabActive':''" @click="onUpAndDwom">
                    <span>价格</span>
                    <span>
                        <i class="up" :class="jActive && tabActive == null?'jActiveU':''"></i>
                        <i class="down" :class="!jActive && tabActive == null?'jActiveD':''"></i>
                    </span>
                </div>
                <div class="list" :class="tabActive == 0?'tabActive':''" @click="onNewAndJ(0)">综合</div>
                <div class="list" :class="tabActive == 1?'tabActive':''" @click="onNewAndJ(1)">销量</div>
            </div>
            <div class="listMain">
                <nut-infiniteloading @loadmore="onInfinite" :is-show-mod="true"  :is-loading="isLoading" :threshold="200" :has-more="isHasMore">
                    <div class="listBox">
                        <div class="list" v-for="(item,index) in dataList" @click="onRouter('/ProductDetails',item.id)">
                            <div class="img">
                                <img v-lazy="$imgUrl + item.img" alt="">
                            </div>
                            <div class="name">{{item.title}}</div>
                            <div class="money">
                                <span>¥{{item.price}} </span>
                                <span class="vip"></span>
                            </div>
                            <div class="liulian">浏览量：{{item.click}}</div>
                        </div>
                    </div>
                </nut-infiniteloading>
            </div>
        </div>
     </div>
</template>

<script>
// @ is an alias to /src
import { get } from '@/axiosApi'
export default {
	name: "indexSearchGoods",
	components: {
	},
	props: [],
	data () {
		return {
            dataList: [],
            list: true,
            tabActive: null,
            jActive: false,
            limit: 1,
            isprice: 1,
            pricetype: 0,
            isnew: 0,
            isLoading: false,
            isHasMore: false
        }
	},
	mounted() {
        this.getList()
    },
    destroyed () {
    },
    created(){
    },
    beforeDestroy() {
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
        onBack (pathUrl,id) {
            this.$router.go(-1)
        },
        onInfinite () { // 上拉更多
            let that = this
            if (that.isHasMore) {
                that.isLoading = true
                that.isLoading = false
                that.isHasMore = false
                that.limit++
                that.getList()
            }
        },
        onNewAndJ (val) { // 上新
            this.isnew = val
            this.dataList = []
            this.tabActive = val
            this.limit = 1
            setTimeout(() => {
                this.getList()
            }, 100);
        },
        onUpAndDwom (val) { // 价格排序
            let newVal  
            if (this.jActive) {
                newVal = 1
            } else {
                newVal = 2
            }
            this.jActive = !this.jActive
            this.pricetype = newVal
            this.dataList = []
            this.tabActive = null
            this.limit = 1
            setTimeout(() => {
                this.getList()
            }, 100);
        },
        getList () { // 商品list
            let that = this
            let params = {
                title: that.$route.query.id,
                limit: that.limit
            }
			get('/index.php/home/search/searchGoods',params).then(res => {
                if (res == null) {
                    that.isLoading = false
                    that.isHasMore = false
                } else {
                    that.dataList = that.dataList.concat(res)
                    that.isLoading = false
                    that.isHasMore = true
                    that.myHasMore = true
                }
            }).catch(function (error) {
                console.log(error)
            })
        },
	},
	watch: {}
};
</script>
<style lang="stylus" scoped>
.head
    position sticky
    top 0
    left 0
    z-index 100
    .search-box
        .search
            display flex
            align-items center
            padding 0 15px
            height 45px
            background-color $background-color
            .head
                img
                    width 28px
                    border-radius 100%
                    display block
            .input
                flex: 1
                background-color #fff
                border solid 1px #fff
                border-radius 20px
                text-align left 
                line-height 25px
                padding 0 34px
                margin 0 10px
                background-image url('../../../assets/img/index/scH.png')
                background-size 15px
                background-position 10px 50%
                background-repeat no-repeat
                color #999
            .back
                color #fff
.tab
    display flex
    align-items center
    height 45px
    background-color #fff
    position sticky
    top 45px
    width 100%
    left 0
    border-bottom solid 1px #f1f1f1
    .list
        flex 1
        font-size 14px
        display flex
        justify-content center
        align-items center
        line-height 1
        .up
            background-image url('../../../assets/img/index/indexNewUp/up.png')
            background-repeat no-repeat
            background-size 100%
            width 10px
            height 10px
            display block
            margin-left 5px
        .down
            background-image url('../../../assets/img/index/indexNewUp/dwon.png')
            background-repeat no-repeat
            background-size 100%
            width 10px
            height 10px
            display block
            margin-left 5px
        .more
            background-image url('../../../assets/img/index/indexNewUp/more1.png')
            background-repeat no-repeat
            background-size 100%
            width 20px
            height 20px
            display inline-block
        .noMore
            background-image url('../../../assets/img/index/indexNewUp/more2.png')
        .jActiveD
            background-image url('../../../assets/img/index/indexNewUp/upc.png')
            transform rotate(180deg)
        .jActiveU
            background-image url('../../../assets/img/index/indexNewUp/upc.png')
    .tabActive
        color $color
.listMain
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
                height 30px
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
            .liulian
                text-align right 
                padding 0px 10px 10px 10px
                font-size 12px
            .btn
                background-color $background-color
                color #fff
                text-align center
                line-height 25px
                width 80%
                margin 2px auto 10px auto
                border-radius $border-radius
.itemMain
    .itembox
        background-color #fff
        .item
            display flex
            text-align left
            .img
                flex 0 0 120px
                img 
                    width 100%
                    border-radius $border-radius
                    display block
            .textbox
                padding 0 10px
                border-bottom solid 1px #f1f1f1
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
                        margin-right 5px
</style>