<template>
	<transition name="modal">
		<div class="modal-mask" @click="$emit('close')">
			<div class="modal-wrapper">
				<div class="modal-container cf">
					<div v-for='(list,index) in myTag' class="list-title" :key="index" @click="query(list,index)":class="{active:activeIndex===index}">{{list.title}}</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>

export default {
    props: ['myTag', 'activeIndex', 'query'], //接受父组件 方法 数据
    data() {
      return {
        navActiveIndex: 0, //初始化默认
      }
    },
    mounted() {

    },
    methods: {}

  }
</script>
<style scoped lang="stylus">
.modal-mask 
    z-index 9998
    top 50px
    left 0
    width 100%
    position absolute
    border-top solid 1px #f1f1f1f1
    .modal-container 
        background-color #fff
        display flex
        align-items center
        flex-wrap wrap
        .list-title 
            color #858585
            border-radius $border-radius
            font-size 14px
            flex 0 0 25%
            text-align center
            line-height 40px
            &.active 
                color #000
        .myTagClose 
            color #fff
            text-align center
.modal-default-button 
    float right
.modal-enter 
    opacity 0
.modal-enter .modal-container,.modal-leave-active .modal-container 
    transform translateY(-0.9rem)
    opacity 0
</style>