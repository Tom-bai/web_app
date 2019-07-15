<template>
	<!-- 会员招募 -->
    <div>
        <div class="vipZhaoMu">
            <div class="banner"><img src="../../../assets/img/vip/zhaobanner.png" alt=""></div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import { get } from '@/axiosApi'
export default {
	name: "vipZhaoMu",
	components: {
	},
	props: [],
	data () {
		return {

		}
	},
	mounted() {
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
	},
	watch: {}
};
</script>
<style lang="stylus" scoped>
.vipZhaoMu
    .banner
        img 
            width 100%
            display block
</style>