<template>
	<!-- 个人中心 -->
	<div>
		<div class="center">
			<div class="head">
				<div class="setting"><div class="iocn">设置</div></div>
				<div class="nameBox">
					<div class="img"><img :src="$imgUrl + UserInfo.img" alt=""></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import { get,post,toast } from '@/axiosApi'
import { log } from 'util';
export default {
	name: "center",
	components: {
	},
	props: [],
	data () {
		return {
			UserInfo: []
		}
	},
	mounted() {
        this.getUserInfo() 
    },
	methods: {
		getUserInfo () { // 个人信息
            let that = this
            get('/index.php/home/member/userInfo').then(res => {
                console.log(res);
				
            }).catch(function (error) {
                console.log(error)
            })
            
        },
	},
	watch: {}
};
</script>
<style lang="stylus" scoped>
.center
	.head
		background-image url('../../assets/img/center/z_mem_tp.jpg')
		background-repeat no-repeat
		background-size 100%
		background-position bottom
		background-color #e3bc91
		height 150px
		.setting
			display flex
			align-items center
			padding 10px 15px
			height 35px
			.iocn
				margin-left auto
</style>