<template>
	<!-- 全部分类 -->
    <div>
        <div class="indexAllNav">
           <div class="menu-wrapper">
                <ul>
                    <li class="menu-item" v-for="(item,index) in dataNav" :key="index" :class="{current: index === currentIndex}" @click="clickList(item,index)"ref="menuList">
                        <span>{{item.name}}</span>
                    </li>
                </ul>
            </div>
            <div class="shop-wrapper">
                <ul ref="itemList">
                    <li class="shops-li">
                        <ul class="shops-items">
                            <li v-for="(item, index) in twoNavData" :key="index" @click="onRouter('/indexNavgoods',item.id)">
                                <img :src="$imgUrl + item.img" alt="">
                                <span>{{item.name}}</span>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import BScroll from 'better-scroll'
import { get } from '@/axiosApi'
export default {
	name: "index",
	components: {
	},
	props: [],
	data () {
		return {
            dataNav: [],
            datacc: new Array(20),
            twoNavData: [],
            currentIndex: 0,
            scrollY: 0 , //右侧列表滑动的y轴坐标
            rightLiTops:[] //所有分类头部位置
		}
    },
    computed: {
        //动态绑定class类名
        // currentIndex(index) {
        //     const {scrollY,rightLiTops} = this;
        //     return rightLiTops.findIndex((tops,index )=>{
        //         this._initLeftScroll(index);  //调用左右联调滚动效果
        //         return scrollY >= tops && scrollY < rightLiTops[index + 1]
        //     })
        // }
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
        getData () { // 一级
            let that = this
            let params = {
                limit: that.limitY
            }
			get('/index.php/home/index/cate',params).then(res => {
                that.dataNav = res
                that.getNav(that.dataNav[0].id)
            }).catch(function (error) {
                console.log(error)
            })
        },
        getNav(id) { // 获取二级分类nav
            let that = this
            let params = {
                id: id
            }
			get('/index.php/home/goods/getChildCate',params).then(res => {
                console.log(res);
                that.twoNavData = res
            }).catch(function (error) {
                console.log(error)
            })
        },
        clickList(id,index){
            this.currentIndex = index
            let that = this
            let params = {
                id: id.id
            }
			get('/index.php/home/goods/getChildCate',params).then(res => {
                that.twoNavData = res
            }).catch(function (error) {
                console.log(error)
            })
        },
        _initBScroll() {
            //左边滚动
            this.leftBscroll = new BScroll(this.$refs.menuList,{});
            
            //右边滚动
            this.rightBscroll = new BScroll(this.$refs.itemList,{
                probeType:3
            });
            //监听右边滚动事件
            this.rightBscroll.on('scroll',(pos) => {
                this.scrollY = Math.abs(pos.y);
                console.log(this.scrollY)
            })
        },
            
        //求出右边列表的高度
        _initRightHeight(){
            let itemArray=[]; //定义一个伪数组
            let top = 0;
            itemArray.push(top)
            //获取右边所有li的礼
            let allList = this.$refs.itemList.getElementsByClassName('shops-li');
            //allList伪数组转化成真数组
            Array.prototype.slice.call(allList).forEach(li => {
                top += li.clientHeight; //获取所有li的每一个高度
                itemArray.push(top)
            });
            this.rightLiTops = itemArray;
            // console.log(this.rightLiTops)
        },
        //左右联调 
        _initLeftScroll(index){
            let menu = this.$refs.menuList;
            let el = menu[index];
            this.leftBscroll.scrollToElement(el,300,0,-300)
            }
	},
	watch: {
        searchgoods(){
            //监听数据
            this.$nextTick(() =>{
                this. _initBScroll()
                this._initRightHeight()
            })
        }
    }
};
</script>
<style lang="stylus" scoped>
.indexAllNav
    display flex
    position absolute
    top 0
    bottom 0
    width 100%
    overflow hidden
    .menu-wrapper
        background-color #fafafa
        width 80px
        flex 0 0 80px
        overflow-y auto
        .menu-item 
            width 100%
            height 60px
            background #fafafa
            display flex
            justify-content center
            align-items center
            font-family lighter
            color #666
            position relative
        .current
            color #e02e24
            background #ffffff
        .current::before 
            content ''
            background-color #e02e24
            width 4px
            height 30px
            position absolute
            left 0
    .shop-wrapper
        flex 1
        background #fff
        .shops-li
            display flex
            flex-direction row
            padding 0 10px
            align-items center
            justify-content space-between
            color #9999
            a
                text-decoration none
                color #9c9c9c
                font-size 14px
            .shops-items
                display flex 
                flex-wrap wrap
            li
                display flex
                flex-direction column
                width 33.3%
                height 90px
                justify-content center
                align-items center 
                img 
                    width 60%
                    height 60%
                    margin-bottom 5px
                span
                    color #151516
                    font-size 13px
</style>