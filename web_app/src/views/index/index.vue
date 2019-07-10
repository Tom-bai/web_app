<template>
	<!-- 首页 -->
	<div> 
		<div class="index"> 
            <div class="search-box">
                <div class="search" id="search" :class="topSearch?'topSearch':''">
                    <div class="head"><img v-lazy="$imgUrl + userData.img" alt=""></div>
                    <div class="input" @click="onRouter('/indexSearch')">搜索喜欢的宝贝</div>
                    <div class="tongzhi" @click="onRouter('/myMsg')">
                        <span class="text">消息</span>
                        <span class="num">{{unreadData.count}}</span>
                    </div>
                </div>
            </div>
			<indexSwiper></indexSwiper>
			<indexNav></indexNav>
			<indexBiqiang :indexImg="indexImg"></indexBiqiang>
			<indexMiaosha></indexMiaosha>
			<indexYiyuan :indexImg="indexImg"></indexYiyuan>
			<indexLeftscroll v-if="$store.state.INDEX_STATE == 0"></indexLeftscroll>
			<Like v-if="$store.state.INDEX_STATE == 0"></Like>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { get,post } from '@/axiosApi'
import indexNav from './indexNav'
import indexSwiper from './indexSwiper'
import indexBiqiang from './indexBiqiang'
import indexMiaosha from './indexMiaosha'
import indexYiyuan from './indexYiyuan'
import indexLeftscroll from './indexLeftscroll'
import Like from '@/components/Like'
export default {
	name: "index",
	components: {
		swiper,
        swiperSlide,
        indexNav,
        indexSwiper,
        indexBiqiang,
		indexMiaosha,
		indexYiyuan,
		indexLeftscroll,
		Like
	},
	props: [],
	data () {
		return {
            unreadData: [],
            topSearch: false,
            userData: JSON.parse(this.$store.state.USER_DATA),
            indexImg: [],
		}
	},
	mounted() {
        this.getUnread()
        this.getDataJin()
        this.getUser()
        this.getVIP()
        window.addEventListener('scroll', this.handleScroll)
        document.body.classList.remove('scrollFixed')
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll)
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
        getUnread () { // 获取通知
			let that = this
			post('/index.php/home/article/unread').then(res => {
				that.unreadData = res
            }).catch(function (error) {
                console.log(error)
            })
        },
        getUser () { // 获取用户信息
			let that = this
			get('/index.php/home/member/userInfo').then(res => {
                that.$store.commit('set_USER_DATA', JSON.stringify(res))
            }).catch(function (error) {
                console.log(error)
            })
        },
        getVIP () { // 获取用户是否VIP
			let that = this
			get('/index.php/home/member/isvip').then(res => {
                that.$store.commit('set_VIP', JSON.stringify(res))
                console.log(res);
                
            }).catch(function (error) {
                console.log(error)
            })
        },
        getDataJin () { // 首页新品，满减，砍价，拼团的设置
            let that = this
			get('/index.php/home/index/indexset').then(res => {
                that.indexImg = res   
            }).catch(function (error) {
                console.log(error)
            })
        },
        handleScroll() {
            let that = this
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
            if (scrollTop > 5) {
                this.topSearch = true
            } else {
                this.topSearch = false
            }
        },
	},
	watch: {}
};
</script>
<style lang="stylus" scoped>
.index
    margin-bottom 70px
.search-box
    position sticky
    top 0
    left 0
    z-index 100
    .search
        display flex
        align-items center
        padding 0 15px
        height 45px
        background-color #1a1a1a
        .head
            img
                width 28px
                border-radius 100%
                display block
        .input
            flex: 1
            background-color #fff
            border solid 1px #fff
            border-radius 20px
            text-align left 
            line-height 25px
            padding 0 34px
            margin 0 10px
            background-image url('../../assets/img/index/scH.png')
            background-size 15px
            background-position 10px 50%
            background-repeat no-repeat
            color #999
        .tongzhi
            position relative
            height 40px
            flex 0 0 30px
            background-image url('../../assets/img/index/tz.png')
            background-size 22px
            background-repeat no-repeat
            background-position 50% 0
            transform scale(0.7)
            .text 
                font-size 12px
                position absolute
                width 100%
                left 0
                bottom 0
                color #fff
            .num 
                height 18px
                min-width 8px
                padding 0 5px
                position absolute
                border-radius 10px
                line-height 18px
                background-color $background-color
                color #fff
                top -8px
                right -8px
                text-align center
                font-size 12px
    .topSearch
        background-color #fff
        box-shadow 0 0 2px #ccc
        .input
            border solid 1px $color
            background-image url('../../assets/img/index/scH.png')
        .tongzhi
            background-image url('../../assets/img/index/tzH.png')
            .text
                color $color
</style>