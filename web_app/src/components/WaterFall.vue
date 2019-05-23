<template>
    <div class="componentsWater">
        <div class="topName">
            <div>猜你喜欢</div>
        </div>
        <div class="watefall" id='watefall' v-masonry transition-duration="0.1s" item-selector=".pin">
            <div v-masonry-tile class="pin" v-for="(item,index) in articleData" :key="index">
                <div class="box">
                    <img :src="item.img"/>
                    <div class="watefallText">{{item.qm}}</div>
                    <div class="myWatefall">
                        <div class="watefallHeadtext">
                            <div class="mySignature">浮生若梦 FACE & BODY 双用水粉霜 50毫升</div>
                            <div class="num">
                                <div class="shu">15万</div> 
                                <div class="img">
                                    <img src="../assets/img//nav.jpg" alt=""> 
                                    <img src="../assets/img//nav.jpg" alt=""> 
                                    <img src="../assets/img//nav.jpg" alt="">
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
export default {
    props: {
        // articleData: {
        //   type: Array
        // }
    },
    data () {
        return {
            articleData: [
                {
                    id: 1,
                    img: require('../assets/img/2222.jpg'),
                    qm: 'wdwd',
                    name: 'asds',
                    text: 'sdasd'
                },
                {
                    id: 1,
                    img: require('../assets/img/111.jpg'),
                    qm: 'wdwd',
                    name: 'asds',
                    text: 'sdasd'
                },
                {
                    id: 1,
                    img: require('../assets/img/img27.jpg'),
                    qm: 'wdwd',
                    name: 'asds',
                    text: 'sdasd'
                },
                {
                    id: 1,
                    img: require('../assets/img/2222.jpg'),
                    qm: 'wdwd',
                    name: 'asds',
                    text: 'sdasd'
                },
            ]
        }
    },
    created () {
    },
    mounted () {
    },
    methods: {
    },
    watch: {
    },
    components: {
    }
}
</script>
<style lang="stylus">
.componentsWater
    .topName
        display flex
        align-items center
        font-size 16px
        font-weight bold
        height 40px
        justify-content center
        padding-top 10px
    .watefall
        position relative
        .pin
            float left
            width 47%
            padding 10px 0 0 8px
        .box
            background-color #ffffff
            border-radius 8px
            padding 10px
            text-align left 
            >img
                width:100%
                height:auto
            .watefallText
                font-size 14px
                font-weight bold
                overflow hidden
                text-overflow ellipsis
                display -webkit-box
                -webkit-line-clamp 1
                -webkit-box-orient vertical
                padding 5px 0
            .myWatefall
                .watefallHeadtext
                    .mySignature
                        padding-bottom 5px
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
</style>
