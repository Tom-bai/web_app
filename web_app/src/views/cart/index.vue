<template>
	<!-- 购物车 -->
	<div>
		<div class="card">
			cart
            <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit" class="submitBar">
                <van-checkbox v-model="checked">全选</van-checkbox>
                <!-- <span slot="tip">
                    你的收货地址不支持同城送, <span>修改地址</span>
                </span> -->
            </van-submit-bar>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import { get,post } from '@/axiosApi'
import { SubmitBar,Checkbox } from 'vant'
export default {
	name: "cart",
	components: {
        [SubmitBar.name]: SubmitBar,
        [Checkbox.name]: Checkbox,
	},
	props: [],
	data () {
		return {
            cardData: [],
            checked: false
        }
    },
    mounted() {
        this.getCardData() 
    },
	methods: {
        getCardData () { // 获取商品详情
            let that = this
            let params = {
                id: that.$route.query.id
            }
			get('/index.php/home/shopCart/info').then(res => {
                that.cardData = res
            }).catch(function (error) {
                console.log(error)
            })
        },
        onSubmit () {
            console.log(22);
            
        }
    },
	watch: {}
};
</script>
<style lang="stylus" scoped>
.submitBar
    bottom 60px
</style>