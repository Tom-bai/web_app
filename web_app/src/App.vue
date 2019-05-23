<template>
	<div id="app">
		<router-view/>
		<Tabbar></Tabbar>
	</div>
</template>
<script>
	import Tabbar from './components/Tabbar '
	export default {
		name: "index",
		components: {
			Tabbar
		},
		props: [],
		data () {
		return {}
		},
		methods: {},
		watch: {}
	};
</script>
<style lang="stylus">
body,html
	margin 0
	padding 0
#app
	font-family PingFangSC-Regular,Helvetica Neue,Helvetica,microsoft yahei,sans-serif
	-webkit-font-smoothing antialiased
	-moz-osx-font-smoothing grayscale
	text-align center
	color #2c3e50
	max-width 640px
	margin 0 auto 70px auto 
</style>
