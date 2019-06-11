<template>
    <div>
        <div class="AddOrder">
            <SelectAddress></SelectAddress>
        </div>
    </div>
</template>

<script>
import SelectAddress from '@/components/SelectAddress'
export default {
	name: 'AddOrder',
	props: {
		msg: String
    },
    components: {
		SelectAddress
	},
	data () {
		return {
		}
    },
    mounted() {
        console.log(this.$route.query.id);
        
    },
	methods: {
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>

</style>
