<template>
    <div class="NavTwo" v-if="timeDataList.length !== 0">
        <div class="topName">
            <div>限时秒杀</div>
            <!-- <div class="tip">高品质爆款抢先不断</div> -->
        </div>
        <div class="navBox">
            <div class="topic-list-inner">
                <div class="nav" ref="nav">
                    <div class="box" v-for="(item,index) in timeData" :key="index" @click="queryTopic(item,index)" :class="{active:navActiveIndex==index}">
                        <div :class="{activeS:navActiveIndex==index}">{{item.time}}</div>
                        <div class="item">{{item.status_name}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="list" v-for="(item,index) in timeDataList">
                <div class="img"><img v-lazy="$imgUrl + item.img" alt=""></div>
                <div class="box">
                    <div class="name">{{item.title}}</div>
                    <div class="tip">国际潮流品牌低至六折</div>
                    <div class="jindu">
                        <span class="xian"><b style="width:20%"></b></span>
                        <span>即将售罄</span>
                    </div>
                    <div class="money">
                        <div>¥{{item.seckill_price}} <span class="zhuan">赚 ¥{{item.sec_price}}</span></div>
                        <div class="btn" style="background: #f1002d;"  @click="onRouter('/ProductDetails',item.g_id)">马上抢</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import $ from '@/assets/js/jquery.min.js'
import AutoScroll from '@/assets/js/autoScroll'
import { get,post } from '@/axiosApi'
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
                {   id: 7,
                    time: '00:00',
                    title: '抢购中',
                },
                {   id: 8,
                    time: '00:00',
                    title: '抢购中',
                },
            ],
            timeData: [],
            timeDataList: [],
            navActiveIndex: 0, //当前高亮的tab选项卡index
            selectTag: null,   //传递个子组件（modal）的数据的
        }
    },
    components: {
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
        queryTopic(data, index) {
            //点击谁，谁就高亮 ，定一个变量，click事件的赋值使其相等，而在:class 中 判断是否相等，即可
            this.navActiveIndex = index;
            //插件的调取方法
            if (autoScrollInstance) { //确保的插件加载成功
                autoScrollInstance.scrollTo(this.$refs.nav.childNodes[index])
            }
            this.getSecPro(data.id)
        },
        getSecKill () { // 获取秒杀时间
            let that = this
			get('/index.php/home/index/seckill_goods').then(res => {
                that.timeData = res
                that.getSecPro(that.timeData[0].id)
            }).catch(function (error) {
                console.log(error)
            })
        },
        getSecPro (id) { // 获取秒杀商品
            let that = this
            let params = {
                id: id
            }
			get('/index.php/home/index/secPro',params).then(res => {
                that.timeDataList = res
            }).catch(function (error) {
                console.log(error)
            })
        },
        
    },
    mounted() {
        //写在掉接口的里面的
        this.$nextTick(() => {
            autoScrollInstance = new AutoScroll(this.$refs.nav, {spaceBetween: 0})//节点 nav
        })
        this.getSecKill()
        
    },
}
</script>
<style lang="stylus" scoped>
.NavTwo
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
    .navBox
        position sticky
        left 0
        top 45px
        z-index: 9
        .topic-list-inner 
            background #fff
            display flex
            align-items center
            .nav 
                display flex
                overflow-x auto
                overflow-y hidden
                flex 1
                .box 
                    white-space nowrap
                    font-size 14px
                    line-height 30px
                    color #333333
                    padding 10px 13px
                    line-height 1.3
                    &.active 
                        color $color
                        background-image url('../assets/img/index/z_index_line.png')
                        background-repeat no-repeat
                        background-position bottom
                        background-size 50%
                        font-weight 700
                        .activeS
                            font-size 16px
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
                    border-radius $border-radius
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
                    line-height 1.3
                    height 35px
                .tip
                    box-orient vertical
                    overflow hidden
                    text-overflow ellipsis
                    display -webkit-box
                    -webkit-line-clamp 1
                    -webkit-box-orient vertical
                    font-size 14px 
                    font-weight 700
                    margin-top 10px

                .jindu
                    padding 5px 0
                    .xian
                        display inline-block
                        width 120px
                        height 4px
                        position relative
                        background: #ebebeb
                        vertical-align middle
                        border-radius $border-radius
                        margin-right 10px
                        b
                            display block
                            position absolute
                            height 4px
                            top 0
                            left 0
                            width 10%
                            background: #f1002d
                            border-radius $border-radius
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
                        border-radius $border-radius
                        font-size 12px
</style>