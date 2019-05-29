<template>
	<!-- 今日必抢 -->
    <div>
        <div class="indexBiqiang">
            <div class="newFuli" @click="onRouter('/indexVipJuan',3)"><img v-lazy="$imgUrl + 'Uploads/' + dataList.home_img_1" alt=""></div>
            <div class="topName">
                <div>{{dataList.cn_bt}}</div>
                <div class="tip">{{dataList.cn_fbt}}</div>
            </div>
            <div class="box boderRT">
                <div class="listTwo">
                    <!-- 新品上市 -->
                    <div class="item">
                        <div class="header">
                            <p>{{dataList.jr_tl_bt}}</p>
                        </div>
                        <div class="img"><img v-lazy="$imgUrl + 'Uploads/' + dataList.jr_tl_img" alt=""></div>
                    </div>
                </div>
                <div class="listTwo">
                    <!-- 满减 传值 id = 2-->
                    <div class="item" @click="onRouter('/indexMan',2)">
                        <div class="header">
                            <p>{{dataList.jr_tr_bt}}</p>
                        </div>
                        <div class="img"><img v-lazy="$imgUrl + 'Uploads/' + dataList.jr_tr_img" alt=""></div>
                    </div>
                </div>
            </div>
            <div class="box boderRB">
                <div class="listThree">
                    <!-- 砍价 -->
                    <div class="item boderRL">
                        <div class="header">
                            <p>{{dataList.jr_bl_bt}}</p>
                            <p class="tip">{{dataList.jr_bl_fbt}}</p>
                        </div>
                        <div class="img"><img v-lazy="$imgUrl + 'Uploads/' + dataList.jr_bl_img" alt=""></div>
                    </div>
                </div>
                <div class="listThree">
                    <!-- 拼团 -->
                    <div class="item" @click="onRouter('/indexManPinTuan')">
                        <div class="header">
                            <p>{{dataList.jr_bm_bt}}</p>
                            <p class="tip">{{dataList.jr_bm_fbt}}</p>
                        </div>
                        <div class="img"><img v-lazy="$imgUrl + 'Uploads/' + dataList.jr_bm_img" alt=""></div>
                    </div>
                </div>
                <div class="listThree">
                    <!-- 满件减 传值 id = 1 -->
                    <div class="item boderRB" @click="onRouter('/indexManJJ',1)">
                        <div class="header">
                            <p>{{dataList.jr_br_bt}}</p>
                            <p class="tip">{{dataList.jr_br_fbt}}</p>
                        </div>
                        <div class="img"><img v-lazy="$imgUrl + 'Uploads/' + dataList.jr_br_img" alt=""></div>
                    </div>
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
            dataList: [],
		}
	},
	mounted() {
        this.getDataJin()
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
        getDataJin () { // 首页新品，满减，砍价，拼团的设置
            let that = this
			get('/index.php/home/index/indexset').then(res => {
                that.dataList = res   
            }).catch(function (error) {
                console.log(error)
            })
        },
	},
	watch: {}
};
</script>
<style lang="stylus" scoped>
.indexBiqiang
    padding 0 15px
    .newFuli
        margin-top 10px
        img
            display block
            width 100%
            border-radius $border-radius
    .topName
        display flex
        align-items center
        font-size 16px
        font-weight bold
        height 50px
        background-color #fff
        margin-top 10px
        padding 0 10px
        border-radius $border-radius $border-radius 0 0
        .tip
            margin-left 15px
            color #999
            font-size 12px
            font-weight normal
    .boderRL
        border-radius 0 0 0 $border-radius
    .boderRB
        border-radius 0 0 $border-radius 0
    .box
        display flex
        border-top solid 1px #f1f1f1
        .listTwo
            flex 1
            border-right 1px solid #ddd
            text-align left 
            &:last-child
                border-right none
            .item
                padding 8px
                background-color #fff
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
                        border-radius $border-radius
        .listThree
            flex 1
            border-right 1px solid #ddd
            text-align center 
            &:last-child
                border-right none
            .item
                padding 8px
                background-color #fff
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
                        border-radius $border-radius
</style>