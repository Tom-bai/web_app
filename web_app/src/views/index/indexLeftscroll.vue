<template>
	<!-- 商品左滑动卡片 -->
    <div>
        <div class="indexLeftscroll">
            <div class="mian">
                <div class="topName">
                    <div>今日必抢</div>
                    <div class="tip">高品质爆款抢先不断</div>
                </div>
                <div class="imgBg"><img  src="../../assets/img/111.jpg" alt=""></div>
                <div class="container">
                    <div class="list">
                        <div class="img"><img v-lazy="img" alt=""></div>
                        <div class="name">Under Armour/安德玛 男士高尔夫短袖 4色 g1</div>
                        <div class="money">
                            <div>￥399.00</div>
                            <div class="vip"></div>
                        </div>
                    </div>
                    <div class="list">
                        <div class="img"><img v-lazy="img" alt=""></div>
                        <div class="name">Under Armour/安德玛 男士高尔夫短袖 4色 g1</div>
                        <div class="money">
                            <div>￥399.00</div>
                            <div class="vip"></div>
                        </div>
                    </div>
                    <div class="list">
                        <div class="img"><img v-lazy="img" alt=""></div>
                        <div class="name">Under Armour/安德玛 男士高尔夫短袖 4色 g1</div>
                        <div class="money">
                            <div>￥399.00</div>
                            <div class="vip"></div>
                        </div>
                    </div>
                    <div class="list">
                        <div class="img"><img v-lazy="img" alt=""></div>
                        <div class="name">Under Armour/安德玛 男士高尔夫短袖 4色 g1</div>
                        <div class="money">
                            <div>￥399.00</div>
                            <div class="vip"></div>
                        </div>
                    </div>
                    <div class="list">
                        <div class="img"><img v-lazy="img" alt=""></div>
                        <div class="name">Under Armour/安德玛 男士高尔夫短袖 4色 g1</div>
                        <div class="money">
                            <div>￥399.00</div>
                            <div class="vip"></div>
                        </div>
                    </div>
                    <div class="list">
                        <div class="img"><img v-lazy="img" alt=""></div>
                        <div class="name">Under Armour/安德玛 男士高尔夫短袖 4色 g1</div>
                        <div class="money">
                            <div>￥399.00</div>
                            <div class="vip"></div>
                        </div>
                    </div>
                    <div class="list">
                        <div class="img"><img v-lazy="img" alt=""></div>
                        <div class="name">Under Armour/安德玛 男士高尔夫短袖 4色 g1</div>
                        <div class="money">
                            <div>￥399.00</div>
                            <div class="vip"></div>
                        </div>
                    </div>
                    <div class="list">
                        <img src="../../assets/img/all2.png" alt="">
                    </div>
                </div>
            </div>
            <div class="mian">
                <div class="imgBg"><img src="../../assets/img/111.jpg" alt=""></div>
                <div class="container">
                    <div class="list">
                        <div class="img"><img src="../../assets/img/2222.jpg" alt=""></div>
                        <div class="name">Under Armour/安德玛 男士高尔夫短袖 4色 g1</div>
                        <div class="money">
                            <div>￥399.00</div>
                            <div class="vip"></div>
                        </div>
                    </div>
                    <div class="list">
                        <div class="img"><img src="../../assets/img/2222.jpg" alt=""></div>
                        <div class="name">Under Armour/安德玛 男士高尔夫短袖 4色 g1</div>
                        <div class="money">
                            <div>￥399.00</div>
                            <div class="vip"></div>
                        </div>
                    </div>
                    <div class="list">
                        <div class="img"><img src="../../assets/img/2222.jpg" alt=""></div>
                        <div class="name">Under Armour/安德玛 男士高尔夫短袖 4色 g1</div>
                        <div class="money">
                            <div>￥399.00</div>
                            <div class="vip"></div>
                        </div>
                    </div>
                    <div class="list">
                        <div class="img"><img src="../../assets/img/2222.jpg" alt=""></div>
                        <div class="name">Under Armour/安德玛 男士高尔夫短袖 4色 g1</div>
                        <div class="money">
                            <div>￥399.00</div>
                            <div class="vip"></div>
                        </div>
                    </div>
                    <div class="list">
                        <div class="img"><img src="../../assets/img/2222.jpg" alt=""></div>
                        <div class="name">Under Armour/安德玛 男士高尔夫短袖 4色 g1</div>
                        <div class="money">
                            <div>￥399.00</div>
                            <div class="vip"></div>
                        </div>
                    </div>
                    <div class="list">
                        <div class="img"><img src="../../assets/img/2222.jpg" alt=""></div>
                        <div class="name">Under Armour/安德玛 男士高尔夫短袖 4色 g1</div>
                        <div class="money">
                            <div>￥399.00</div>
                            <div class="vip"></div>
                        </div>
                    </div>
                    <div class="list">
                        <div class="img"><img src="../../assets/img/2222.jpg" alt=""></div>
                        <div class="name">Under Armour/安德玛 男士高尔夫短袖 4色 g1</div>
                        <div class="money">
                            <div>￥399.00</div>
                            <div class="vip"></div>
                        </div>
                    </div>
                    <div class="list">
                        <img src="../../assets/img/all2.png" alt="">
                    </div>
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
            img: 'http://shop.xfengle.com//Uploads/./2018/08/23/5b7ea9sb001d24.jpg',
            // img: require('../../assets/img/loging.gif')
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
.indexLeftscroll
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
            .list
                flex 0 0 29%
                border none
                border-right none
                padding 10px 10px 10px 0
                background-color #fff
                height 170px
                &:first-child
                    margin-left 15px
                    border-radius 3px 0 0 3px
                    padding-left 10px
                &:last-child
                    padding 10px 10px 10px 0
                    border-radius 0 3px 3px 0
                    img
                        width 100%
                        background-color #fff
                        height 100%
                        margin-right 25px
                        border-radius 3px
                .img
                    width 100px
                    height 100px
                    display flex
                    img
                        width 100px
                        height 100px
                        display block
                        border-radius 3px
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
                        background-image url('../../assets/img/vip.png')
                        background-repeat no-repeat
                        background-size 100%
                        width 25px
                        height 14px
                        margin-left 5px
</style>