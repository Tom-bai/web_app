<template>
	<!-- 导航 -->
    <div>
        <div class="indexNav">
            <!-- <div class="navBox">
                <div class="navHeader">
                    <div class="pz">
                        <div class="name">享疯了自营 | 品质保障</div>
                        <div class="list">
                            <div class="tip">
                                <div><img src="../../assets/img/index/c.png" alt=""></div>
                                <div>享店自营</div>
                            </div>
                            <div class="tip">
                                <div><img src="../../assets/img/index/q.png" alt=""></div>
                                <div> 全球直采</div>
                            </div>
                            <div class="tip">
                                <div><img src="../../assets/img/index/z.png" alt=""></div>
                                <div> 假一赔十</div>
                            </div>
                            <div class="tip">
                                <div><img src="../../assets/img/index/s.png" alt=""></div>
                                <div>售后无忧</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="btn">
                    <div>保障措施</div>
                    <div class="cha">查看详情</div>
                </div>
            </div> -->
            <swiper :options="swiperOption" v-if="dataNav.length>0" class="swiperBox">
                <swiper-slide v-for="(item,index) in dataNav" :key="index" class="swiperB">
                    <div class="navBtnbox" v-for="(itemL,indexs) in item" :key="indexs" v-if="index == 4 && indexs == 1">
                        <div class="navBtn">
                            <div class="list" @click="onRouter('/indexAllNav')">
                                <div><img v-lazy="$imgUrl + itemL.img" alt=""></div>
                                <div>{{itemL.name}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="navBtnbox" v-else>
                        <div class="navBtn">
                            <div class="list" @click="onRouter('/indexNavgoodsOne',itemL.id)">
                                <div><img v-lazy="$imgUrl + itemL.img" alt=""></div>
                                <div>{{itemL.name}}</div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <div class="swiper-scrollbar" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { get } from '@/axiosApi'
export default {
	name: "index",
	components: {
		swiper,
    	swiperSlide
	},
	props: [],
	data () {
		return {
			bannerData: [],
			swiperOption: {
                slidesPerView: 5,
				scrollbar: {
                    el: '.swiper-scrollbar',
                    hide: false,
                },
            },
            dataNav: [],
		}
	},
	mounted() {
        this.getData()
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
        group (array, subGroupLength) {
            let index = 0;
            let newArray = [];
            while(index < array.length) {
                newArray.push(array.slice(index, index += subGroupLength));
            }
            return newArray;
        },
        getData () { // 一元
            let that = this
            let params = {
                limit: that.limitY
            }
			get('/index.php/home/index/cate',params).then(res => {
                let all = {
                    name: '全部分类',
                    img: ''
                }
                res.splice(9,0,all)
                that.dataNav = that.group(res,2)
            }).catch(function (error) {
                console.log(error)
            })
        },
	},
	watch: {}
};
</script>
<style lang="stylus" scoped>
.indexNav
    margin-top 20px
    padding 0 15px
    .navBox
        display flex
        align-items center
        .navHeader
            flex 1
            text-align left 
            .pz
                color $color
                font-size 16px
                line-height 1
                .name
                    padding 5px 0
                .list
                    display flex
                    margin-top 5px
                    align-items center
                    .tip
                        display flex
                        color #333
                        margin-right 2px
                        align-items center
                        flex 1
                        font-size 12px
                        img 
                            width 16px
                            margin-right 5px
                            display block
        .btn
            .cha
                background-color #b29e7d
                border-radius $border-radius
                color #ffffff
                padding 2px 8px
                margin-top 2px
    .swiperBox
        background: #fff
        padding 10px 0
        margin-top 10px
        border-radius $border-radius
        >>>.swiper-scrollbar
            width 20%
            background #aba6a67a
            left 50%
            transform translate(-50%)
            bottom 8px
            height 3px
            .swiper-scrollbar-drag
                background-color $background-color
    .navBtnbox
        .navBtn
            display flex
            align-items center
            flex-wrap wrap
            justify-content center
            .list
                flex 1
                margin-bottom 10px
                img
                    width 50px
                    height 50px
                    border-radius 100%
                    display block
                    margin auto auto 5px auto
</style>