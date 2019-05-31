<template>
	<div>
        <div class="Address">
            Address
        </div>
	</div>
</template>

<script>
import Bus from '@/bus.js'
export default {
	name: 'Address',
	props: {},
	data () {
		return {
		}
	},
	methods: {
        
    },
    watch: {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.Address
    position fixed
    width 100%
    height 100%
    top 0
    left 0
    overflow-y auto
    z-index 99
    background-color #f5f5f5
</style>
