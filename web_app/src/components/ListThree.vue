<template>
	<div>
		<div class="main">
            <div class="item" v-for="(item,index) in dataList" :key="index">
                <div class="img"><img v-lazy="$imgUrl + item.img" alt=""></div>
                <div class="text">
                    <div class="top">{{item.title}}</div>
                    <div class="tip">{{item.title}}</div>
                    <div class="yipin"><span class="tag">已拼{{item.pnum}}件</span></div>
                    <div class="money">
                        <div class="pM">
                            <div>
                                <span class="tag">{{item.num}}人团</span>
                                <span class="num">￥{{item.s_price}}</span>
                            </div>
                            <div class="danmai">单买价<span>￥{{item.price}}</span></div>
                        </div>
                        <div class="btn"><span>去拼团</span></div>
                    </div>
                </div>
            </div>
        </div>
	</div>
</template>

<script>
export default {
	name: 'Tabbar',
	props: {
		msg: String
	},
	data () {
		return {
        }
	},
	methods: {

    },
    watch: {
        
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.main
    padding 0 15px
    .list
        display flex
        align-items center
        text-align left
        background-color #fff
        border-radius $border-radius
        padding 10px 0
        margin-bottom 10px
        .img
            flex 0 0 70px
            margin 0 10px
            img 
                width 100%
                display block
                border-radius $border-radius
        .text
            flex 1
            .name
                font-weight 700
                color #000
                font-size 14px
                text-overflow ellipsis
                display -webkit-box
                -webkit-line-clamp 1
                -webkit-box-orient vertical
                overflow hidden
            .tip
                font-weight 400
                color #000
                font-size 13px
                text-overflow ellipsis
                display -webkit-box
                -webkit-line-clamp 1
                -webkit-box-orient vertical
                overflow hidden
                margin  5px 0
            .money
                display flex
                align-items center
                color $color
                .new
                    font-weight normal
                    margin-right 5px
                    border solid 1px $color
                    border-radius $border-radius
                    padding 2px 10px
                    margin-left 10px
                .num
                    font-size 16px
                    font-weight 700
        .lijiBtn
            flex 0 0 24px
            height 24px
            border-radius 100%
            background-color $background-color
            color #fff
            line-height 1
            text-align center
            padding 10px
            margin 0 10px
</style>
