<template>
	<!-- 导航 -->
    <div>
        <div class="indexNav">
            <div class="navBox">
                <div class="navHeader">
                    <div class="pz">
                        <div class="name">享疯了自营 | 品质保障</div>
                        <div class="list">
                            <div class="tip">
                                <div><img src="../../assets/img/c.png" alt=""></div>
                                <div>享店自营</div>
                            </div>
                            <div class="tip">
                                <div><img src="../../assets/img/q.png" alt=""></div>
                                <div> 全球直采</div>
                            </div>
                            <div class="tip">
                                <div><img src="../../assets/img/z.png" alt=""></div>
                                <div> 假一赔十</div>
                            </div>
                            <div class="tip">
                                <div><img src="../../assets/img/s.png" alt=""></div>
                                <div>售后无忧</div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <div class="btn">
                    <div>保障措施</div>
                    <div class="cha">查看详情</div>
                </div> -->
            </div>
            <swiper :options="swiperOption" v-if="navBtn.length>0" class="swiperBox">
                <swiper-slide v-for="(item,index) in navBtn" :key="index" class="swiperB">
                    <div class="navBtnbox">
                        <div class="navBtn">
                            <div class="list" v-for="(itemT,index) in item.nav" :key="index">
                                <div><img :src="itemT.img" alt=""></div>
                                <div>{{itemT.text}}</div>
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
            navBtn: [
                {
                    id: 1,
                    nav: [
                        {
                            img: require('../../assets/img/nav.jpg'),
                            text: '美妆护肤'
                        },
                        {
                            img: require('../../assets/img/nav.jpg'),
                            text: '美妆护肤'
                        },
                    ]
                },
                {
                    id: 2,
                    nav: [
                        {
                            img: require('../../assets/img/nav.jpg'),
                            text: '美妆护肤'
                        },
                        {
                            img: require('../../assets/img/nav.jpg'),
                            text: '美妆护肤'
                        },
                    ]
                },
                {
                    id: 1,
                    nav: [
                        {
                            img: require('../../assets/img/nav.jpg'),
                            text: '美妆护肤'
                        },
                        {
                            img: require('../../assets/img/nav.jpg'),
                            text: '美妆护肤'
                        },
                    ]
                },
                {
                    id: 1,
                    nav: [
                        {
                            img: require('../../assets/img/nav.jpg'),
                            text: '美妆护肤'
                        },
                        {
                            img: require('../../assets/img/nav.jpg'),
                            text: '美妆护肤'
                        },
                    ]
                },
                {
                    id: 1,
                    nav: [
                        {
                            img: require('../../assets/img/nav.jpg'),
                            text: '美妆护肤'
                        },
                        {
                            img: require('../../assets/img/nav.jpg'),
                            text: '美妆护肤'
                        },
                    ]
                },
                {
                    id: 1,
                    nav: [
                        {
                            img: require('../../assets/img/nav.jpg'),
                            text: '美妆护肤'
                        },
                        {
                            img: require('../../assets/img/nav.jpg'),
                            text: '美妆护肤'
                        },
                    ]
                },
                {
                    id: 1,
                    nav: [
                        {
                            img: require('../../assets/img/nav.jpg'),
                            text: '美妆护肤'
                        },
                        {
                            img: require('../../assets/img/nav.jpg'),
                            text: '美妆护肤'
                        },
                    ]
                },
                {
                    id: 1,
                    nav: [
                        {
                            img: require('../../assets/img/nav.jpg'),
                            text: '美妆护肤'
                        },
                        {
                            img: require('../../assets/img/nav.jpg'),
                            text: '美妆护肤'
                        },
                    ]
                },
                {
                    id: 1,
                    nav: [
                        {
                            img: require('../../assets/img/nav.jpg'),
                            text: '美妆护肤'
                        },
                        {
                            img: require('../../assets/img/nav.jpg'),
                            text: '美妆护肤'
                        },
                    ]
                },
                
            ]
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
                flex 0 0 20%
                margin-bottom 10px
                img
                    width 50px
                    border-radius 100%
                    display block
                    margin auto auto 5px auto
</style>