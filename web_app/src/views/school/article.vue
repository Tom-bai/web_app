<template>
	<!-- 培训学堂 -->
	<div> 
		<div class="school"> 
            <div class="header">
                <div class="box">
                    <div class="logo"><img src="../../assets/img/shool/logo.png" alt=""></div>
                    <div class="name">商学院 | <span>捕手风采</span></div>
                    <div class="down" :class="navigation?'cha':'hen'" @click="clickNav"></div>
                </div>
            </div>
            <div class="navigation" v-if="navigation">
                <div class="box">
                    <a class="list_index" @click="onRouter('/school')">商学院首页</a>
                    <div class="list">
                        <a class="list_t" @click="onRouter('/school/child')">新人手册</a>
                        <a class="list_t" @click="onRouter('/school/child')">新人手册</a>
                        <a class="list_t" @click="onRouter('/school/child')">新人手册</a>
                        <a class="list_t" @click="onRouter('/school/child')">新人手册</a>
                        <a class="list_t" @click="onRouter('/school/child')">新人手册</a>
                        <a class="list_t" @click="onRouter('/school/child')">新人手册</a>
                    </div>
                </div>
            </div>
            <div class="article">
                <div class="banner"><img src="../../assets/img/shool/ac1.jpg" alt=""></div>
                <div class="content">
                    <h1>捕手故事|刘淑艳：走向世界，走向内心</h1>
                    <div class="time"><time>2019-03-22</time>往事吧</div>
                    <div class="textbox">
                        <p class="name"><strong>2019.3.22【捕手故事】第九期</strong></p>
                        <p style="text-align: justify;">
                            <span style="background: rgb(217, 217, 217);">
                                <span style="">每一个白驹过隙的瞬间，都隐藏着一篇又一篇长篇故事，兵荒马乱的时代会迎来春暖花开的未来，曲终人散的结局会婉转成过尽千帆的寂静。此时此刻，</span>
                            </span>
                            <span style="background: rgb(217, 217, 217)">
                                <span>请让我们看见你，走进你，你的故事，我们记录。</span>
                            </span>
                        </p>
                        <p style="text-align: center;">
                            <span style=""><img src="../../assets/img/shool/ac1.jpg" title="" alt="微信图片_20190315190743.jpg" data-ref="1">&nbsp;</span>
                        </p>
                        <p style="text-align: justify;"><span style="">&nbsp;</span></p>
                        <p class="name"><strong>一台收音机，改变命运</strong></p>
                        <p style="text-align: justify;"><span style="">&nbsp;</span></p>
                        <p style="text-align: justify;">
                            <span style="">洋娃娃？遥控汽车？书？包？</span>
                            <span style="">...让刘淑艳选择，</span>
                            <strong><span style="">她会毫不犹豫地选择那台【收音机】。</span></strong>
                            <span style="">“我出生在江西农村，我们家有四个孩子，我是老大，家里几乎靠借钱维持正常的生活，我爸为了维持家庭生计常年在福建打工，我妈一个人扛起了全家的重担。”如今，在优雅精致的淑艳身上很难想象她儿时几乎从未穿过新衣的贫困状况。</span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="line"></div>
            <div class="main">
                <div class="hot">
                    <div class="line"></div>
                    <div class="name">热门推荐</div>
                    <div class="line"></div>
                </div>
                <div class="main_list">
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
                <div class="main_list">
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
            navigation: false
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
        clickNav() {
            this.navigation = !this.navigation
        }
	},
	watch: {}
};
</script>
<style lang="stylus" scoped>
.school
    .header
        border-bottom solid 1px #f1f1f1
        position sticky
        width 100%
        top 0
        left 0
        background-color: #fff
        z-index: 99
        .box
            padding 0 15px
            display flex
            align-items center
            height 1.4rem
            .logo 
                img
                    width .8rem
                    height .8rem
                    display block
            .name
                font-size 16px
                font-weight bold
                span
                    font-size 14px
                    font-weight normal
            .down
                width .8rem
                height .8rem
                box-sizing border-box
                margin-left auto
                position relative
                padding .133333rem
            .hen::after
                content ""
                display block
                margin-top .133333rem
                border-top .053333rem solid #555
            .hen::before
                content  ""
                display block
                height .133333rem
                border-top .053333rem solid #555
                border-bottom .053333rem solid #555
            .cha::after
                content ""
                display block
                border-top .053333rem solid #555
                transform rotate(-45deg)
                position absolute
                width .8rem
                top 15px
                left 0
            .cha::before
                content ""
                display block
                border-top .053333rem solid #555
                transform rotate(45deg)
                position absolute
                width .8rem
                top 15px
                left 0
    .navigation
        position fixed
        width 100%
        height 100%
        top 1.4rem
        left 0
        background-color #9e9e9e
        z-index 98
        .box
            padding 15px 0
            .list_index
                background #7c7c7c
                width 2.8rem
                height 1.333333rem
                line-height 1.333333rem
                text-align center
                color #fff
                font-size .43rem
                display block
                margin auto
            .list
                display flex
                align-items center
                justify-content space-between
                flex-wrap wrap
                margin 0 15px
                padding-bottom 15px
                border-bottom solid 1px #d1d1d1
                .list_t
                    background #7c7c7c
                    width 2.8rem
                    height 1.333333rem
                    line-height 1.333333rem
                    text-align center
                    color #fff
                    font-size .43rem
                    display block
                    margin-top .4rem
    .main
        padding 0 15px
        margin-top 10px
        .main_list
            display flex
            border-bottom solid 1px #f1f1f1
            padding 10px 0
            a
                display inherit
                color #000
            &:last-child
                border-bottom: 0
            .img
                flex 0 0 105px
                height 70px
                img
                    display block
                    width 100%
                    height 100%
            .text
                flex 1
                line-height 1.3
                padding-left 15px
                .name
                    font-size 14px
                    font-weight 500
                    display -webkit-box
                    -webkit-box-orient vertical
                    -webkit-line-clamp 2
                    overflow hidden
                    height 35px
                    text-align left
                .time
                    height 35px
                    display flex
                    align-items flex-end
                    color #6b6b6b
                    div
                        margin-right 10px
    .article
        .banner 
            img
                width 100%
                display block
        .content
            padding .533333rem .64rem
            color #1a1a1a
            line-height 1.8
            img
                width 100%
                margin 15px 0
        h1
            line-height 1.4
            margin-bottom .4rem
            font-size .586667rem
        .time
            color #666
            time
                margin-right .27rem
        .textbox 
            font-size .426667rem
            paddin: .533333rem 0
            .name 
                text-align center
</style>