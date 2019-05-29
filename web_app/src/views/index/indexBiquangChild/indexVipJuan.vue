<template>
	<!-- 满件减活动 -->
    <div>
        <div class="indexVipQuan">
            <div class="banner" v-if="dataList.banner"><img v-lazy="$imgUrl + '/Uploads/' + dataList.banner.img" alt=""></div>
        </div>
     </div>
</template>

<script>
// @ is an alias to /src
import { get } from '@/axiosApi'
export default {
	name: "indexVipQuan",
	components: {
	},
	props: [],
	data () {
		return {
            dataList: []
        }
	},
	mounted() {
        this.getList()
    },
    created(){
    },
    beforeDestroy() {
    },
	methods: {
         getList () { // nav导航分类
            let that = this
            let params = {
                type: that.$route.query.id
            }
			get('/index.php/home/index/manjian_cate',params).then(res => {
                console.log(res);
                that.dataList = res
            }).catch(function (error) {
                console.log(error)
            })
        },
	},
	watch: {}
};
</script>
<style lang="stylus" scoped>
.banner
    img 
        width 100%
        display block
</style>