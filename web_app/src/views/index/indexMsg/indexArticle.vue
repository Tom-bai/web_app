<template>
	<!-- 文章 -->
	<div> 
		<!-- <Header><span slot="topName">文章名字</span></Header> -->
		<div class="indexArticle">
			<div class="article" v-for="item in Article">
				<div class="banner"><img v-lazy="$imgUrl + item.img" alt=""></div>
				<div class="content">
					<h1>{{item.title}}</h1>
					<div class="timeBox">
						<div class="time"><time>{{times(item.c_time)}}</time></div>
						<div class="zan">
							<div>浏览量：{{item.hit}}</div>
							<div class="zanIocn" :class="zanShow?'zanZ':'zanN'" @click="onZan"></div>
						</div>
					</div>
					<div class="textbox" v-html="item.content"></div>
				</div>
			</div>
		</div>
		<Like class="articleLike"></Like>
	</div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header'
import Like from '@/components/Like'
import { get,formatTime } from '@/axiosApi'
export default {
	name: "indexToutiao",
	components: {
		Header,
		Like
	},
	props: [],
	data () {
		return {
            zanShow: false,
            Article: []
		}
	},
	mounted() {
        this.getArticle() 
    },
    destroyed () {
    },
	methods: {
        times (time) {
            let times = JSON.parse(time)
            return formatTime(new Date(times), 'yyyy-MM-dd hh:mm:ss')
        },
		onZan () {
			this.zanShow = !this.zanShow
        },
        getArticle () { // 获取文章列表
            let that = this
            let params = {
                id: that.$route.query.id
            }
			get('/index.php/home/article/detail',params).then(res => {
                that.Article = res
            }).catch(function (error) {
                console.log(error)
            })
        },
	},
	watch: {}
};
</script>
<style lang="stylus" scoped>
.article
    .banner
        img 
            width 100%
            display block
    .content
        padding 15px
        text-align left 
        background-color #fff
        h1
            font-size 18px
        .timeBox
            display flex
            align-items center
            font-size 13px
            .time
                time
                    padding-right 10px
            .zan
                display flex
                align-items center
                margin-left auto
                .zanIocn
                    margin-left 10px
                    width 18px
                    height 18px
                    background-size 100%
                    background-repeat no-repeat
                .zanN
                    background-image url('../../../assets/img/index/myMsg/zanh.png')
                .zanZ
                    background-image url('../../../assets/img/index/myMsg/zan.png')
        .textbox
            font-size 14px
            padding-top 10px
            img 
                width 100%
                display block
.articleLike
    margin-top 10px
    margin-bottom 30px
</style>