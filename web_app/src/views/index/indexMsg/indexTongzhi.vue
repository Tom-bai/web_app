<template>
	<!-- 访客通知 -->
	<div> 
		<!-- <Header><span slot="topName">访客通知</span></Header> -->
		<div class="indexTongzhi">
			<div class="box">
				<div class="list">
					<div class="iocn"><img src="../../../assets/img/index/myMsg/2222.jpg" alt=""></div>
					<div class="text">
						<div class="top">
							<div class="tip">Bai白访问了你的链接</div>
						</div>
						<div class="new">2019-4-12 14:07</div>
					</div>
				</div>
				<div class="list">
					<div class="iocn"><img src="../../../assets/img/index/myMsg/2222.jpg" alt=""></div>
					<div class="text">
						<div class="top">
							<div class="tip">Bai白访问了你的链接</div>
						</div>
						<div class="new">2019-4-12 14:07</div>
					</div>
				</div>
				<div class="list">
					<div class="iocn"><img src="../../../assets/img/index/myMsg/2222.jpg" alt=""></div>
					<div class="text">
						<div class="top">
							<div class="tip">Bai白访问了你的链接</div>
						</div>
						<div class="new">2019-4-12 14:07</div>
					</div>
				</div>
			</div>
			<div class="nomore">已经显示全部消息了</div>
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
.box
    background-color #fff
    .list
        display flex
        align-items center
        padding 0 15px
        border-bottom solid 2px #f1f1f1
        height 70px
        .iocn
            flex 0 0 50px
            height 50px
            img 
                width 100%
                border-radius 100%
                display block
        .text
            flex 1
            text-align left 
            padding 0 15px
            .top
                display flex
                align-items center
                .tip
                    font-size 15px
                    font-weight 400
                .time
                    font-size 12px
                    color #999
                    margin-left auto
            .new
                font-size 12px
                margin-top 5px
</style>