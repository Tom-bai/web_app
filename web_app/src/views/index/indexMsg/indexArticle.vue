<template>
	<!-- 文章 -->
	<div> 
		<Header><span slot="topName">文章名字</span></Header>
		<div class="indexArticle">
			<div class="article">
				<div class="banner"><img src="../../../assets/img/index/myMsg/ac1.jpg" alt=""></div>
				<div class="content">
					<h1>捕手故事|刘淑艳：走向世界，走向内心</h1>
					<div class="timeBox">
						<div class="time"><time>2019-03-22</time>往事吧</div>
						<div class="zan">
							<div>浏览量：150万</div>
							<div class="zanIocn" :class="zanShow?'zanZ':'zanN'" @click="onZan"></div>
						</div>
					</div>
					<div class="textbox">
						<p class="name" style="text-align: center;"><strong>2019.3.22【捕手故事】第九期</strong></p>
						<p style="text-align: justify;">
							<span style="background: rgb(217, 217, 217);">
								<span style="">每一个白驹过隙的瞬间，都隐藏着一篇又一篇长篇故事，兵荒马乱的时代会迎来春暖花开的未来，曲终人散的结局会婉转成过尽千帆的寂静。此时此刻，</span>
							</span>
							<span style="background: rgb(217, 217, 217)">
								<span>请让我们看见你，走进你，你的故事，我们记录。</span>
							</span>
						</p>
						<p style="text-align: center;">
							<span style=""><img src="../../../assets/img/index/myMsg/ac1.jpg" title="" alt="微信图片_20190315190743.jpg" data-ref="1">&nbsp;</span>
						</p>
						<p class="name" style="text-align: center;"><strong>一台收音机，改变命运</strong></p>
						<p style="text-align: justify;">
							<span style="">洋娃娃？遥控汽车？书？包？</span>
							<span style="">...让刘淑艳选择，</span>
							<strong><span style="">她会毫不犹豫地选择那台【收音机】。</span></strong>
							<span style="">“我出生在江西农村，我们家有四个孩子，我是老大，家里几乎靠借钱维持正常的生活，我爸为了维持家庭生计常年在福建打工，我妈一个人扛起了全家的重担。”如今，在优雅精致的淑艳身上很难想象她儿时几乎从未穿过新衣的贫困状况。</span>
						</p>
					</div>
				</div>
			</div>
		</div>
		<Like></Like>
	</div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header'
import Like from '@/components/Like'
export default {
	name: "indexToutiao",
	components: {
		Header,
		Like
	},
	props: [],
	data () {
		return {
			zanShow: false
		}
	},
	mounted() {
    },
    destroyed () {
    },
	methods: {
		onZan () {
			this.zanShow = !this.zanShow
		}
	},
	watch: {}
};
</script>
<style lang="stylus" scoped>
.indexArticle
	.article
		.banner
			img 
				width 100%
				display block
		.content
			padding 15px
			text-align left 
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
</style>