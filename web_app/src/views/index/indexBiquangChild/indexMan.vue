<template>
	<!-- 新品上市 -->
    <div>
        <div class="indexMan">
            <div class="banner"><img src="../../../assets/img/index/indexBiquangChild/111.jpg" alt=""></div>
            <Nav></Nav>
            <div class="main">
                <nut-infiniteloading @loadmore="onInfinite" :is-show-mod="true"  :is-loading="isLoading" :threshold="200" :has-more="isHasMore">
                    <div class="listBox">
                        <div class="list" v-for="(item,index) in dataList">
                            <div class="img">
                                <img  v-lazy="$imgUrl + item.img" alt="">
                            </div>
                            <div class="name">{{item.title}}</div>
                            <div class="money">
                                <span>￥{{item.show_price}}</span><span class="yuan">￥{{item.u_price}}</span>
                            </div>
                            <div class="btn">立即购买</div>
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
            dataList: [],
            isHasMore: true,
            isLoading: false,
		}
	},
	mounted() {
        this.getData()
    },
	methods: {
        onInfinite () {
            let that = this
            if (that.isHasMore) {
                that.isLoading = true
                that.limit++
                that.getData()
            }
        },
        getData () {
            let that = this
            let params = {
                limit: that.limit
            }
			get('/index.php/home/news/new_goods',params).then(res => {
                if (res.length > 0) {
                    that.dataList = that.dataList.concat(res)
                    that.isLoading = false
                } else {
                    that.isLoading = false
                    that.isHasMore = false
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
.indexMan
    .banner
        img 
            width 100%
            display block
    .main
       .listBox
            display flex
            align-items center
            flex-wrap wrap 
            justify-content space-between
            padding 10px
        .list
            flex 0 0 31.2222%
            text-align left 
            background-color #fff
            border-radius $border-radius
            margin-bottom 10px
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