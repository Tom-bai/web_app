<template>
	<!-- 培训学堂 -->
	<div> 
		<div class="school"> 
            <div class="header">
                <div class="box">
                    <div class="logo"><img src="../../assets/img/shool/logo.png" alt=""></div>
                    <div class="name">商学院</div>
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
            <div class="main">
                <div class="main_list">
                    <a @click="onRouter('/school/article')">
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
                    <a @click="onRouter('/school/article')">
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
                    <a @click="onRouter('/school/article')">
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
</style>