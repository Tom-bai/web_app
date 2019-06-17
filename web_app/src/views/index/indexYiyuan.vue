<template>
	<!-- 抢购 -->
    <div class="indexYiyuan">
        <div class="navbox">
            <div class="nav">
                <div class="ziding" :class="active == index?'active':''" v-for="(item,index) in list" :key="index" @click="onClick(index)">
                    <div class="iocn">
                        <div><img  :src="active == index?item.ioc:item.ioca" alt=""></div>
                        <div>{{item.name}}</div>
                    </div>
                    <div>{{item.tip}}</div>
                </div>
            </div>
        </div>
        <div class="content" v-if="active == 0">
            <nut-infiniteloading @loadmore="onInfinite" :is-show-mod="true"  :is-loading="isLoading" :threshold="200" :has-more="isHasMore">
                <div class="list" v-for="(item,index) in dataList" :key="index">
                    <div class="item" @click="onRouter('/ProductDetails',item.ck)">
                        <div class="img"><img  v-lazy="$imgUrl + item.img" alt=""></div>
                        <div class="text">
                            <div class="name">{{item.title}}</div>
                            <div class="tip">{{item.dec}}</div>
                            <div class="guojia">
                                <img  v-lazy="$imgUrl + item.img1" alt="">
                                <!-- <div>{{item.guoname}}</div>
                                <div>{{item.guonamet2}}</div> -->
                            </div>
                            <div class="money"><span>¥{{item.price}}</span><i class="vip"></i></div>
                        </div>
                    </div>
                    <!-- <div class="man">
                        <div class="tip" v-if="item.biaoqian">
                            <span>{{item.biaoqian}}</span>
                        </div>
                        <div class="num">
                            <div class="shu">{{item.ck}}</div>
                            <div class="img">
                                <img v-for="itemi in item.us" :src="imgUrl + itemi" alt="">
                            </div>
                        </div>
                    </div> -->
                </div>
            </nut-infiniteloading>
        </div>
        <div class="content" v-if="active == 1">
            <div class="banner"><img src="../../assets/img/index/111.jpg" alt=""></div>
            <nut-infiniteloading @loadmore="onInfiniteY" :is-show-mod="true"  :is-loading="isLoadingY" :threshold="200" :has-more="isHasMoreY">
                <div class="list" v-for="(item,index) in dataYiList" :key="index">
                    <div class="item">
                        <div class="img"><img v-lazy="$imgUrl + item.img" alt=""></div>
                        <div class="text">
                            <div class="name">{{item.title}}</div>
                            <div class="tip">{{item.title}}</div>
                            <div class="guojia">
                                <img v-lazy="$imgUrl + item.img1"alt="">
                                <!-- <div>{{item.guoname}}</div>
                                <div>{{item.guonamet2}}</div> -->
                            </div>
                            <div class="money">
                                <span>¥{{item.price}}</span>
                                <i class="vip"></i>
                                <span class="card"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </nut-infiniteloading>
        </div>
        <div class="content" v-if="active == 2">
            <div class="banner"><img src="../../assets/img/index/111.jpg" alt=""></div>
            <div class="bannertwo">
                <div><img src="../../assets/img/index/111.jpg" alt=""></div>
                <div><img src="../../assets/img/index/111.jpg" alt=""></div>
            </div>
                <div>
                    <div class="topNav">
                    <div class="itemBtn" :class="activeZC == 0?'active':''" @click="onClickZc(0)">正在众筹</div>
                    <div class="itemBtn" :class="activeZC == 1?'active':''" @click="onClickZc(1)">预备众筹</div>
                </div>
                <div v-if="activeZC == 0">
                    <div class="list" v-for="(item,index) in dataZongList.datacr">
                        <div class="item">
                            <div class="img"><img v-lazy="$imgUrl + item.pro_img" alt=""></div>
                            <div class="text">
                                <div class="name">{{item.title}}</div>
                                <div class="money">
                                    <span><small>¥</small>{{item.cdf_price}}</span><small>起</small>
                                </div>
                                <div class="progress">
                                    <nut-progress :percentage="item.cdf_max_num" strokeColor="#f1002d" strokeWidth="6" status="active"></nut-progress>
                                </div>
                                <div class="btnZ">
                                    <i class="iocn"></i>
                                    <span>{{item.cdf_join_num}}人支撑</span>
                                    <span class="zhichi">支撑项目</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="nomore" v-if="dataZongList.datacr == null">暂无数据</div>
                </div>
                <div v-if="activeZC == 1">
                    <div class="list" v-for="(item,index) in dataZongList.data_coming">
                        <div class="item">
                            <div class="img"><img v-lazy="$imgUrl + item.pro_img" alt=""></div>
                            <div class="text">
                                <div class="name">{{item.title}}</div>
                                <div class="money">
                                    <span><small>¥</small>{{item.g_price}}</span><small>起</small>
                                </div>
                                <div class="progress">
                                    <nut-progress :percentage="item.cdf_max_num" strokeColor="#f1002d" strokeWidth="6" status="active"></nut-progress>
                                </div>
                                <div class="btnZ">
                                    <i class="iocn"></i>
                                    <span>{{item.cdf_num}}人支撑</span>
                                    <span class="zhichi">支撑项目</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="nomore" v-if="dataZongList.data_coming == null">暂无数据</div>
                </div>
            </div>
            <div>
                <div class="topNav">
                    <div class="itemBtn" :class="activeZCD == 0?'active':''" @click="onClickZcD(0)">人数最多</div>
                    <div class="itemBtn" :class="activeZCD == 1?'active':''" @click="onClickZcD(1)">金额最多</div>
                </div>
                <div v-if="activeZCD == 0">
                    <div class="list" v-for="(item,index) in dataZongList.datanum">
                        <div class="item">
                            <div class="img"><img v-lazy="$imgUrl + item.pro_img" alt=""></div>
                            <div class="text">
                                <div class="name">{{item.title}}</div>
                                <div class="money">
                                    <span><small>¥</small>{{item.g_price}}</span><small>起</small>
                                </div>
                                <div class="progress">
                                    <nut-progress :percentage="item.cdf_max_num" strokeColor="#f1002d" strokeWidth="6" status="active"></nut-progress>
                                </div>
                                <div class="btnZ">
                                    <i class="iocn"></i>
                                    <span>{{item.cdf_num}}人支撑</span>
                                    <span class="zhichi">支撑项目</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="nomore" v-if="dataZongList.datanum == null">暂无数据</div>
                </div>
                <div v-if="activeZCD == 1">
                    <div class="list" v-for="(item,index) in dataZongList.datamen">
                        <div class="item">
                            <div class="img"><img v-lazy="$imgUrl + item.pro_img" alt=""></div>
                            <div class="text">
                                <div class="name">{{item.title}}</div>
                                <div class="money">
                                    <span><small>¥</small>{{item.g_price}}</span><small>起</small>
                                </div>
                                <div class="progress">
                                    <nut-progress :percentage="item.cdf_max_num" strokeColor="#f1002d" strokeWidth="6" status="active"></nut-progress>
                                </div>
                                <div class="btnZ">
                                    <i class="iocn"></i>
                                    <span>{{item.cdf_num}}人支撑</span>
                                    <span class="zhichi">支撑项目</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="nomore" v-if="dataZongList.datamen == null">暂无数据</div>
                </div>
            </div>
            <div>
                <div class="topNav">
                    <div class="itemBtn">过气的众筹</div>
                </div>
                <div>
                    <div class="list" v-for="(item,index) in dataZongList.dataover">
                        <div class="item">
                            <div class="img"><img v-lazy="$imgUrl + item.pro_img" alt=""></div>
                            <div class="text">
                                <div class="name">{{item.title}}</div>
                                <div class="money">
                                    <span><small>¥</small>{{item.g_price}}</span><small>起</small>
                                </div>
                                <div class="progress">
                                    <nut-progress :percentage="item.cdf_max_num" strokeColor="#f1002d" strokeWidth="6" status="active"></nut-progress>
                                </div>
                                <div class="btnZ">
                                    <i class="iocn"></i>
                                    <span>{{item.cdf_num}}人支撑</span>
                                    <span class="zhichi">支撑项目</span>
                                </div>
                            </div>
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
            list:[ // 导航
                {
                    id: 1,
                    name: '全部',
                    tip: '品质好货',
                    ioc: require('../../assets/img/index/all.png'),
                    ioca: require('../../assets/img/index/allh.png'),
                },
                {
                    id: 2,
                    name: '一元',
                    tip: '会员专享',
                    ioc: require('../../assets/img/index/yh.png'),
                    ioca: require('../../assets/img/index/y.png'),
                },
                {
                    id: 3,
                    name: '众筹',
                    tip: '达人推荐',
                    ioc: require('../../assets/img/index/zan.png'),
                    ioca: require('../../assets/img/index/zanh.png'),
                },
            ],
            limit: 1,
            dataList: [], // 全部
            isHasMore: true,
            isLoading: false,
            limitZ: 1,
            dataZongList: [], //众筹
            isHasMoreZ: true,
            isLoadingZ: false,
            limitY: 1,
            dataYiList: [], //一元
            isHasMoreY: true,
            isLoadingY: false,
		}
	},
	mounted() {
        this.getDataOne()
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
        onInfinite () { // 全部
            let that = this
            if (that.isHasMore) {
                that.isLoading = true
                that.limit++
                that.getDataOne()
            }
        },
        onInfiniteY () { // 一元
            let that = this
            if (that.isHasMoreY) {
                that.isLoadingY = true
                that.limitY++
                that.getDataTwo()
            }
        },
        onClick (index) { //三个btn
            this.active = index
            this.$store.commit('set_INDEX_STATE', this.active)
            if (this.active == 0) {
                this.limit = 1
                this.getDataOne()
            } else if (this.active == 1) {
                this.limitY = 1
                this.getDataTwo()
            } else if (this.active == 2) {
                this.limitZ = 1
                this.getDataThree()
            }
        },
        onClickZc (index) {
            this.activeZC = index
        },
        onClickZcD (index) {
            this.activeZCD = index
        },
        getDataOne () { // 全部
            let that = this
            let params = {
                limit: that.limit
            }
			get('/index.php/home/index/ajax_allpro',params).then(res => {
                if (res.status > 0) {
                    that.dataList = that.dataList.concat(res.data)
                    that.isLoading = false
                } else {
                    that.isLoading = false
                    that.isHasMore = false
                }          
            }).catch(function (error) {
                console.log(error)
            })
        },
        getDataTwo () { // 一元
            let that = this
            let params = {
                limit: that.limitY
            }
			get('/index.php/home/index/ajax_allOne',params).then(res => {
                if (res.status > 0) {
                    that.dataYiList = that.dataYiList.concat(res.data)
                    that.isLoadingY = false
                } else {
                    that.isLoadingY = false
                    that.isHasMoreY = false
                }  
            }).catch(function (error) {
                console.log(error)
            })
        },
        getDataThree () { // 众筹
            let that = this
            let params = {
                limit: that.limitZ
            }
			get('/index.php/home/index/cf',params).then(res => {
                that.dataZongList = res   
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
        top 45px
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
                    margin-bottom 5px
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
                color $color
                &:after
                    content: ' ';
                    position absolute
                    width 60%
                    height 3px
                    background-color $background-color
                    left 50%
                    bottom 0
                    transform translate(-50%)
    .content
        .banner
            padding 0 10px
            margin 10px 0
            img
                width 100%
                border-radius $border-radius
                display block
        .bannertwo
            display flex
            align-items center
            padding 0 5px
            div
                padding 0 5px
            img
                width 100%
                border-radius $border-radius
                display block
        .topNav
            display flex
            align-items center
            background-color #fff
            margin-bottom 10px
            font-size 14px
            margin-top 10px
            position sticky
            top 100px
            left 0
            z-index 8
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
                color $color
                &:after
                    content: ' ';
                    position absolute
                    width 60%
                    height 3px
                    background-color $background-color
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
                        border-radius $border-radius
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
                            color $color
                            font-weight 700
                        >small
                            font-size 12px
                            padding 0 5px
                        .vip
                            background-image url('../../assets/img/index/vip.png')
                            background-repeat no-repeat
                            background-size 100% 100%
                            width 26px
                            height 14px
                            margin-left 10px
                        .card
                            background-image url('../../assets/img/index/buy2.png')
                            background-repeat no-repeat
                            background-size 100% 100%
                            width 22px
                            height 22px
                            margin-left auto
                    .progress
                        margin-top 10px
                        .myProgress
                            >>>.nut-progress-outer
                                border-radius $border-radius
                    .btnZ
                        display flex
                        align-items center
                        margin-top 15px
                        .iocn
                            background-image url('../../assets/img/index/z_zcrs.jpg')
                            background-repeat no-repeat
                            background-size 100% 100%
                            width 15px
                            height 18px
                            margin-right 5px
                        .zhichi
                            border 1px solid $color
                            padding 2px 10px
                            border-radius $border-radius
                            color $color
                            margin-left auto
            .man
                display flex
                align-items center
                padding 15px
                border-top solid 1px #f1f1f1
                .tip
                    background #f2f2f2
                    border 1px solid #f2f2f2
                    border-radius $border-radius
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