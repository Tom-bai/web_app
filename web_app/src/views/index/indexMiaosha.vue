<template>
	<!-- 限时秒杀 -->
    <div class="indexMiaosha">
        <div class="topName">
            <div>限时秒杀</div>
            <!-- <div class="tip">高品质爆款抢先不断</div> -->
        </div>
        <NavTwo></NavTwo>
    </div>
</template>

<script>
// @ is an alias to /src
import { get,post } from '@/axiosApi'
import NavTwo from '@/components/NavTwo'
export default {
	name: "indexMiaosha",
	components: {
        NavTwo
	},
	props: [],
	data () {
		return {
            limit: 1
		}
	},
	mounted() {
        this.getSecKill()
    },
	methods: {
        getSecKill () { // 获取秒杀时间
            let that = this
			get('/index.php/home/index/seckill_goods').then(res => {
                console.log(res);
                
            }).catch(function (error) {
                console.log(error)
            })
        },
	},
	watch: {}
};
</script>
<style lang="stylus" scoped>
.indexMiaosha
    .topName
        display flex
        align-items center
        font-size 16px
        font-weight bold
        height 50px
        padding 0 15px
        .tip
            margin-left 15px
            color #999
            font-size 12px
            font-weight normal
</style>