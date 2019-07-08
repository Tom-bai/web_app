<template>
	<!-- banner商品 -->
    <div>
        <div class="indexBannerGoods">
            <div class="banner" v-if="dataList.banner"><img v-lazy="$imgUrl + dataList.banner.img2" :alt="dataList.banner.alt"></div>
            <div class="topName" v-if="dataList.banner">
                <div>{{dataList.banner.title}}</div>
                <div class="tip">{{dataList.banner.des}}</div>
            </div>
            <div class="main">
                <nut-infiniteloading @loadmore="onInfinite" :is-show-mod="true"  :is-loading="isLoading" :threshold="200" :has-more="isHasMore">
                    <div class="listBox" v-if="dataList.goods">
                        <div class="list" v-for="(item,index) in dataList.goods" :key="index" @click="onRouter('/ProductDetails',item.id)">
                            <div class="img">
                                <img  v-lazy="$imgUrl + item.img" alt="">
                            </div>
                            <div class="name">{{item.title}}</div>
                            <div class="money">
                                <span>¥{{item.price}}</span><span class="vip"></span>
                            </div>
                            <div class="btn">立即购买</div>
                        </div>
                    </div>
                    <div v-else class="nomore">暂无内容</div>
                </nut-infiniteloading>
            </div>
        </div>
     </div>
</template>

<script>
// @ is an alias to /src
import { get } from '@/axiosApi'
import Nav from '@/components/Nav'
export default {
	name: "indexBannerGoods",
	components: {
        Nav
	},
	props: [],
	data () {
		return {
            limit: 1,
            dataNav: new Array(10),
            dataList: [],
            myHasMore: false,
            isHasMore: true,
            isLoading: false,
            getNavId: ''
		}
	},
	mounted() {
        this.getList()
    },
    created(){
        // this.$Bus.$on('navBtn', (val) => { // 分类
        //     this.dataList = []
        //     this.getNavId = val
        //     this.limit = 1
        //     console.log('满件减');
        //     this.getList()
        // }) 
    },
    beforeDestroy() {
        //组件销毁前需要解绑事件。否则会出现重复触发事件的问题
        this.$Bus.$off('navBtn');
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
        onInfinite () { //加载更多
            let that = this
            if (that.myHasMore) {
                that.limit++
                that.isLoading = true
                that.myHasMore = false
                that.getList()
            }
        },
        getList () { // 获取商品
            let that = this
            let params = {
                id: that.$route.query.id
            }
			get('/index.php/home/index/zhutiInfo',params).then(res => {
                that.dataList = res
            }).catch(function (error) {
                console.log(error)
            })
        },
	},
	watch: {
    }
};
</script>
<style lang="stylus" scoped>
.banner
    img 
        width 100%
        display block
.topName
    display flex
    align-items center
    font-size 16px
    font-weight bold
    height 50px
    margin-top 10px
    padding 0 10px
    border-radius $border-radius $border-radius 0 0
    .tip
        margin-left 15px
        color #999
        font-size 12px
        font-weight normal
.main
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
            padding 4px 5px
            display flex
            align-items center
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
            margin 0px auto 10px auto
            border-radius $border-radius
</style>