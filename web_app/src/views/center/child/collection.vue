<template>
	<!-- 我的收藏 -->
	<div>
		<div class="collection">
            <div class="mainBox" v-if="collectList.length > 0">
                <nut-infiniteloading @loadmore="onInfinite" :is-show-mod="true"  :is-loading="isLoading" :threshold="200" :has-more="isHasMore">
                    <div class="list" v-for="(item,index) in collectList" :key="index" v-if="item.title">
                        <div class="time">{{item.ctime}}</div>
                        <div class="goodsBox">
                            <div class="img"><img v-lazy="$imgUrl + item.img" alt=""></div>
                            <div class="main">
                                <div class="name">{{item.title}}</div>
                                <div class="money">
                                    <div class="M">¥{{item.show_price}}</div>
                                    <div class="cBtn" @click="onRouter('/ProductDetails',item.id)">查看</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nut-infiniteloading>
            </div>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import { get,post,formatTime,toast } from '@/axiosApi'
import Bus from '@/bus.js'
export default {
	name: "collection",
	components: {
	},
	props: [],
	data () {
		return {
            collectList: [],
            limit: 1,
            isHasMore: true,
            isLoading: false,
            hasLike: false
		}
	},
	mounted() {
        this.getCollect_List()
    },
    beforeDestroy() {

    },
	methods: {
		getCollect_List (status) { // 获取收藏信息
            let that = this
            let params = {
                limit: that.limit
            }
            get('/index.php/home/member/collect_list',params).then(res => {
                if (res.length == undefined) {
                    that.isLoading = false
                    that.isHasMore = false
                    that.hasLike = true
                } else {
                    that.collectList = that.collectList.concat(res)
                    that.isLoading = false
                    that.isHasMore = true
                    that.hasLike = false
                }
            }).catch(function (error) {
                console.log(error)
            })
            
        },
        times (time) {
            let times = JSON.parse(time) * 1000
            return formatTime(new Date(times), 'yyyy-MM-dd hh:mm:ss')
        },
        onInfinite () { //加载更多
            let that = this
            if (that.isHasMore) {
                that.isLoading = false
                that.isHasMore = false
                that.limit++
                that.getCollect_List()
            }
        },
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
.mainBox
    .list
        background-color #ffffff
        text-align left 
        padding 0 15px
        margin-bottom 10px
        .time
            line-height 40px
            border-bottom solid 1px #f1f1f1
        .goodsBox
            display flex
            padding 10px 0
            .img
                flex 0 0 80px
                height 80px
                img
                    width 100%
                    height 100%
                    display block
                    border-radius $border-radius
            .main
                padding-left 10px
                flex 1
                .name
                    text-overflow ellipsis
                    display -webkit-box
                    -webkit-line-clamp 2
                    -webkit-box-orient vertical
                    overflow hidden
                    line-height 1.3
                    font-size 14px
                    font-weight 500
                    height 38px
                .money
                    display flex
                    align-items center
                    margin-top 20px
                    .M
                        font-size 16px
                        color $color 
                        font-weight 700
                    .cBtn
                        margin-left auto
                        background-color $background-color
                        color #ffffff
                        border-radius $border-radius
                        font-size-adjust 14px
                        padding 8px 20px
</style>