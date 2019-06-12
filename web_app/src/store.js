import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        INDEX_STATE: 0,
        USER_DATA: localStorage.getItem("USER_DATA") || null,
        VIP: localStorage.getItem("USER_DATA") || null,
    },
    mutations: {
        set_INDEX_STATE(state, val) { // 存众筹状态
            state.INDEX_STATE = val   
        },
        set_USER_DATA(state, val) { // 存取用户数据
            localStorage.setItem("USER_DATA", val)
            state.USER_DATA = val     
        },
        set_VIP (state, val) { // 存取vip状态
            localStorage.setItem("VIP", val)
            state.VIP = val     
        },
    },
    actions: {
        set_INDEX_STATE(state, val) { // 存众筹状态
            state.INDEX_STATE = val   
        },
        set_USER_DATA(state, val) { // 存取用户数据
            localStorage.setItem("USER_DATA", val)
            state.USER_DATA = val     
        },
        set_VIP (state, val) { // 存取vip状态
            localStorage.setItem("VIP", val)
            state.VIP = val     
        },
    }
})
