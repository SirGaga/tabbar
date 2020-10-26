import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


const store = new Vuex.Store({
    state: {
        counter: 0
    },
    mutations: {
        //方法
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        }
    }
})

export default store