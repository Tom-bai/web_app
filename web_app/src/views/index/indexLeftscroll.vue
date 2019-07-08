<template>
	<!-- 商品左滑动卡片 -->
    <div>
        <div class="indexLeftscroll">
            <div class="topName">
                <div>今日必抢</div>
                <div class="tip">高品质爆款抢先不断</div>
            </div>
            <div class="mian" v-for="(item,index) in dataList" :key="index">
                <div class="imgBg"><img  v-lazy="$imgUrl + item.img" alt=""></div>
                <div class="container">
                    <div class="list" v-for="(list,index) in item.goods_list" :key="index" @click="onRouter('/ProductDetails',list.id)">
                        <div class="img"><img v-lazy="$imgUrl + list.img" alt=""></div>
                        <div class="name">{{list.title}}</div>
                        <div class="money">
                            <div>¥{{list.member_price}}</div>
                            <div class="vip"></div>
                        </div>
                    </div>
                    <div class="list" @click="onRouter('/indexLeftGoosd',item.id)">
                        <img src="../../assets/img/index/all2.png" alt="">
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
            dataList: []
		}
	},
	mounted() {
        this.getData()
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
        getData () { // 获取数据
            let that = this
			get('/index.php/home/index/plate_goods').then(res => {
                that.dataList = res   
            }).catch(function (error) {
                console.log(error)
            })
        },
	},
	watch: {}
};
</script>
<style lang="stylus" scoped>
.indexLeftscroll
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
    .mian
        margin-bottom 10px
        .imgBg
            min-height 30px
            background-color #fff
            img
                width 100%
                display block
                height 240px
        .container
            display flex
            align-items: center
            width 100%
            overflow-x scroll
            margin-top -30px
            -webkit-overflow-scrolling touch
            &::-webkit-scrollbar 
                display:none
            .list
                flex 0 0 26%
                border none
                border-right none
                padding 10px 10px 10px 0
                background-color #fff
                height 170px
                &:first-child
                    margin-left 15px
                    border-radius $border-radius 0 0 $border-radius
                    padding-left 10px
                &:last-child
                    padding 10px 10px 10px 0
                    border-radius 0 $border-radius $border-radius 0
                    img
                        width 100%
                        background-color #fff
                        height 100%
                        margin-right 25px
                        border-radius $border-radius
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