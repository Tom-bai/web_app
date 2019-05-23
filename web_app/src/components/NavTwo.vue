<template>
    <div class="NavTwo">
        <div class="navBox">
            <div class="topic-list-inner">
                <div class="nav" ref="nav">
                    <div class="box" v-for="(item,index) in list" :key="index" @click="queryTopic(item,index)" :class="{active:navActiveIndex==index}">
                        <div>{{item.time}}</div>
                        <div class="item">{{item.title}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="list">
                <div class="img"><img src="../assets/img/2222.jpg" alt=""></div>
                <div class="box">
                    <div class="name">Under Armour/安德玛 男士高尔夫短袖 4色 g1</div>
                    <div class="tip">国际潮流品牌低至六折</div>
                    <div class="jindu">
                        <span class="xian"><b style="width:20%"></b></span>
                        <span>即将售罄</span>
                    </div>
                    <div class="money">
                        <div>￥399.00 <span class="zhuan">赚￥50</span></div>
                        <div class="btn" style="background: #f1002d;">马上抢</div>
                    </div>
                </div>
            </div>
            <div class="list">
                <div class="img"><img src="../assets/img/2222.jpg" alt=""></div>
                <div class="box">
                    <div class="name">Under Armour/安德玛 男士高尔夫短袖 4色 g1</div>
                    <div class="tip">国际潮流品牌低至六折</div>
                    <div class="jindu">
                        <span class="xian"><b style="width:20%"></b></span>
                        <span>即将售罄</span>
                    </div>
                    <div class="money">
                        <div>￥399.00 <span class="zhuan">赚￥50</span></div>
                        <div class="btn" style="background: #f1002d;">马上抢</div>
                    </div>
                </div>
            </div>
            <div class="list">
                <div class="img"><img src="../assets/img/2222.jpg" alt=""></div>
                <div class="box">
                    <div class="name">Under Armour/安德玛 男士高尔夫短袖 4色 g1</div>
                    <div class="tip">国际潮流品牌低至六折</div>
                    <div class="jindu">
                        <span class="xian"><b style="width:20%"></b></span>
                        <span>即将售罄</span>
                    </div>
                    <div class="money">
                        <div>￥399.00 <span class="zhuan">赚￥50</span></div>
                        <div class="btn" style="background: #f1002d;">马上抢</div>
                    </div>
                </div>
            </div>
            <div class="list">
                <div class="img"><img src="../assets/img/2222.jpg" alt=""></div>
                <div class="box">
                    <div class="name">Under Armour/安德玛 男士高尔夫短袖 4色 g1</div>
                    <div class="tip">国际潮流品牌低至六折</div>
                    <div class="jindu">
                        <!-- <span class="xian"><b style="width:20%"></b></span> -->
                        <span>已有9673人收藏</span>
                    </div>
                    <div class="money">
                        <div>￥399.00 <span class="zhuan">赚￥50</span></div>
                        <div class="btn" style="background: #1a1a1a;">即将开抢</div>
                    </div>
                </div>
            </div>
            <div class="list">
                <div class="img"><img src="../assets/img/2222.jpg" alt=""></div>
                <div class="box">
                    <div class="name">Under Armour/安德玛 男士高尔夫短袖 4色 g1</div>
                    <div class="tip">国际潮流品牌低至六折</div>
                    <div class="jindu">
                        <!-- <span class="xian"><b style="width:20%"></b></span> -->
                        <span>已有9673人收藏</span>
                    </div>
                    <div class="money">
                        <div>￥399.00 <span class="zhuan">赚￥50</span></div>
                        <div class="btn" style="background: #1a1a1a;">即将开抢</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import $ from '@/assets/js/jquery.min.js'
import AutoScroll from '@/assets/js/autoScroll'
let autoScrollInstance = null  //关键点：在加载的插件之前的就要定义个变量的，如果定在data中 ，则会报错
export default {
    name: 'navScroll',
    data() {
        return {
            list: [ //自己定义的假数据，实际是获取的数据
                {   id: 1,
                    time: '昨日00:00',
                    title: '昨日精选',
                },
                {   id: 2,
                    time: '00:00',
                    title: '抢购中',
                },
                {   id: 3,
                    time: '00:00',
                    title: '抢购中',
                },
                {   id: 4,
                    time: '00:00',
                    title: '抢购中',
                },
                {   id: 5,
                    time: '00:00',
                    title: '抢购中',
                },
                {   id: 6,
                    time: '00:00',
                    title: '抢购中',
                },
            ],
            navActiveIndex: 0, //当前高亮的tab选项卡index
            selectTag: null,   //传递个子组件（modal）的数据的
        }
    },
    components: {
    },
    methods: {
        queryTopic(data, index) {
            //点击谁，谁就高亮 ，定一个变量，click事件的赋值使其相等，而在:class 中 判断是否相等，即可
            this.navActiveIndex = index;
            //插件的调取方法
            if (autoScrollInstance) { //确保的插件加载成功
                autoScrollInstance.scrollTo(this.$refs.nav.childNodes[index])
            }
        },
    },
    mounted() {
        //写在掉接口的里面的
        this.$nextTick(() => {
            autoScrollInstance = new AutoScroll(this.$refs.nav, {spaceBetween: 0})//节点 nav
        })
    }
}
</script>
<style lang="stylus" scoped>
.NavTwo
    .navBox
        position sticky
        left 0
        top 60px
        z-index: 9
        .topic-list-inner 
            background #fff
            display flex
            align-items center
            .nav 
                display flex
                overflow-x auto
                overflow-y hidden
                .box 
                    white-space nowrap
                    font-size 14px
                    line-height 30px
                    color #333333
                    padding 10px
                    line-height 1.3
                    flex 0 0 17%
                    &.active 
                        color #b3a07f
                        background-image url('../assets/img/z_index_line.jpg')
                        background-repeat no-repeat
                        background-position bottom
                        background-size 50%
                        font-weight 700
                    .item
                        font-size 12px
                        font-weight normal
    .container
        .list
            display flex
            padding 10px 15px
            background-color #fff
            margin-top 10px
            .img
                flex 0 0 120px
                img
                    width 100%
                    border-radius 6px
                    display block
            .box
                flex 1
                text-align left 
                padding 0 10px
                .name
                    box-orient vertical
                    overflow hidden
                    text-overflow ellipsis
                    display -webkit-box
                    -webkit-line-clamp 2
                    -webkit-box-orient vertical
                    font-size 14px
                .tip
                    box-orient vertical
                    overflow hidden
                    text-overflow ellipsis
                    display -webkit-box
                    -webkit-line-clamp 1
                    -webkit-box-orient vertical
                    font-size 14px 
                    font-weight 700

                .jindu
                    padding 5px 0
                    .xian
                        display inline-block
                        width 120px
                        height 4px
                        position relative
                        background: #ebebeb
                        vertical-align middle
                        border-radius 4px
                        margin-right 10px
                        b
                            display block
                            position absolute
                            height 4px
                            top 0
                            left 0
                            width 10%
                            background: #f1002d
                            border-radius 4px
                .money
                    display flex
                    align-items center
                    color #f1002d
                    font-weight 700
                    font-size 16px
                    margin-top 10px
                    .zhuan
                        color #666
                        font-size 12px
                        font-weight 500
                        margin-left 5px
                    .btn
                        margin-left auto
                        width 60px
                        height 24px
                        line-height 24px
                        text-align center
                        color #fff
                        font-weight 400
                        border-radius 5px
                        font-size 12px
</style>