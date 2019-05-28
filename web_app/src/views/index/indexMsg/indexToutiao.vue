<template>
	<!-- 头条消息 -->
	<div> 
		<!-- <Header><span slot="topName">享疯了头条</span></Header> -->
		<div class="indexToutiao">
			<div class="box">
				<div class="list" v-for="(item,index) in dataList" :key='index' @click="onRouter('/myMsg/indexArticle',item.id)">
					<div class="iocn"><img :src="item.img" alt=""></div>
					<div class="text">
						<div class="top">{{item.top}}</div>
						<div class="conts">
							{{item.conts}}
						</div>
						<div class="new">
							<div class="tip">编辑：{{item.tip}}</div>
							<div class="time">{{item.time}}</div>
						</div>
					</div>
				</div>
			</div>
			<div class="nomore">已经显示全部内容</div>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header'
export default {
	name: "indexToutiao",
	components: {
		Header
	},
	props: [],
	data () {
		return {
			dataList: [
				{
					id: 1,
					img: require('../../../assets/img/index/myMsg/2222.jpg'),
					top: '享疯了头条',
					conts: '您有新的消息您有新的消息您有新的消息您有新的消息您有新的消息您有新的消息您有新的消息您有新的消息您有新的消息您有新的消息您有新的消息您有新的消息您有新的消息您有新的消息',
					tip: 'Bai白白',
					time: '2019-4-12 14:07'
				},
				{
					id: 2,
					img: require('../../../assets/img/index/myMsg/2222.jpg'),
					top: '享疯了头条',
					conts: '您有新的消息您有新的消息您有新的消息您有新的消息您有新的消息您有新的消息您有新的消息您有新的消息您有新的消息您有新的消息您有新的消息您有新的消息您有新的消息您有新的消息',
					tip: 'Bai白白',
					time: '2019-4-12 14:07'
				},
				{
					id: 3,
					img: require('../../../assets/img/index/myMsg/2222.jpg'),
					top: '享疯了头条',
					conts: '您有新的消息您有新的消息您有新的消息您有新的消息您有新的消息您有新的消息您有新的消息您有新的消息您有新的消息您有新的消息您有新的消息您有新的消息您有新的消息您有新的消息',
					tip: 'Bai白白',
					time: '2019-4-12 14:07'
				},
				{
					id: 4,
					img: require('../../../assets/img/index/myMsg/2222.jpg'),
					top: '享疯了头条',
					conts: '您有新的消息您有新的消息您有新的消息您有新的消息您有新的消息您有新的消息您有新的消息您有新的消息您有新的消息您有新的消息您有新的消息您有新的消息您有新的消息您有新的消息',
					tip: 'Bai白白',
					time: '2019-4-12 14:07'
				},
			]
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
            .new
                display flex
                align-items center
                font-size 12px
                color #999
                .time
                    margin-left auto

</style>