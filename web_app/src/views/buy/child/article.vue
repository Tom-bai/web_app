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
                        <div class="moneyS"><span class="red">￥500</span> <span class="dis">￥600</span></div>
                        <div class="btn">立即购买</div>
                    </div>
                </div>
            </div>
            <!-- 隔开块，放最后 -->
            <div class="box"></div>
        </div>
	</div>
</template>

<script>
// @ is an alias to /src
export default {
	name: "Article",
	components: {
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
        .text
            padding 0 10px
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
                line-height 22px
                height 45px
                word-break break-all
            .tip 
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
                    border-radius 20px
                    font-size 12px
                    color #fff
                    padding 0 5px
</style>