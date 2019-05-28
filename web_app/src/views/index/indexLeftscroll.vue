<template>
	<!-- 商品左滑动卡片 -->
    <div>
        <div class="indexLeftscroll">
            <div class="mian">
                <div class="topName">
                    <div>今日必抢</div>
                    <div class="tip">高品质爆款抢先不断</div>
                </div>
                <div class="imgBg"><img  src="../../assets/img/index/111.jpg" alt=""></div>
                <div class="container">
                    <nut-scroller>
                        <div slot="list" class="listItem" v-for="(item, index) of listData" :key="index">
                            <div class="list">
                                <div class="img"><img src="../../assets/img/index/2222.jpg" alt=""></div>
                                <div class="name">Under Armour/安德玛 男士高尔夫短袖 4色 g1</div>
                                <div class="money">
                                    <div>￥399.00</div>
                                    <div class="vip"></div>
                                </div>
                            </div>
                        </div>
                        <slot slot="more" class="listItem">
                            <div class="list more">
                                <img src="../../assets/img/index/all2.png" alt="">
                            </div>
                        </slot>
                    </nut-scroller>
                </div>
            </div>
            <div class="mian">
                <div class="imgBg"><img  src="../../assets/img/index/111.jpg" alt=""></div>
                <div class="container">
                    <nut-scroller>
                        <div slot="list" class="listItem" v-for="(item, index) of listData" :key="index">
                            <div class="list">
                                <div class="img"><img src="../../assets/img/index/2222.jpg" alt=""></div>
                                <div class="name">Under Armour/安德玛 男士高尔夫短袖 4色 g1</div>
                                <div class="money">
                                    <div>￥399.00</div>
                                    <div class="vip"></div>
                                </div>
                            </div>
                        </div>
                        <slot slot="more" class="listItem">
                            <div class="list more">
                                <img src="../../assets/img/index/all2.png" alt="">
                            </div>
                        </slot>
                    </nut-scroller>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import { get } from '@/axiosApi'
export default {
	name: "indexLeftscroll",
	components: {
	},
	props: [],
	data () {
		return {
            listData: new Array(7),
            img: 'http://shop.xfengle.com//Uploads/./2018/08/23/5b7ea9sb001d24.jpg',
		}
	},
	mounted() {
    },
	methods: {

	},
	watch: {}
};
</script>
<style lang="stylus" scoped>
.mian
    margin-bottom 10px
    .topName
        display flex
        align-items center
        font-size 16px
        font-weight bold
        height 50px
        padding 0 15px
        .tip
            margin-left 15px
            color #999
            font-size 12px
            font-weight normal
    .imgBg
        min-height 30px
        img
            width 100%
            display block
    .container
        display flex
        align-items: center
        width 100%
        overflow-x scroll
        margin-top -30px
        -webkit-overflow-scrolling touch
        .listItem
            &:first-child
                margin-left 10px
                .list
                    padding-left 10px
                    border-radius $border-radius 0 0 $border-radius
        >>>.nut-hor-control
            .more
                width 110px
                margin-right 15px
                border-radius 0 $border-radius $border-radius 0
                img
                    width 100%
                    height 100%
                    display block
        .list
            border none
            border-right none
            padding 10px 10px 10px 0
            background-color #fff
            height 170px
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
                    background-image url('../../assets/img/index/vip.png')
                    background-repeat no-repeat
                    background-size 100%
                    width 25px
                    height 14px
                    margin-left 5px
</style>