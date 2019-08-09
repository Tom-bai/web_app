<template>
	<!-- 买手 -->
	<div class="buy">
        <div class="container">
            <div class="list" v-for="item in dataList">
                <div class="header">换季不敏感 | 洗面奶推荐</div>
                <div class="tip">10 商品</div>
                <div class="imgbox">
                    <div class="img" @click="onRouter('/article')"><img src="../../assets/img/buy/cwww.jpg" alt=""></div>
                    <div class="img"><img src="../../assets/img/buy/cwww.jpg" alt=""></div>
                    <div class="img"><img src="../../assets/img/buy/cwww.jpg" alt=""></div>
                </div>
            </div>
            <!-- 隔开块，放最后 -->
            <div class="list"></div>
        </div>
        <div class="tishi">
            <div class="nav">
                <div class="ioc"><img src="../../assets/img/buy/y.png" alt=""></div>
                <div>网易自营</div>
            </div>
            <div class="nav">
                <div class="ioc"><img src="../../assets/img/buy/q.png" alt=""></div>
                <div>全球直采</div>
            </div>
            <div class="nav">
                <div class="ioc"><img src="../../assets/img/buy/z.png" alt=""></div>
                <div>假一赔十</div>
            </div>
            <div class="nav">
                <div class="ioc"><img src="../../assets/img/buy/d.png" alt=""></div>
                <div>售后无忧</div>
            </div>
        </div>
        <div class="blockBox" v-for="item in dataList">
            <div class="header">
                <div class="num">6 商品</div>
                <div class="namebox">
                    <div class="cont" @click="onRouter('/school')">
                        <div class="nameImg"><img src="../../assets/img/buy/cwww.jpg" alt=""></div>
                        <div>来自火星的鞋酱</div>
                    </div>
                    <div class="tipheader">球鞋配色千千万，还是灰色调最百搭！</div>
                </div>
                <div class="sanjiaoxin"></div>
            </div>
            <div class="blocklist">
                <div class="img"><img src="../../assets/img/buy/cwww.jpg" alt=""></div>
                <div class="img"><img src="../../assets/img/buy/cwww.jpg" alt=""></div>
                <div class="img"><img src="../../assets/img/buy/cwww.jpg" alt=""></div>
            </div>
        </div>
	</div>
</template>

<script>
// @ is an alias to /src
export default {
	name: "buy",
	components: {
	},
	props: [],
	data () {
		return {
            dataList: new Array(3)
        }
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
    },
	watch: {}
};
</script>
<style lang="stylus" scoped>
.buy
    margin-bottom 60px
.container
    display flex
    width 100%
    overflow-x scroll
    -webkit-overflow-scrolling touch
    &::-webkit-scrollbar 
        display:none
    .list
        flex 0 0 70%
        background-color: #fff
        padding 10px
        border-radius $border-radius
        margin 15px
        margin-right 0
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
        text-align left 
        &:first-child
            margin-left 15px
        &:last-child
            flex 0 0 15px
            background-color #f1f1f1
            margin 0
            padding 0
        .header
            font-size 15px
            color #333
            font-weight 700
            text-overflow ellipsis
            overflow hidden
            -webkit-line-clamp 1
        .tip
            padding  6px 0
            font-size 12px
            color rgb(153, 153, 153)
        .imgbox
            display flex
            align-items center
            .img
                flex 1
                padding 0 6px
                img 
                    width 100%
                    display block
                    border-radius $border-radius
.tishi
    display flex
    align-items center
    padding 0 15px
    .nav
        display flex
        align-items center
        font-size 12px
        flex 1
        justify-content center
        line-height 1.5
        .ioc
            width 15px
            height 15px
            margin-right: 10px
            img 
                width 100%
                display block
.blockBox
    padding: 10px 15px 
    .header
        height 140px
        background-size 100%
        background-repeat no-repeat
        position relative
        background-position 50% 50%
        border-radius $border-radius $border-radius 0 0
        background-image url('../../assets/img/buy/1111.webp')
        .num
            position absolute
            top 10px
            right 10px
            border-radius 10px
            padding-left 4.5px
            padding-right 6px
            background-color rgba(0, 0, 0, 0.5)
            color #fff
        .namebox
            position absolute
            bottom 15px
            left 10px
            width 90%
            .cont
                display flex
                align-items center
                color #fff
                font-size 12px
                .nameImg
                    width 12px
                    height 12px
                    margin-right 5px
                    img 
                        width 100%
                        border-radius 100%
                        display block
            .tipheader
                color rgb(255, 255, 255)
                font-size 18px
                font-weight 700
                margin-top 5px
                overflow hidden
                text-overflow ellipsis
                white-space nowrap
        .sanjiaoxin
            position absolute
            bottom -1px
            left 10px
            background-image url('../../assets/img/buy/san.png')
            width 16px
            height 7.5px
            background-size 100%
            background-repeat no-repeat
    .blocklist
        display flex
        align-items center
        padding 15px 10px
        background-color #fff
        border-radius 0 0 $border-radius $border-radius
        .img
            flex 1
            padding 10px
            img 
                width 100%
                display block
</style>