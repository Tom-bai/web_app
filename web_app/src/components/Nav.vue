<template>
  <div>
    <div class="navBox">
      <div class="topic-list-inner">
            <div class="nav" ref="nav">
                <div class="box" v-for="(item,index) in list" :key="index" @click="queryTopic(item,index)">
                    <div class="item" :class="{active:navActiveIndex==index}">{{item.title}}</div>
                </div>
            </div>

            <div class="nav-right-arrow rotateUp" @click="openTagModal(list)">
                <img src="../assets/img/dwon.png" alt="" class="drop-down" :class="{reverse:showModal}">
            </div>
      </div>

      <!-- use the modal component, pass in the prop -->
      <NavModal v-if="showModal" @close="showModal = false" :query="queryTopic" :my-tag="selectTag" :active-index="navActiveIndex"></NavModal>
      <!--传递子组件的方法，参数-->
      <!--queryTopic:方法-->
      <!--selectTag：数据-->

    </div>
  </div>
</template>
<script>
import $ from '@/assets/js/jquery.min.js'
import AutoScroll from '@/assets/js/autoScroll'
import NavModal from './NavModal'
let autoScrollInstance = null  //关键点：在加载的插件之前的就要定义个变量的，如果定在data中 ，则会报错
export default {
    name: 'navScroll',
    data() {
        return {
            list: [ //自己定义的假数据，实际是获取的数据
                {title: 'AAAA', id: 1},
                {title: 'BBBB', id: 2},
                {title: 'CCCC', id: 3},
                {title: 'DDDD', id: 4},
                {title: 'EEEE', id: 5},
                {title: 'FFFF', id: 6},
                {title: 'HHHH', id: 7},
                {title: 'MMMM', id: 8},
                {title: 'RRRR', id: 9},
                {title: 'QQQQ', id: 10},
                {title: 'UUUU', id: 11},
                {title: 'TTTT', id: 12},
                {title: 'NNNN', id: 13},
                {title: 'OOOO', id: 14},
                {title: 'PPPP', id: 15},
                {title: 'ZZZZ', id: 16},
            ],
            navActiveIndex: 0, //当前高亮的tab选项卡index
            showModal: false, //是否显示modal
            selectTag: null,   //传递个子组件（modal）的数据的
        }
    },
    components: {
        NavModal
    },
    methods: {
        //
        queryTopic(data, index) {
            //点击谁，谁就高亮 ，定一个变量，click事件的赋值使其相等，而在:class 中 判断是否相等，即可
            this.navActiveIndex = index;

            //插件的调取方法
            if (autoScrollInstance) { //确保的插件加载成功
                autoScrollInstance.scrollTo(this.$refs.nav.childNodes[index])
            }
        },
        //点击modal的事件
        openTagModal(tag) {
            event.stopPropagation() //点击箭头，阻止事件向下传递
            this.showModal = !this.showModal //modal的出现
            this.selectTag = tag; //传值给modal子组件
        },
    },
    mounted() {
        //写在掉接口的里面的
        this.$nextTick(() => {
            autoScrollInstance = new AutoScroll(this.$refs.nav, {spaceBetween: 0})//节点 nav
        })
    }
}
</script>
<style lang="stylus" scoped>
.topic-list-inner 
    background #fff
    display flex
    align-items center
    padding 0 10px
.nav 
    display flex
    overflow-x auto
    overflow-y hidden
    .box 
        white-space nowrap
        font-size 14px
        line-height 30px
        color #333333
        padding 10px
        .item 
            height: 100%;
            &.active 
                color: #fe3e62;
                border-bottom: 1.5px solid #fe3e62;
.nav-right-arrow 
    right 0
    top 0
    width 30px
    /*background: #fff;*/
    background-image: linear-gradient(to right, rgba(#fff, 0), #fff 30%, #fff);
    display: flex;
    align-items: center;
    justify-content: center;

.drop-down 
    width: 30px;
    /*padding-top: 0.35rem;*/
    /*margin-left: 0.22rem;*/
    transform: rotate(0deg);
    transition: all 0.5s;
    &.reverse 
        transform: rotate(-180deg);
</style>