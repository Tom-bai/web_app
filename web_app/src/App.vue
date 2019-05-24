<template>
	<div id="app">
		<div class="main">
            <router-view/>
		    <Tabbar></Tabbar>
        </div>
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
html,body{
    padding 0
    font-family PingFangSC-Regular,Helvetica Neue,Helvetica,microsoft yahei,sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    text-align center
    color #2c3e50
    margin 0 auto 70px auto 
    background-color #f5f5f5
}
</style>
