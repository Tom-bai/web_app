<template>
	<!-- 详情 -->
	<div class="Article">
        <div class="banner">
            <div class="img"><img src="../../../assets/img/buy/231.webp" alt=""></div>
        </div>
        <div class="shangping">
            <div class="box" v-for="item in dataList">
                <div class="img"><img src="../../../assets/img/buy/cwww.jpg" alt=""></div>
                <div class="text">
                    <div class="name">【298减50】BETSY2019爆款新款女款蝴蝶结平底鞋鞋女单鞋女小白鞋舒适透气四季鞋轻便女神抖音 BT9846-01</div>
                    <div class="tip"><span>8色可选</span><span>8色可选</span></div>
                    <div class="money">
                        <div class="moneyS"><span class="red">¥500</span> <span class="dis">¥600</span></div>
                        <div class="btn">立即购买</div>
                    </div>
                </div>
            </div>
            <!-- 隔开块，放最后 -->
            <div class="box"></div>
        </div>
        <div class="article">
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
                        <span style=""><img src="../../../assets/img/buy/231.webp" title="" alt="微信图片_20190315190743.jpg" data-ref="1">&nbsp;</span>
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
        <Like></Like>
	</div>
</template>

<script>
// @ is an alias to /src
import Like from '@/components/Like'
export default {
	name: "Article",
	components: {
        Like: Like
	},
	props: [],
	data () {
		return {
            dataList: new Array(3)
        }
	},
	methods: {},
	watch: {}
};
</script>
<style lang="stylus" scoped>
.banner
    .img
        img
            width 100%
            display block
.shangping
    display flex
    width 100%
    overflow-x scroll
    -webkit-overflow-scrolling touch
    &::-webkit-scrollbar 
        display:none
    .box 
        flex 0 0 70%
        background-color: #fff
        border-radius $border-radius
        text-align left 
        display flex
        align-items center
        margin 10px
        padding 10px
        &:first-child
            margin-left 15px
        &:last-child
            flex 0 0 5px
            background-color #f1f1f1
            margin 0
            padding 0
        .img
            flex 0 0 30%
            img 
                width 100%
                display block
                border-radius $border-radius 0 0 $border-radius
        .text
            padding 0 0 0 10px
            text-align left
            .name
                overflow hidden
                text-overflow ellipsis
                display -webkit-box
                -webkit-line-clamp 2
                -webkit-box-orient vertical
                font-size 14px
                font-weight 700
                color #333
                line-height 1.3
                word-break break-all
            .tip 
                padding 8px 0
                span
                    border solid 1px #999
                    border-radius $border-radius
                    padding 2px 5px
                    margin-right 5px
            .money
                display flex
                align-items center
                .moneyS 
                    .red
                        font-size 14px
                        color red
                        font-weight 700
                    .dis
                        font-size 12px
                        color #999
                        margin-left 7px
                        text-decoration line-through
                .btn
                    margin-left auto
                    background-color red
                    border-radius $border-radius
                    font-size 12px
                    color #fff
                    padding 5px 15px
.article 
    .banner 
        img
            width 100%
            display block
    .content
        padding 10px
        color #1a1a1a
        line-height 1.8
        img
            width 100%
            margin 15px 0
        h1
            line-height 1.4
            margin-bottom 15px
            font-size 14px
        .time
            color #666
            time
                margin-right 10px
    .textbox 
        font-size 14px
        padding 10px 0
        .name 
            text-align center

</style>