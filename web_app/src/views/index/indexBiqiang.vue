<template>
	<!-- 今日必抢 -->
    <div class="indexBiqiang">
        <div class="topName">
            <div>今日必抢</div>
            <div class="tip">高品质爆款抢先不断</div>
        </div>
        <div class="box">
            <div class="listTwo">
                <div class="item">
                    <div class="header">
                        <p>新品上市</p>
                    </div>
                    <div class="img"><img src="../../assets/img/111.jpg" alt=""></div>
                </div>
            </div>
            <div class="listTwo">
                <div class="item">
                    <div class="header">
                        <p>新品上市</p>
                    </div>
                    <div class="img"><img src="../../assets/img/111.jpg" alt=""></div>
                </div>
            </div>
        </div>
        <div class="box">
            <div class="listThree">
                <div class="item">
                    <div class="header">
                        <p>新品上市</p>
                        <p class="tip">邀请好友白拿</p>
                    </div>
                    <div class="img"><img src="../../assets/img/2222.jpg" alt=""></div>
                </div>
            </div>
            <div class="listThree">
                <div class="item">
                    <div class="header">
                        <p>新品上市</p>
                        <p class="tip">邀请好友白拿</p>
                    </div>
                    <div class="img"><img src="../../assets/img/cwww.jpg" alt=""></div>
                </div>
            </div>
            <div class="listThree">
                <div class="item">
                    <div class="header">
                        <p>新品上市</p>
                        <p class="tip">邀请好友白拿</p>
                    </div>
                    <div class="img"><img src="../../assets/img/2222.jpg" alt=""></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import { get } from '@/axiosApi'
export default {
	name: "indexBiqiang",
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

	},
	watch: {}
};
</script>
<style lang="stylus" scoped>
.indexBiqiang
    padding 0 15px
    .topName
        display flex
        align-items center
        font-size 16px
        font-weight bold
        height 50px
        .tip
            margin-left 15px
            color #999
            font-size 12px
            font-weight normal
    .box
        display flex
        border 1px solid #ddd
        &:last-child
            border-top none
        .listTwo
            flex 1
            border-right 1px solid #ddd
            text-align left 
            &:last-child
                border-right none
            .item
                padding 8px
                .header
                    font-size 16px
                    height 30px
                    p
                        margin 0
                        padding 0
                .img
                    img 
                        width 100%
                        display block
        .listThree
            flex 1
            border-right 1px solid #ddd
            text-align center 
            &:last-child
                border-right none
            .item
                padding 8px
                .header
                    font-size 16px
                    height 45px
                    p
                        margin 0
                        padding 0
                    .tip
                        font-size 12px
                .img
                    img 
                        width 100%
                        display block
</style>