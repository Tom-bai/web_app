<template>
	<!-- 退款 -->
	<div>
		<div class="refundGoods">
			refundGoods
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import { get,post,formatTime,toast } from '@/axiosApi'
export default {
	name: "refundGoods",
	components: {
        Nav,
        Like,
	},
	props: [],
	data () {
		return {
		}
	},
	mounted() {

    },
    beforeDestroy() {
    },
	methods: {
		getOrderList () { // 获取订单信息
            let that = this
            let params = {
                limit: that.limit,
                status: that.status
            }
            get('/index.php/home/member/orderList',params).then(res => {
                
            }).catch(function (error) {
                console.log(error)
            })
            
        },
        onRouter (pathUrl,id) {
			this.$router.push({
				path: pathUrl,
				query: {
                    id: id
				}
			})
		},
	},
	watch: {}
};
</script>
<style lang="stylus" scoped>

</style>