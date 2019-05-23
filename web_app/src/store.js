import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        INDEX_STATE: 0
    },
    mutations: {
        set_INDEX_STATE(state, val) { // 存众筹状态
            state.INDEX_STATE = val   
        },
    },
    actions: {
        set_INDEX_STATE(state, val) { // 存众筹状态
            state.INDEX_STATE = val   
        },
    }
})
