<template>
	<!-- 二级导航商品 -->
    <div>
        <div class="indexNavgoodsOne">
            <van-swipe :autoplay="3000">
                <van-swipe-item v-for="(item, index) in bannerData" :key="index" class="swiperImg">
                    <img v-lazy="$imgUrl + item.img" />
                </van-swipe-item>
            </van-swipe>
            <div class="navBtnbox">
                <div class="navBtn">
                    <div class="list" v-for="(item,index) in navData" :key="index" @click="onRouter('/indexNavgoodsThree',item.id,$route.query.id,index)">
                        <div><img v-lazy="$imgUrl + item.img" alt=""></div>
                        <div>{{item.name}}</div>
                    </div>
                </div>
            </div>
        </div>   
        <div class="content">
            <div class="head" v-if="msg">
                <div class="headName">{{msg.name}}</div>
                <div class="tip">更多精彩内容，点击查看</div>
            </div>
            <div class="container">
                <div class="list" v-for="(list,index) in dataLeft" :key="index" @click="onRouter('/indexNavgoodsThreeList',146)">
                    <div class="img"><img v-lazy="$imgUrl" alt=""></div>
                    <div class="name">衣服等商品衣服等商品衣服等商品衣服等商品衣服等商品</div>
                    <div class="money">
                        <div>¥110</div>
                        <div class="vip"></div>
                    </div>
                </div>
                <div class="list">
                    <img src="../../../assets/img/index/all2.png" alt="">
                </div>
            </div>
        </div>
        <Like :likeData="likeData" v-if="likeData" class="like"></Like> 
    </div>
</template>

<script>
// @ is an alias to /src
import { Swipe, SwipeItem } from 'vant'
import { get } from '@/axiosApi'
import Like from '@/components/LikeChild'
export default {
	name: "indexNavgoodsOne",
	components: {
        [Swipe.name]: Swipe,
        [SwipeItem.name]: SwipeItem,
        Like
	},
	props: [],
	data () {
		return {
            bannerData: [],
            navData: [],
            likeData: [],
            msg: null,
            dataLeft: new Array(5)
        }
	},
	mounted() {
        this.getBanner()
        this.getNav()
        this.getLike()
        this.getLeftGoods()
    },
    destroyed () {
    },
    created(){
    },
    beforeDestroy() {
    },
	methods: {
        onRouter (pathUrl,id,navId,index) {
			this.$router.push({
				path: pathUrl,
				query: {
                    id: id,
                    navId: navId,
                    index: index
				}
			})
		},
        getBanner () { // 获取banner数据
			let that = this
			get('/index.php/home/index/banner').then(res => {
				that.bannerData = res
            }).catch(function (error) {
                console.log(error)
            })
        },
        getNav() { // 获取二级分类nav
            let that = this
            let params = {
                id: that.$route.query.id
            }
			get('/index.php/home/goods/getChildCate',params).then(res => {
                that.navData = res
            }).catch(function (error) {
                console.log(error)
            })
        },
        getLike() { // 大象宝贝
            let that = this
            let params = {
                id: that.$route.query.id
            }
			get('/index.php/home/goods/second_cate_like',params).then(res => {
                that.likeData = res
            }).catch(function (error) {
                console.log(error)
            })
        },
        getLeftGoods() { // 获取滑动商品信息
            let that = this
            let params = {
                id: that.$route.query.id
            }
            get('/index.php/home/goods/cateInfo',params).then(res => {
                that.msg = res
            }).catch(function (error) {
                console.log(error)
            })
			get('/index.php/home/goods/info_by_cate',params).then(res => {
                console.log(res);
            }).catch(function (error) {
                console.log(error)
            })
        },
	},
	watch: {}
};
</script>
<style lang="stylus" scoped>
.swiperImg
    img 
        display block
        width 100%
        height 170px
>>>.van-swipe__indicator
    width 15px
    height 4px
    border-radius 0
>>>.van-swipe__indicator--active
    background-color  $background-color
.navBtnbox
    .navBtn
        display flex
        align-items center
        flex-wrap wrap
        padding 15px 15px 5px 15px
        background-color #fff
        .list
            flex 0 0 20%
            margin-bottom 10px
            img
                width 50px
                height 50px
                border-radius 100%
                display block
                margin auto auto 5px auto
.content
    margin-top 10px
    .head
        background-color #fff
        padding 10px 0
        .headName
            font-size 16px
            font-weight 700
        .tip
            font-size 12px
            color #999
            margin-top 5px
    .container
        display flex
        align-items: center
        width 100%
        overflow-x scroll
        -webkit-overflow-scrolling touch
        &::-webkit-scrollbar 
            display:none
        .list
            flex 0 0 26%
            border none
            border-right none
            padding 10px 10px 10px 0
            background-color #fff
            height 170px
            &:first-child
                border-radius $border-radius 0 0 $border-radius
                padding-left 10px
            &:last-child
                padding 10px 10px 10px 0
                border-radius 0 $border-radius $border-radius 0
                img
                    width 100%
                    background-color #fff
                    height 100%
                    border-radius $border-radius
            .img
                width 100px
                height 100px
                display flex
                img
                    width 100px
                    height 100px
                    display block
                    border-radius $border-radius
                    margin auto
                img[lazy=loading] 
                    width 20px
                    height 20px
            .name
                overflow hidden
                text-overflow ellipsis
                display -webkit-box
                -webkit-line-clamp 2
                -webkit-box-orient vertical
                margin 5px 0
                line-height 1.5
                text-align left
            .money
                color $color
                font-size 14px
                font-weight bold
                background-color #fff
                display flex
                align-items center
                justify-content center
                line-height 1
                margin-top 10px
                .vip
                    background-image url('../../../assets/img/index/vip.png')
                    background-repeat no-repeat
                    background-size 100%
                    width 25px
                    height 14px
                    margin-left 5px
.like
    margin 10px 0
</style>