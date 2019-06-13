<template>
    <div>
        <div class="indexSearch">
            <div class="box">
                <van-search
                    v-model="value"
                    :placeholder="hotsData.one_hot"
                    show-action
                    @input="searcInput"
                >
                <div slot="action" @click="onBack" v-if="show">取消</div>
                <div slot="action" @click="onSearch" v-else>搜索</div>
                </van-search>
            </div>
            <div class="data">
                <div class="list" v-for="(item,index) in searchData">{{item.title}}</div>
            </div>
            <div class="hotSearch" v-if="searchData == ''">
                <div class="head">热门搜索</div>
                <div class="list">
                    <div class="item" v-for="(item,index) in hotsData.hots">{{item}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Search } from 'vant'
import { get,post } from '@/axiosApi'
import axios from 'axios'
export default {
    name: 'indexSearch',
    props: {
        msg: String
    },
    components:{
        [Search.name]: Search,
    },
    data() {
        return {
            value: '',
            show: true,
            hotsData: [],
            searchData: []
        }
    },
    mounted() {
        this.getHotsr()
    },
    methods: {
        getHotsr () { // 获取随机热词
            let that = this
			get('/index.php/home/index/hots').then(res => {
                that.hotsData = res
            }).catch(function (error) {
                console.log(error)
            })
        },
        searcInput () {
            let that = this
            if (that.value != 0) {
                that.show = false
                let params = {
                    title: that.value
                }
                axios({
                    method: 'get',
                    url: '/index.php/home/search/byTitle',
                    params: params
                }).then( res => {
                    that.searchData = res.data
                })
                .catch( err => {})
            } else {
                that.show = true
                that.searchData = []
            }   
        },
        onBack (pathUrl,id) {
            this.$router.go(-1)
        },
        onSearch () {

        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.indexSearch
    position fixed
    width 100%
    height 100%
    background-color #fff
    overflow-y auto
    top 0
    left 0
.box
    padding 20px 10px
    background-color #fff
    position sticky
    top 0
    left 0
    >>> .van-search
            padding 0
            .van-search__content
                border-radius $border-radius
.data
    padding 0 15px
    background-color #fff
    .list
        display flex
        align-items center
        height 40px
        text-align left
        border-bottom solid 1px #f1f1f1
.hotSearch
    .head
        font-size 14px
        text-align left
        line-height 40px
        padding 0 15px
    .list
        display flex
        align-items center
        padding 0 15px
        .item
            margin  0px 8px 8px 0
            background-color #f1f1f1
            padding 6px 12px
            border-radius $border-radius
            color #666
</style>

