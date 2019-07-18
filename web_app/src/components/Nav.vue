<template>
  <div class="top">
    <div class="navBox">
      <div class="topic-list-inner">
            <div class="nav" ref="nav">
                <div class="box" v-for="(item,index) in dataNav" :key="index" @click.stop="queryTopic(item,index)">
                    <div class="item" :class="{active:navActiveIndex==index}">{{item.title}}</div>
                </div>
            </div>

            <div class="nav-right-arrow rotateUp" @click.stop="openTagModal(dataNav)">
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
import Bus from '@/bus.js'
let autoScrollInstance = null  //关键点：在加载的插件之前的就要定义个变量的，如果定在data中 ，则会报错
export default {
    name: 'navScroll',
    props: ['dataNav','navActive'],
    data() {
        return {
            navActiveIndex: 0, //当前高亮的tab选项卡index
            showModal: false, //是否显示modal
            selectTag: null,   //传递个子组件（modal）的数据的
        }
    },
    components: {
        NavModal
    },
    methods: {
        queryTopic(data, index) {
            //点击谁，谁就高亮 ，定一个变量，click事件的赋值使其相等，而在:class 中 判断是否相等，即可
            this.navActiveIndex = index;
            //插件的调取方法 
            if (autoScrollInstance) { //确保的插件加载成功
                autoScrollInstance.scrollTo(this.$refs.nav.childNodes[index])
            }
            // id 传父
            Bus.$emit('navBtn', data.id)
        },
        //点击modal的事件
        openTagModal(tag) {
            event.stopPropagation() //点击箭头，阻止事件向下传递
            this.showModal = !this.showModal //modal的出现
            this.selectTag = tag; //传值给modal子组件
        },
    },
    mounted() {
        this.$nextTick(() => {
            autoScrollInstance = new AutoScroll(this.$refs.nav, {spaceBetween: 0})//节点 nav
        })
        if (this.navActive == undefined) {
            this.navActiveIndex = 0
        } else {
            this.navActiveIndex = this.navActive
        }
    }
}
</script>
<style lang="stylus" scoped>
.top
    position sticky
    left 0
    top 0
    z-index 9
    .navBox
        position relative
        .topic-list-inner 
            background #fff
            display flex
            align-items center
            padding 0 10px
        .nav 
            display flex
            overflow-x auto
            overflow-y hidden
            -webkit-overflow-scrolling touch
            width 100%
            .box 
                white-space nowrap
                font-size 14px
                line-height 30px
                padding 10px
                color #858585
                .item 
                    height 100%
                    &.active 
                        color #000
                        border-bottom solid 2px #000
        .nav-right-arrow 
            right 0
            top 0
            background-image: linear-gradient(to right, rgba(#fff, 0), #fff 30%, #fff)
            display flex
            align-items center
            justify-content center
            flex 0 0 20px
            padding-left 10px
            img 
                width 80%
                display block
        .drop-down 
            width 30px
            transform rotate(0deg)
            transition all 0.5s
            &.reverse 
                transform rotate(-180deg)
</style>