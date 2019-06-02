<template>
	<!-- 美妆学院 -->
    <div>
        <div class="indexMeiZhuang">
            <div class="swpier">
                <nut-swiper :paginationVisible="true" direction="horizontal" ref="demo1" :loop="true" class="myswpier">
                    <div  v-for="(item,index) in bannerData" :key="index"  class="nut-swiper-slide">
                        <img :src="$imgUrl + item.img" :alt="item.alt" class="myswpierimg">
                    </div>
                </nut-swiper>
            </div>
            <div class="navBtnbox">
                <div class="navBtn">
                    <div class="list" v-for="(itemT,index) in navBtn" :key="index"  @click="onRouter('/indexMeiZhuang',2)">
                        <div><img :src="itemT.img" alt=""></div>
                        <div>{{itemT.text}}</div>
                    </div>
                </div>
            </div>
        </div>
     </div>
</template>

<script>
// @ is an alias to /src
import { Button } from 'vant'
import { get } from '@/axiosApi'
export default {
	name: "indexMeiZhuang",
	components: {
        [Button .name]: Button 
	},
	props: [],
	data () {
		return {
            dataItem:null,
            dataImgItem:[],
            bannerData: [],
            navBtn: [
                {
                    id: 1,
                    nav: [
                        {
                            img: require('../../../assets/img/index/nav.jpg'),
                            text: '美妆护肤'
                        },
                        {
                            img: require('../../../assets/img/index/nav.jpg'),
                            text: '美妆护肤'
                        },
                    ]
                },
                {
                    id: 2,
                    nav: [
                        {
                            img: require('../../../assets/img/index/nav.jpg'),
                            text: '美妆护肤'
                        },
                        {
                            img: require('../../../assets/img/index/nav.jpg'),
                            text: '美妆护肤'
                        },
                    ]
                },
                {
                    id: 1,
                    nav: [
                        {
                            img: require('../../../assets/img/index/nav.jpg'),
                            text: '美妆护肤'
                        },
                        {
                            img: require('../../../assets/img/index/nav.jpg'),
                            text: '美妆护肤'
                        },
                    ]
                },
                {
                    id: 1,
                    nav: [
                        {
                            img: require('../../../assets/img/index/nav.jpg'),
                            text: '美妆护肤'
                        },
                        {
                            img: require('../../../assets/img/index/nav.jpg'),
                            text: '美妆护肤'
                        },
                    ]
                },
                {
                    id: 1,
                    nav: [
                        {
                            img: require('../../../assets/img/index/nav.jpg'),
                            text: '美妆护肤'
                        },
                        {
                            img: require('../../../assets/img/index/nav.jpg'),
                            text: '美妆护肤'
                        },
                    ]
                },
                {
                    id: 1,
                    nav: [
                        {
                            img: require('../../../assets/img/index/nav.jpg'),
                            text: '美妆护肤'
                        },
                        {
                            img: require('../../../assets/img/index/nav.jpg'),
                            text: '美妆护肤'
                        },
                    ]
                },
                {
                    id: 1,
                    nav: [
                        {
                            img: require('../../../assets/img/index/nav.jpg'),
                            text: '美妆护肤'
                        },
                        {
                            img: require('../../../assets/img/index/nav.jpg'),
                            text: '美妆护肤'
                        },
                    ]
                },
                {
                    id: 1,
                    nav: [
                        {
                            img: require('../../../assets/img/index/nav.jpg'),
                            text: '美妆护肤'
                        },
                        {
                            img: require('../../../assets/img/index/nav.jpg'),
                            text: '美妆护肤'
                        },
                    ]
                },
                {
                    id: 1,
                    nav: [
                        {
                            img: require('../../../assets/img/index/nav.jpg'),
                            text: '美妆护肤'
                        },
                        {
                            img: require('../../../assets/img/index/nav.jpg'),
                            text: '美妆护肤'
                        },
                    ]
                },
                
            ]
		}
	},
	mounted() {
        this.getBanner()
    },
    created(){

    },
    beforeDestroy() {
    },
	methods: {
        getBanner () { // 获取banner数据
			let that = this
			get('/index.php/home/index/banner').then(res => {
                this.$refs.demo1.updateEvent()
                that.bannerData = res
            }).catch(function (error) {
                console.log(error)
            })
        },
	},
	watch: {}
};
</script>
<style lang="stylus" scoped>
.myswpierimg
    width 100%
    height 100%
.myswpier
    >>>.nut-swiper-pagination
        .swiper-pagination-bullet
            width 20px
            height 5px
            border-radius 0
        .active
            background-color #000
</style>