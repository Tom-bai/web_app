<template>
    <div>
        <div class="componentsWater">
            <div class="topName">
                <div>大象宝贝</div>
            </div>
            <div class="watefall" id='watefall' v-masonry transition-duration="0.1s" item-selector=".pin">
                <div v-masonry-tile class="pin" v-for="(item,index) in likeData" :key="index">
                    <div class="box" @click="onRouter('/ProductDetails',item.id)">
                        <img :src="item.img" v-lazy="$imgUrl + item.img"/>
                        <div class="watefallText" v-if="item.title">{{item.title}}</div>
                        <div class="myWatefall">
                            <div class="watefallHeadtext">
                                <div class="mySignature">{{item.title}}</div>
                                <div class="money">
                                    <div>¥{{item.price}}</div>
                                    <div class="vip"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { get } from '@/axiosApi'
export default {
    name: "Like",
    props: ['likeData'],
    data () {
        return {
        }
    },
    created () {
    },
    mounted () {
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
    watch: {
    },
    components: {
    }
}
</script>
<style lang="stylus" scoped>
.componentsWater
    .topName
        display flex
        align-items center
        font-size 16px
        font-weight bold
        height 40px
        justify-content center
    .watefall
        position relative
        .pin
            float left
            width 47%
            padding 10px 0 0 8px
            // &:first-child
            //     .box
            //         >img 
            //             height 270px
            //             border-radius $border-radius
            .box
                background-color #ffffff
                border-radius 3px
                padding 0px
                text-align left 
                max-height 265px
                overflow hidden
                >img
                    width:100%
                    height:auto
                    display block
                    border-radius border-radius border-radius 0 0
                .watefallText
                    font-size 14px
                    font-weight bold
                    text-overflow ellipsis
                    display -webkit-box
                    -webkit-line-clamp 1
                    -webkit-box-orient vertical
                    overflow hidden
                    margin 5px 10px
                    line-height 1.3
                .myWatefall
                    padding 0px 10px 15px 10px
                    .watefallHeadtext
                        .mySignature
                            text-overflow ellipsis
                            display -webkit-box
                            -webkit-line-clamp 2
                            -webkit-box-orient vertical
                            overflow hidden
                            line-height 1.3
                            .num
                                display flex
                                align-items center
                                justify-content flex-end
                                .shu
                                    margin-right 20px
                                .img
                                    display flex
                                    align-items center
                                    img
                                        width 16px
                                        height 16px
                                        border-radius 100%
                                        margin-left -10px
                                        display block
                        .money
                            color $color
                            font-size 14px
                            font-weight bold
                            background-color #fff
                            display flex
                            align-items center
                            justify-content flex-start
                            line-height 1
                            margin-top 5px
                            .vip
                                background-image url('../assets/img/index/vip.png')
                                background-repeat no-repeat
                                background-size 100%
                                width 25px
                                height 14px
                                margin-left 5px
</style>
