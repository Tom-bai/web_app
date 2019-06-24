<template>
	<!-- 头条消息 -->
	<div> 
		<!-- <Header><span slot="topName">享疯了头条</span></Header> -->
		<div class="indexToutiao">
			<div class="boxs">
                <nut-infiniteloading @loadmore="onInfinite" :is-show-mod="true"  :is-loading="isLoading" :threshold="200" :has-more="isHasMore">
                    <div class="list" v-for="(item,index) in ArticleList" :key='index' @click="onRouter('/myMsg/indexArticle',item.id)">
                        <div class="iocn"><img  v-lazy="$imgUrl + item.img" alt=""></div>
                        <div class="text">
                            <div class="top" :class="item.uid == null?'':'yidu'">{{item.title}}</div>
                            <div class="conts">{{item.des}}</div>
                            <div class="new">
                                <!-- <div class="tip">浏览量：{{item.type}}</div> -->
                                <div class="time">{{times(item.c_time)}}</div>
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
import Header from '@/components/Header'
import { get,formatTime } from '@/axiosApi'
export default {
	name: "indexToutiao",
	components: {
		Header
	},
	props: [],
	data () {
		return {
            ArticleList: [],
            limit: 1,
            isHasMore: true,
            isLoading: false,
		}
	},
	mounted() {
        this.getArticleList()
    },
    destroyed () {
    },
	methods: {
        onInfinite () {
            let that = this
            if (that.isHasMore) {
                that.isLoading = true
                that.limit++
                that.getArticleList()
            }
        },
        times (time) {
            let times = JSON.parse(time) * 1000
            return formatTime(new Date(times), 'yyyy-MM-dd hh:mm:ss')
        },
		onRouter (pathUrl,id) {
            this.$router.push({
				path: pathUrl,
				query: {
                    id: id
				}
			})
        },
        getArticleList () { // 获取文章列表
            let that = this
            let params = {
                limit: that.limit
            }
			get('/index.php/home/article/articleList',params).then(res => {
                if (res.length == 0) {
                    that.isLoading = false
                    that.isHasMore = false
                } else {
                    that.ArticleList = that.ArticleList.concat(res)
                    that.isLoading = false
                    that.isHasMore = true
                }
            }).catch(function (error) {
                console.log(error)
            })
        },
	},
	watch: {}
};
</script>
<style lang="stylus">
.boxs
    .list
        display flex
        align-items center
        padding 15px
        border-bottom solid 2px #f1f1f1
        background-color #fff
        .iocn
            flex 0 0 100px
            img 
                width 100px
                height 80px
                display block
        .text
            text-align left
            height 80px
            line-height 1
            padding-left 15px
            .top
                font-size 15px
                font-weight 700
            .yidu
                color #999
            .conts
                font-size 13px
                overflow hidden
                text-overflow ellipsis
                display -webkit-box
                -webkit-box-orient vertical
                -webkit-line-clamp 2
                white-space initial
                line-height 1.3
                margin 10px 0
                hr
                    margin 0
                >p
                    margin 0 
                    overflow hidden
                    text-overflow ellipsis
                    display -webkit-box
                    -webkit-box-orient vertical
                    -webkit-line-clamp 2
                    white-space initial
                    line-height 1.3
            .new
                display flex
                align-items center
                font-size 12px
                color #999
                .time
                    margin-left auto

</style>