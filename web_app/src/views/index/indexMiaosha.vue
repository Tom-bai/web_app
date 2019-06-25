<template>
	<!-- 限时秒杀 -->
    <div class="indexMiaosha">
        <NavTwo ></NavTwo>
    </div>
</template>

<script>
// @ is an alias to /src
import { get,post } from '@/axiosApi'
import NavTwo from '@/components/NavTwo'
export default {
	name: "indexMiaosha",
	components: {
        NavTwo
	},
	props: [],
	data () {
		return {
		}
	},
	mounted() {
    },
	methods: {
	},
	watch: {}
};
</script>
<style lang="stylus" scoped>
</style>