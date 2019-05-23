<template>
	<!-- 一元抢购 -->
    <div class="indexYiyuan">
        <div class="navbox">
            <div class="nav">
                <div class="ziding" :class="active == index?'active':''" v-for="(item,index) in list" :key="index" @click="onClick(index)">
                    <div class="iocn">
                        <div><img :src="active == index?item.ioc:item.ioca" alt=""></div>
                        <div>{{item.name}}</div>
                    </div>
                    <div>{{item.tip}}</div>
                </div>
            </div>
        </div>
        <div class="content" v-if="active == 0">
            <div class="list" v-for="(item,index) in dataList" :key="index">
                <div class="item">
                    <div class="img"><img :src="imgUrl + item.img" alt=""></div>
                    <div class="text">
                        <div class="name">{{item.title}}</div>
                        <div class="tip">{{item.dec}}</div>
                        <div class="guojia">
                            <img :src="imgUrl + item.img1" alt="">
                            <!-- <div>{{item.guoname}}</div>
                            <div>{{item.guonamet2}}</div> -->
                        </div>
                        <div class="money"><span>￥{{item.price}}</span><i class="vip"></i></div>
                    </div>
                </div>
                <div class="man">
                    <div class="tip" v-if="item.biaoqian">
                        <span>{{item.biaoqian}}</span>
                    </div>
                    <div class="num">
                        <div class="shu">{{item.ck}}</div>
                        <div class="img">
                            <img v-for="itemi in item.us" :src="imgUrl + itemi" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="content" v-if="active == 1">
            <div class="banner"><img src="../../assets/img/111.jpg" alt=""></div>
            <div class="list" v-for="(item,index) in data1" :key="index">
                <div class="item">
                    <div class="img"><img :src="item.img" alt=""></div>
                    <div class="text">
                        <div class="name">{{item.name}}</div>
                        <div class="tip">{{item.tip}}</div>
                        <div class="guojia">
                            <img :src="item.guoioc" alt="">
                            <div>{{item.guoname}}</div>
                            <div>{{item.guonamet2}}</div>
                        </div>
                        <div class="money">
                            <span>￥{{item.money}}</span>
                            <i class="vip"></i>
                            <span class="card"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="content" v-if="active == 2">
            <div class="banner"><img src="../../assets/img/111.jpg" alt=""></div>
            <div class="bannertwo">
                <div><img src="../../assets/img/111.jpg" alt=""></div>
                <div><img src="../../assets/img/111.jpg" alt=""></div>
            </div>
            <div class="topNav">
                <div class="itemBtn" :class="activeZC == 0?'active':''" @click="onClickZc(0)">正在众筹</div>
                <div class="itemBtn" :class="activeZC == 1?'active':''" @click="onClickZc(1)">预备众筹</div>
            </div>
            <div class="list" v-for="(item,index) in data1">
                <div class="item">
                    <div class="img"><img :src="item.img" alt=""></div>
                    <div class="text">
                        <div class="name">{{item.name}}</div>
                        <div class="money">
                            <span><small>￥</small>399</span><small>起</small>
                        </div>
                        <div class="progress">
                            <nut-progress percentage="30" strokeColor="#f2826a" strokeWidth="6" status="active"></nut-progress>
                        </div>
                        <div class="btn">
                            <i class="iocn"></i>
                            <span>225人支撑</span>
                            <span class="zhichi">支撑项目</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="topNav">
                <div class="itemBtn" :class="activeZCD == 0?'active':''" @click="onClickZcD(0)">人数最多</div>
                <div class="itemBtn" :class="activeZCD == 1?'active':''" @click="onClickZcD(1)">金额最多</div>
            </div>
            <div class="list" v-for="(item,index) in data1">
                <div class="item">
                    <div class="img"><img :src="item.img" alt=""></div>
                    <div class="text">
                        <div class="name">{{item.name}}</div>
                        <div class="money">
                            <span><small>￥</small>399</span><small>起</small>
                        </div>
                        <div class="progress">
                            <nut-progress percentage="30" strokeColor="#f2826a" strokeWidth="6" status="active"></nut-progress>
                        </div>
                        <div class="btn">
                            <i class="iocn"></i>
                            <span>225人支撑</span>
                            <span class="zhichi">支撑项目</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import { get } from '@/axiosApi'
import imgUrl from '@/imgUrl'
export default {
	name: "indexYiyuan",
	components: {
	},
	props: [],
	data () {
		return {
            active: 0,
            activeZC: 0,
            activeZCD: 0,
            imgUrl: imgUrl,
            list:[
                {
                    id: 1,
                    name: '全部',
                    tip: '品质好货',
                    ioc: require('../../assets/img/all.png'),
                    ioca: require('../../assets/img/allh.png'),
                },
                {
                    id: 2,
                    name: '一元',
                    tip: '会员专享',
                    ioc: require('../../assets/img/yh.png'),
                    ioca: require('../../assets/img/y.png'),
                },
                {
                    id: 3,
                    name: '众筹',
                    tip: '达人推荐',
                    ioc: require('../../assets/img/zan.png'),
                    ioca: require('../../assets/img/zanh.png'),
                },
            ],
            data1: [
                {
                   img: require('../../assets/img/2222.jpg'),
                   name: '澳洲freezeframe 紧致全效眼霜（15ml）提拉紧致去细纹黑眼圈',
                   tip: '两条包邮两条包邮两条包邮两条包邮',
                   guoioc: require('../../assets/img/q.png'),
                   guoname: '中国',
                   guonamet2: 'Bai白白',
                   money: '200',
                   mantip: [
                       {
                           name: '口红 唇釉'
                       },
                       {
                           name: '香水'
                       }
                   ],
                   shu: '15万',
                   shuimg:[
                       {
                           img: require('../../assets/img/nav.jpg'),
                       },
                       {
                           img: require('../../assets/img/nav.jpg'),
                       },
                       {
                           img: require('../../assets/img/nav.jpg'),
                       }
                   ]
                },
                {
                   img: require('../../assets/img/2222.jpg'),
                   name: '澳洲freezeframe 紧致全效眼霜（15ml）提拉紧致去细纹黑眼圈',
                   tip: '两条包邮两条包邮两条包邮两条包邮',
                   guoioc: require('../../assets/img/q.png'),
                   guoname: '中国',
                   guonamet2: 'Bai白白',
                   money: '200',
                   mantip: [
                       {
                           name: '口红 唇釉'
                       },
                       {
                           name: '香水'
                       }
                   ],
                   shu: '15万',
                   shuimg:[
                       {
                           img: require('../../assets/img/nav.jpg'),
                       },
                       {
                           img: require('../../assets/img/nav.jpg'),
                       },
                       {
                           img: require('../../assets/img/nav.jpg'),
                       }
                   ]
                },
                {
                   img: require('../../assets/img/2222.jpg'),
                   name: '澳洲freezeframe 紧致全效眼霜（15ml）提拉紧致去细纹黑眼圈',
                   tip: '两条包邮两条包邮两条包邮两条包邮',
                   guoioc: require('../../assets/img/q.png'),
                   guoname: '中国',
                   guonamet2: 'Bai白白',
                   money: '200',
                   mantip: [
                       {
                           name: '口红 唇釉'
                       },
                       {
                           name: '香水'
                       }
                   ],
                   shu: '15万',
                   shuimg:[
                       {
                           img: require('../../assets/img/nav.jpg'),
                       },
                       {
                           img: require('../../assets/img/nav.jpg'),
                       },
                       {
                           img: require('../../assets/img/nav.jpg'),
                       }
                   ]
                },
                {
                   img: require('../../assets/img/2222.jpg'),
                   name: '澳洲freezeframe 紧致全效眼霜（15ml）提拉紧致去细纹黑眼圈',
                   tip: '两条包邮两条包邮两条包邮两条包邮',
                   guoioc: require('../../assets/img/q.png'),
                   guoname: '中国',
                   guonamet2: 'Bai白白',
                   money: '200',
                   mantip: [
                       {
                           name: '口红 唇釉'
                       },
                       {
                           name: '香水'
                       }
                   ],
                   shu: '15万',
                   shuimg:[
                       {
                           img: require('../../assets/img/nav.jpg'),
                       },
                       {
                           img: require('../../assets/img/nav.jpg'),
                       },
                       {
                           img: require('../../assets/img/nav.jpg'),
                       }
                   ]
                },
                {
                   img: require('../../assets/img/2222.jpg'),
                   name: '澳洲freezeframe 紧致全效眼霜（15ml）提拉紧致去细纹黑眼圈',
                   tip: '两条包邮两条包邮两条包邮两条包邮',
                   guoioc: require('../../assets/img/q.png'),
                   guoname: '中国',
                   guonamet2: 'Bai白白',
                   money: '200',
                   mantip: [
                       {
                           name: '口红 唇釉'
                       },
                       {
                           name: '香水'
                       }
                   ],
                   shu: '15万',
                   shuimg:[
                       {
                           img: require('../../assets/img/nav.jpg'),
                       },
                       {
                           img: require('../../assets/img/nav.jpg'),
                       },
                       {
                           img: require('../../assets/img/nav.jpg'),
                       }
                   ]
                },
                {
                   img: require('../../assets/img/2222.jpg'),
                   name: '澳洲freezeframe 紧致全效眼霜（15ml）提拉紧致去细纹黑眼圈',
                   tip: '两条包邮两条包邮两条包邮两条包邮',
                   guoioc: require('../../assets/img/q.png'),
                   guoname: '中国',
                   guonamet2: 'Bai白白',
                   money: '200',
                   mantip: [
                       {
                           name: '口红 唇釉'
                       },
                       {
                           name: '香水'
                       }
                   ],
                   shu: '15万',
                   shuimg:[
                       {
                           img: require('../../assets/img/nav.jpg'),
                       },
                       {
                           img: require('../../assets/img/nav.jpg'),
                       },
                       {
                           img: require('../../assets/img/nav.jpg'),
                       }
                   ]
                },
                {
                   img: require('../../assets/img/2222.jpg'),
                   name: '澳洲freezeframe 紧致全效眼霜（15ml）提拉紧致去细纹黑眼圈',
                   tip: '两条包邮两条包邮两条包邮两条包邮',
                   guoioc: require('../../assets/img/q.png'),
                   guoname: '中国',
                   guonamet2: 'Bai白白',
                   money: '200',
                   mantip: [
                       {
                           name: '口红 唇釉'
                       },
                       {
                           name: '香水'
                       }
                   ],
                   shu: '15万',
                   shuimg:[
                       {
                           img: require('../../assets/img/nav.jpg'),
                       },
                       {
                           img: require('../../assets/img/nav.jpg'),
                       },
                       {
                           img: require('../../assets/img/nav.jpg'),
                       }
                   ]
                },
            ],
            dataList: []
		}
	},
	mounted() {
        this.getData()
    },
	methods: {
        onClick (index) {
            this.active = index
            this.$store.commit('set_INDEX_STATE', this.active)
        },
        onClickZc (index) {
            this.activeZC = index
        },
        onClickZcD (index) {
            this.activeZCD = index
        },
        getData () {
			let that = this
			get('/index.php/home/index/ajax_allpro').then(res => {
                that.dataList = res.data
            }).catch(function (error) {
                console.log(error)
            })
		},
	},
	watch: {}
};
</script>
<style lang="stylus" scoped>
.indexYiyuan
    .navbox
        position sticky
        left 0
        top 60px
        z-index 9
        background-color #fff
        .nav
            display flex
            align-items center
            margin-top 10px
            .ziding
                flex 1
                padding 10px 0
                position relative
                &:before
                    content: ' ';
                    position absolute
                    width 2px
                    height 50%
                    background-color #f5f5f5
                    right  0
                    top 50%
                    transform translate(-50%,-50%)
                &:last-child
                    width 0px
                .iocn
                    display flex
                    align-items center
                    font-size 16px
                    font-weight 700
                    justify-content center
                    img
                        width 18px
                        height 18px
                        display block
                        margin-right 5px
            .ziding
                &:last-child
                    &:before
                        width 0px
            .active
                color #b3a07f
                &:after
                    content: ' ';
                    position absolute
                    width 60%
                    height 3px
                    background-color #b3a07f
                    left 50%
                    bottom 0
                    transform translate(-50%)
    .content
        .banner
            padding 0 10px
            margin 10px 0
            img
                width 100%
                border-radius 8px
                display block
        .bannertwo
            display flex
            align-items center
            padding 0 5px
            div
                padding 0 5px
            img
                width 100%
                border-radius 8px
                display block
        .topNav
            display flex
            align-items center
            background-color #fff
            margin-bottom 10px
            font-size 14px
            margin-top 10px
            .itemBtn
                flex 1
                position relative
                padding 15px 0
                &:before
                    content: ' ';
                    position absolute
                    width 2px
                    height 50%
                    background-color #f5f5f5
                    right  0
                    top 50%
                    transform translate(-50%,-50%)
            .itemBtn
                &:last-child
                    &:before
                        width 0px
            .active
                color #b3a07f
                &:after
                    content: ' ';
                    position absolute
                    width 60%
                    height 3px
                    background-color #b3a07f
                    left 50%
                    bottom 0
                    transform translate(-50%)
        .list
            margin-top 10px
            background-color #fff
            .item
                display flex
                align-items center
                padding 15px
                .img
                    flex 0 0 120px
                    img 
                        width 100%
                        display block
                        border-radius 6px
                .text
                    flex 1
                    overflow hidden
                    text-align left 
                    padding 0 10px
                    .name
                        font-size 16px
                        color #3f3f3f
                        font-weight bold
                        white-space nowrap
                        overflow hidden
                        text-overflow ellipsis
                    .tip
                        overflow hidden
                        text-overflow ellipsis
                        display -webkit-box
                        -webkit-box-orient vertical
                        -webkit-line-clamp 2
                        white-space initial
                        color #777
                        margin 5px 0
                    .guojia
                        display flex
                        align-items center
                        border-top solid 1px #f1f1f1
                        border-bottom solid 1px #f1f1f1
                        font-size 14px
                        margin-top 10px
                        padding 5px 0
                        img 
                            width 20px
                            height 20px
                            margin-right 5px
                        div
                            margin-right 5px
                    .money
                        display flex
                        align-items center
                        margin 5px 0 0 0
                        height 30px
                        >span 
                            font-size 16px
                            color #b19c79
                            font-weight 700
                        >small
                            font-size 12px
                            padding 0 5px
                        .vip
                            background-image url('../../assets/img/vip.png')
                            background-repeat no-repeat
                            background-size 100% 100%
                            width 42px
                            height 17px
                            margin-left 10px
                        .card
                            background-image url('../../assets/img/buy2.png')
                            background-repeat no-repeat
                            background-size 100% 100%
                            width 30px
                            height 30px
                            margin-left auto
                    .progress
                        margin-top 10px
                    .btn
                        display flex
                        align-items center
                        margin-top 15px
                        .iocn
                            background-image url('../../assets/img/z_zcrs.jpg')
                            background-repeat no-repeat
                            background-size 100% 100%
                            width 15px
                            height 18px
                            margin-right 10px
                        .zhichi
                            border 1px solid #f08f20
                            padding 2px 10px
                            border-radius 6px
                            color #f08f20
                            margin-left auto
            .man
                display flex
                align-items center
                padding 15px
                border-top solid 1px #f1f1f1
                .tip
                    background #f2f2f2
                    border 1px solid #f2f2f2
                    border-radius 10px
                    padding 2px 10px
                    margin-right 10px
                .num
                    display flex
                    align-items center
                    justify-content flex-end
                    margin-left auto
                    .shu
                        margin-right 20px
                    .img
                        display flex
                        align-items center
                        img
                            width 18px
                            height 18px
                            border-radius 100%
                            margin-left -10px
</style>