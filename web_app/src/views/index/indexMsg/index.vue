<template>
	<!-- 我的消息通知 -->
	<div> 
		<div class="indexMsg">
			<Header><span slot="topName">我的通知</span></Header>
			<div class="box">
				<div class="list" @click="onRouter('/myMsg/indexToutiao')">
					<div class="iocn toutiaoIoc"></div>
					<div class="text">
						<div class="top">
							<div class="tip">享疯了头条</div>
							<div class="time">2019-4-12 14:07</div>
						</div>
						<div class="new">您有新的消息</div>
					</div>
				</div>
				<div class="list" @click="onRouter('/myMsg/indexTongzhi')">
					<div class="iocn fangkeIoc"></div>
					<div class="text">
						<div class="top">
							<div class="tip">访客通知</div>
							<div class="time">2019-4-12 14:07</div>
						</div>
						<div class="new">访客通知访问了你的分享链接</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header'
export default {
	name: "indexMsg",
	components: {
		Header
	},
	props: [],
	data () {
		return {
		}
	},
	mounted() {
    },
    destroyed () {
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
.indexMsg
	.box
		margin-top 10px
		.list
			display flex
			align-items center
			padding 0 15px
			border-bottom solid 2px #f1f1f1
			height 60px
			.iocn
				flex 0 0 50px
				height 50px
				background-size 26px
				background-repeat no-repeat
				background-position 50%
			.toutiaoIoc
				background-image url('../../../assets/img/index/myMsg/toutiao.png')
			.fangkeIoc
				background-image url('../../../assets/img/index/myMsg/fangke.png')
			.text
				flex 1
				text-align left 
				padding 0 15px
				.top
					display flex
					align-items center
					.tip
						font-size 15px
						font-weight 700
					.time
						font-size 12px
						color #999
						margin-left auto
				.new
					font-size 12px
					margin-top 5px

</style>