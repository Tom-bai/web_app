<template>
	<!-- 会员中心 -->
	<div>
        <div class="vip">
            <div class="vipCard">
                <div class="vpiBg"><img src="../../assets/img/vip/vipbg.png" alt=""></div>
                <div class="kaiBtn">立即开通</div>
                <div class="tipBottom">
                    <div class="logo"></div>
                    <div class="tip">按去年用户消费计算，开卡后一年预计省 </div>
                    <div class="iocn"></div>
                </div>
            </div>
            <div class="vipNav">
                <div class="header" @click="onShowVipNav">
                    <div class="text">专属16大特权</div>
                    <div class="iocn" :class="showVipNav?'active':''"></div>
                </div>
                <div class="navBox">
                    <div class="name"><span>划算</span></div>
                    <div class="listbox">
                        <div class="list" v-for="item in navData">
                            <div class="listImg"><img src="../../assets/img/vip/list.png" alt=""></div>
                            <div class="listText">
                                <div class="name">9折/96折</div>
                                <div class="tip">专享折扣</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="navBox">
                    <div class="name"><span>划算</span></div>
                    <div class="listbox">
                        <div class="list" v-for="item in navData">
                            <div class="listImg"><img src="../../assets/img/vip/list.png" alt=""></div>
                            <div class="listText">
                                <div class="name">9折/96折</div>
                                <div class="tip">专享折扣</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="navBox">
                    <div class="name"><span>划算</span></div>
                    <div class="listbox">
                        <div class="list" v-for="item in navData">
                            <div class="listImg"><img src="../../assets/img/vip/list.png" alt=""></div>
                            <div class="listText">
                                <div class="name">9折/96折</div>
                                <div class="tip">专享折扣</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
export default {
	name: "vip",
	components: {
	},
	props: [],
	data () {
		return {
            showVipNav: false,
            navData: new Array(5)
        }
	},
	methods: {
        onShowVipNav () {
            this.showVipNav = !this.showVipNav
        }
    },
	watch: {}
};
</script>
<style lang="stylus" scoped>
.vipCard
    margin 15px
    position relative
    .vpiBg
        img
            width 100%
            display block
    .kaiBtn
        background linear-gradient(270deg,#ffedbe,#ffe8aa)
        position absolute
        top 10px
        right 10px
        width 100px
        height 30px
        line-height 30px
        border-radius 20px
        font-weight 400
    .tipBottom
        position absolute
        bottom 40px
        left 0
        display flex
        align-items center
        width 100%
        color #ffefc4
        justify-content center
        .logo
            width 20px
            height 20px
            background-image url('../../assets/img/vip/logo2.png')
            background-size 100% 100%
        .tip
            flex 0 0 240px
            text-overflow ellipsis
            display -webkit-box
            -webkit-line-clamp 1
            -webkit-box-orient vertical
            overflow hidden
        .iocn
            width 18px
            height 18px
            background-image url('../../assets/img/vip/ioc2.png')
            background-size 100% 100%
.vipNav
    padding 15px 0
    background-color #fff
    .header
        display flex
        align-items center
        font-size 15px
        font-weight bold
        justify-content center
        .iocn
            width 15px
            height 15px
            background-image url('../../assets/img/vip/down.png')
            background-size 100% 100%
            margin-left 5px
            transform rotate(180deg)
        .active
            transform rotate(0deg)
.navBox
    display flex
    align-items center
    padding-top 15px
    .name
        flex 0 0 20px
        span
            width 12px
            display block
            border-right 1px dashed #c3c2c1
            color #c3c2c1
            padding 0 15px
    .listbox
        display flex
        align-items center
        flex-flow wrap
        flex 1
        padding 0 10px
        .list
            flex 1
            .listImg
                img 
                    width 40px
                    display block
                    margin auto
            .listText
                line-height 1
                .name
                    padding 5px 0
                .tip
                    color #999
</style>