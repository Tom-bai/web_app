<template>
    <div>
        <div class="MoreComments">
            <div class="haoPing">
                <div class="left" @click="onBack"></div>
                <div class="right"><span>{{$route.query.type}}</span> 好评</div>
            </div>
            <div class="tags">
                <div class="list" :class="tagActive == index?'avtive':''" v-for="(item,index) in tagData" :key="index" @click="onTags(index)">{{item.title}}({{item.num}})</div>
            </div>
            <div class="listBox">
                <div class="list" v-for="(item,index) in commentData" :key="index">
                    <div class="head">
                        <div class="img"><img v-lazy="$imgUrl + item.img" alt=""></div>
                        <div>{{item.names}}</div>
                    </div>
                    <div class="content">{{item.content}}</div>
                    <div class="pimg" v-if="item.pimg">
                        <div class="item" v-for="(img,index) in item.pimg" :key="index">
                            <img v-lazy="$imgUrl + img.img" alt="" @click="onSeeImg(item.pimg,index)">
                        </div>
                    </div>
                    <div class="zan">
                        <div @click="onZan(item.id,index)" v-if="item.islike == 0"><img src="../assets/img/index/zanh.png" alt=""></div>
                        <div @click="onZan(item.id,index)" v-else><img src="../assets/img/index/zan.png" alt=""></div>
                        <div>{{item.like_num}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { ImagePreview } from 'vant'
import { get,post,toast } from '@/axiosApi'
export default {
    name: 'MoreComments',
    data() {
        return {
            limit: 1,
            tagData: [],
            tagActive: 0,
            commentData: [],
        }
    },
    components: {
    },
    mounted() {
        this.getComment()
        this.getTags()
    },
    methods: {
        onSeeImg (imgs,index) { // 预览图片
            let seeImg = []
            for (let i in imgs) {
                seeImg.push(this.$imgUrl + imgs[i].img)
            }
            ImagePreview(seeImg,index)
        },
        onTags (index) {
            this.tagActive = index
        },
        getTags () { // 获取评论状态
            let that = this
            let params = {
                id: that.$route.query.id
            }
			get('/index.php/home/goods/tags',params).then(res => {
                that.tagData = res
            }).catch(function (error) {
                console.log(error)
            })
        },
        getComment () { // 获取评论列表
            let that = this
            that.seeImg = []
            let params = {
                g_id: that.$route.query.id,
                limit: that.limit,
            }
			get('/index.php/home/goods/getComment',params).then(res => {
                that.commentData = res
            }).catch(function (error) {
                console.log(error)
            })
        },
        onBack () {
			this.$router.go(-1)
        },
        onZan (id,index) {
            let that = this
            let params = {
                id: id
            }
			get('/index.php/home/goods/ajax_comment',params).then(res => {
               if (res.status == 1) {
                   that.commentData[index].islike = 1
                   that.commentData[index].like_num += 1
               } else {
                   that.commentData[index].islike = 0
                   that.commentData[index].like_num -= 1
               }
            }).catch(function (error) {
                console.log(error)
            })
        }
    },
}
</script>
<style lang="stylus" scoped>
.MoreComments
    position fixed
    width 100%
    height 100%
    top 0
    left 0
    z-index 100
    overflow-y auto
    .haoPing
        display flex
        align-items center
        background-color #ffffff
        height 50px
        border-bottom solid 1px #f1f1f1
        position sticky
        width 100%
        top 0
        left 0
        .left
            background-image url('../assets/img/rightT.png')
            background-size 25px 25px
            height 25px
            background-repeat no-repeat
            transform rotate(180deg)
            background-position 50%
            background-size 14% 50%
            background-repeat no-repeat
            flex 0 0 40px
        .right
            margin-left auto
            padding 0 15px
            span 
                font-size 14px
                font-weight 700
                color $color
                vertical-align middle
    .tags
        display flex
        align-items center
        background-color #fff
        padding 15px
        .list
            font-size 13px
            border solid 1px #333
            border-radius $border-radius
            margin 0 10px 10px 0
            color #333
            padding 4px 8px
        .avtive
            color $color
            border solid 1px $color
    .listBox
        margin-top 10px
        .list
            background-color #fff
            margin-bottom 10px
            padding 10px 15px
            .head
                display flex
                align-items center
                .img
                    flex 0 0 30px
                    height 30px
                    margin-right 10px
                    img 
                        width 100%
                        height 100%
                        display block
                        border-radius 100%
            .content
                text-align left 
                padding 10px 0
            .pimg
                display flex
                align-items center
                flex-wrap wrap
                .item
                    flex 0 0 33.333%
                    margin-bottom 5px
                    img 
                        width 110px
                        height 110px
                        display block
                        margin auto
            .zan
                display flex
                height 30px
                align-items center
                font-size 13px
                justify-content flex-end
                img 
                    width 20px
                    height 20px
                    margin-right 10px
</style>