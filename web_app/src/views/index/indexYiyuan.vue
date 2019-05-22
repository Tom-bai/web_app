<template>
	<!-- 一元抢购 -->
    <div class="indexYiyuan">
        <div class="nav">
            <div class="ziding">
                <div class="iocn">
                    <div><img src="../../assets/img/all.png" alt=""></div>
                    <div>全部</div>
                </div>
                <div>品质好货</div>
            </div>
            <div class="ziding">
                <div class="iocn">
                    <div><img src="../../assets/img/yh.png" alt=""></div>
                    <div>一元</div>
                </div>
                <div>会员专享</div>
            </div>
            <div class="ziding">
                <div class="iocn">
                    <div><img src="../../assets/img/zan.png" alt=""></div>
                    <div>众筹</div>
                </div>
                <div>达人推荐</div>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
export default {
	name: "indexYiyuan",
	components: {
	},
	props: [],
	data () {
		return {
		}
	},
	mounted() {
    },
	methods: {
        tabSwitch (index,event) {
            console.log(index)
        }
	},
	watch: {}
};
</script>
<style lang="stylus">
.indexYiyuan
    position sticky
    left 0
    top 70px
    z-index 99
    background-color #fff
    .nav
        display flex
        align-items center
        height 60px
        .ziding
            flex 1
            .iocn
                display flex
                align-items center
                font-size 16px
                font-weight 700
                justify-content center
                img
                    width 18px
                    height 18px
                    display block
</style>