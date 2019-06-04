<template>
	<!-- 满件减活动 -->
    <div>
        <div class="indexMan">
            <div class="banner" v-if="dataNav.banner"><img v-lazy="$imgUrl + dataNav.banner.img" :alt="dataNav.banner.title"></div>
            <Nav :dataNav="dataNav.cate" v-if="dataNav.cate"></Nav>
            <div class="main">
                <nut-infiniteloading @loadmore="onInfinite" :is-show-mod="true"  :is-loading="isLoading" :threshold="200" :has-more="isHasMore">
                    <div class="listBox" v-if="dataList.length > 0">
                        <div class="list" v-for="(item,index) in dataList">
                            <div class="img">
                                <img  v-lazy="$imgUrl + item.img" alt="">
                            </div>
                            <div class="name">{{item.title}}</div>
                            <div class="money">
                                <span>¥{{item.price}}</span><span class="yuan">¥{{item.u_price}}</span>
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
	name: "indexMan",
	components: {
        Nav
	},
	props: [],
	data () {
		return {
            limit: 1,
            dataNav: [],
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
        this.$Bus.$on('navBtn', (val) => { // 分类
            this.dataList = []
            this.getNavId = val
            this.limit = 1
            console.log('满件减');
            this.getDataJJ()
        }) 
    },
    beforeDestroy() {
        //组件销毁前需要解绑事件。否则会出现重复触发事件的问题
        this.$Bus.$off('navBtn');
    },
	methods: {
        onInfinite () { //加载更多
            let that = this
            if (that.myHasMore) {
                that.limit++
                that.isLoading = true
                that.myHasMore = false
                that.getDataJJ()
            }
        },
        getList () { // nav导航分类
            let that = this
            let params = {
                type: that.$route.query.id
            }
			get('/index.php/home/index/manjian_cate',params).then(res => {
                that.dataNav = res
                that.getNavId = that.dataNav.cate[0].id
                that.getDataJJ()
            }).catch(function (error) {
                console.log(error)
            })
        },
        getDataJJ () { // 商品列表 满件减
            let that = this
            let params = {
                limit: that.limit,
                id: that.getNavId
            }
			get('/index.php/home/index/manjian',params).then(res => {
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
.banner
    img 
        width 100%
        display block
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
            padding 2px 5px
            .yuan
                font-size 12px
                font-weight normal
                color #858585
                text-decoration line-through
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