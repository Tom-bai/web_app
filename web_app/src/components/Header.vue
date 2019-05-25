<template>
    <div class="Header">
        <div class="back" @click="onRouter">返回</div>
        <div class="text"><slot name="topName"></slot></div>
        <div class="more"></div><!-- 占位 -->
    </div>
</template>

<script>
export default {
	name: 'Tabbar',
	props: {
		msg: String
	},
	data () {
		return {
		}
	},
	methods: {
		onRouter () {
			this.$router.go(-1)
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.Header
    display flex
    align-items center
    height 60px
    box-shadow 0 0 8px #ccc
    position sticky
    top 0
    left 0
    width 100%
    background-color #fff
    z-index 1000
    .back
        flex 0 0 60px
        height 60px
        font-size 14px
        display flex
        align-items center
        justify-content center
    .text
        font-size 14px
        flex 1
    .more
        flex 0 0 60px
        height 60px
        font-size 14px
</style>
