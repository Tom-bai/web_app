<template>
    <!-- 招募VIP商品详情 -->
    <div class="ProductDetailsVIP">
        <div class="swiper" id="anchor-0">
            <van-swipe :autoplay="4000" @change="onChange">
                <van-swipe-item v-for="(image, index) in img" :key="index" class="swiperImg">
                    <img v-lazy="$imgUrl" />
                </van-swipe-item>
                <div class="custom-indicator" slot="indicator">
                    {{ current + 1}}/{{img.length}}
                </div>
            </van-swipe>
        </div>
    </div>
</template>

<script>
import { Swipe, SwipeItem,Area,GoodsAction,GoodsActionBigBtn,GoodsActionMiniBtn,Stepper,Popup } from 'vant'
import { get,post,toast } from '@/axiosApi'
import AddressInfo from '../assets/js/area'
export default {
	name: 'ProductDetailsVIP',
	props: {
		msg: String
    },
    components: {
        [Swipe.name]: Swipe,
        [SwipeItem.name]: SwipeItem,
        [Area.name]: Area,
        [GoodsAction.name]: GoodsAction,
        [GoodsActionMiniBtn.name]: GoodsActionMiniBtn,
        [GoodsActionBigBtn.name]: GoodsActionBigBtn,
        [Stepper.name]: Stepper,
        [Popup.name]: Popup,
	},
	data () {
		return {
            city: '北京市 北京市 东城区',
            img: new Array(5),
            current: 0,
		}
	},
	methods: {
        onChange(index) {
            this.current = index;
        },
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>

</style>
