<template>
	<!-- 首页 -->
	<div class="index">
		<div class="search-box">
			<div class="search">
				<div class="header"><img src="../../assets/img/nav.jpg" alt=""></div>
				<div class="input"><img src="../../assets/img/sc.png" alt="">阿迪达斯</div>
				<div class="tongzhi"><img src="../../assets/img/tz.png" alt=""><span>10</span></div>
			</div>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
export default {
	name: "index",
	components: {
	},
	props: [],
	data () {
		return {}
	},
	methods: {},
	watch: {}
};
</script>
<style lang="stylus" scoped>
.index
	>.search-box
		position sticky
		width 100%
		top 0
		z-index 9
		left 0
		>.search
			display flex
			align-items center
			background-color #cad9ae
			padding 0 15px
			height 70px
			>.header
				>img
					width 50px
					border-radius 100%
			>.input
				flex: 1
				background-color #fff
				border-radius 20px
				text-align left 
				line-height 35px
				padding 0 10px
				margin 0 10px
				>img 
					display inline-block
					vertical-align middle
					width 15px
					margin-right 5px
					margin-top -2px
			>.tongzhi
				position: relative;
				>img
					width 30px
				>span 
					position absolute
					width 18px
					height 18px
					border-radius 100%
					background-color red
					color #fff
					top -8px
					right -10px
					text-align center
					line-height .48rem
</style>