<template>
	<!-- 导航中的商品 -->
    <div>
        <div class="indexNavgoodsThree">
            <div class="head">
                <img src="../../../assets/img/index/111.jpg" alt="">
            </div>
            <!-- <div class="tab">
                <div class="list" :class="tabActive == null?'tabActive':''" @click="onUpAndDwom">
                    <span>价格</span>
                    <span>
                        <i class="up" :class="jActive && tabActive == null?'jActiveU':''"></i>
                        <i class="down" :class="!jActive && tabActive == null?'jActiveD':''"></i>
                    </span>
                </div>
                <div class="list" :class="tabActive == 1?'tabActive':''" @click="onNewAndJ(1)">上新</div>
                <div class="list" :class="tabActive == 0?'tabActive':''" @click="onNewAndJ(0)">综合</div>
                <div class="list" @click="onMore"><i class="more" :class="list?'':'noMore'"></i></div>
            </div> -->
            <div class="listMain" v-if="list">
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
                        </div>
                    </div>
                </nut-infiniteloading>
            </div>
            <div class="itemMain" v-else>
                <nut-infiniteloading @loadmore="onInfinite" :is-show-mod="true"  :is-loading="isLoading" :threshold="200" :has-more="isHasMore">
                    <div class="itembox">
                        <div class="item" v-for="item in dataList" @click="onRouter('/ProductDetails',item.id)">
                            <div class="img">
                                <img v-lazy="$imgUrl + item.img" alt="">
                            </div>
                            <div class="textbox">
                                <div class="money">
                                    <span class="vip"></span>
                                    <span> ¥{{item.price}}</span>
                                </div>
                                <div class="name">{{item.title}}</div>
                            </div>
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
import NavThree from '@/components/NavThree'
export default {
	name: "indexNavgoodsThree",
	components: {
        NavThree: NavThree
	},
	props: [],
	data () {
		return {
            dataList: [],
            navData: [],
            lisdId: this.$route.query.id,
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
        onInfinite () { // 上拉更多
            let that = this
            if (that.isHasMore) {
                that.isLoading = true
                that.isLoading = false
                that.isHasMore = false
                // that.limit++
                // that.getList()
                
            }
        },
        onMore () {
           this.list = !this.list 
        },
        onNewAndJ (val) { // 上新
            this.isnew = val
            this.dataList = []
            this.tabActive = val
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
            setTimeout(() => {
                this.getList()
            }, 100);
        },
        getList (id) { // 商品list
            let that = this
            let params = {
                id: this.lisdId,
                isprice: that.isprice,
                pricetype: that.pricetype,
                isnew: that.isnew,
            }
			get('/index.php/home/goods/getChildGoods',params).then(res => {
                if (res.length == undefined) {
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
    img
        display block
        width 100%
.tab
    display flex
    align-items center
    height 45px
    background-color #fff
    position sticky
    top 0
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
                    height 110px
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