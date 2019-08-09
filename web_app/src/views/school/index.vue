<template>
	<!-- 培训学堂 -->
	<div> 
		<div class="school"> 
            <div class="swiper">
                <van-swipe :autoplay="3000">
                    <van-swipe-item v-for="(item, index) in bannerData" :key="index" class="swiperImg">
                        <img v-lazy="$imgUrl + item.img" />
                    </van-swipe-item>
                </van-swipe>
            </div>
            <div class="navigation">
                <a class="list" href="child.html">新人手册</a>
                <a class="list" href="child.html">新人手册</a>
                <a class="list" href="child.html">新人手册</a>
                <a class="list" href="child.html">新人手册</a>
                <a class="list" href="child.html">新人手册</a>
                <a class="list" href="child.html">新人手册</a>
            </div>
            <div class="main">
                <div class="main_list" v-for="(item, index) in bannerData">
                    <a href="article.html">
                        <div class="img"><img src="../../assets/img/shool/main1.jpg" alt=""></div>
                        <div class="text">
                            <div class="name">捕手时代2019  肆月刊捕手时代2019  肆月刊捕手时代2019  肆月刊捕手时代2019  肆月刊捕手时代2019  肆月刊</div>
                            <div class="time">
                                <div>2019-02-26</div>
                                <div>捕手热点</div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>  
	</div>
</template>

<script>
// @ is an alias to /src
import { Swipe, SwipeItem } from 'vant'
import { get } from '@/axiosApi'
export default {
	name: "school",
	components: {
        [Swipe.name]: Swipe,
        [SwipeItem.name]: SwipeItem,
	},
	props: [],
	data () {
		return {
            bannerData: [],
		}
	},
	mounted() {
        this.getBanner()
    },
    destroyed () {
       
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
        getBanner () { // 获取banner数据
			let that = this
			get('/index.php/home/index/banner').then(res => {
				that.bannerData = res
            }).catch(function (error) {
                console.log(error)
            })
        },
	},
	watch: {}
};
</script>
<style lang="stylus" scoped>
.school
    .swiperImg
        img 
            display block
            width 100%
            height 170px
    .navigation
        display flex
        align-items center
        justify-content space-between
        flex-wrap wrap
        margin-top 10px
        padding 0 15px
        .list
            background-repeat no-repeat
            background-size 100% 100%
            width 2.8rem
            height 1.33rem
            line-height 1.33rem
            color #fff
            text-align center
            font-size .4rem
            margin-bottom .33rem
            background-image url('../../assets/img/shool/list1.png')
    .main
        padding 0 15px
        margin-top .13rem
        .main_list
            display flex
            border-bottom solid 1px #f1f1f1
            padding .4rem 0
            a
                display inherit
                color #000
            &:last-child
                border-bottom: 0
            .img
                flex 0 0 105px
                height 1.87rem
                img
                    display block
                    width 100%
                    height 100%
            .text
                flex 1
                line-height 1.3
                padding-left .2rem
                .name
                    font-size .4rem
                    font-weight 500
                    display -webkit-box
                    -webkit-box-orient vertical
                    -webkit-line-clamp 2
                    overflow hidden
                    height 1rem
                    text-align left
                .time
                    height .93rem
                    display flex
                    align-items flex-end
                    color #6b6b6b
                    div
                        margin-right .27rem
</style>